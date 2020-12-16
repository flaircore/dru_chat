<?php


namespace Drupal\dru_chat\Form;


use Drupal\Component\Serialization\Json;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\AppendCommand;
use Drupal\Core\Ajax\HtmlCommand;
use Drupal\Core\Ajax\PrependCommand;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormState;
use Drupal\Core\Form\FormStateInterface;

class OnlineListForm extends FormBase {

  /**
   * Returns a unique string identifying the form.
   *
   * The returned ID should be a unique string that can be a valid PHP function
   * name, since it's used in hook implementation names such as
   * hook_form_FORM_ID_alter().
   *
   * @return string
   *   The unique string identifying the form.
   */
  public function getFormId() {
    return 'users_online_list_form';
  }

  /**
   * Form constructor.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @return array
   *   The form structure.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // do better, username is easy to get hacked as pple login with such

    $online_users = $this->getOnlineUsers();

    //dump($online_users);

    $options = [
      '_one_one' => 'One',
      'to_two' => 'Two',
      'threreeee' => 'Three'
    ];

    //dump($options);

    // Sector.
    $form['online_users'] = [
      '#type' => 'select',
      '#empty_value' => '',
      '#multiple' => TRUE,
      #'#empty_option' => '- Select a value -',
      '#default_value' => '',
      '#options' => $online_users,
      '#ajax' => [
        'callback' => [$this, 'chatUser'],
        'event' => 'change',
        #'wrapper' => $ajax_wrapper,
      ],
    ];


    $form['chat_list'] = [
      '#type' => 'markup',
      '#markup' => '<div id="chat_list" class="chat_list">Loading chatters .....</div>',
    ];

    return $form;


  }


  public function chatUser(array $form, FormStateInterface $form_state) {


    $key = $form_state->getValue('online_users');

    $value = array_values($key);
    $account = \Drupal\user\Entity\User::load($value[0]);
    $name = $account->getDisplayName();
    $chat_form = \Drupal::formBuilder()->getForm('\Drupal\dru_chat\Form\ChatForm', $name);

    /** @var \Drupal\Core\Render\Renderer  $renderer */
    $renderer = \Drupal::service('renderer');
    $response = new AjaxResponse();

    $response->addCommand(
      new HtmlCommand(
        '.chat_list',
        '<div class="message-list">CHAT ME TOO !!!!!!!!!!!!!!!!!!!!!!! '.$value[0].' NOWWW</div> <div> '.$renderer->render($chat_form).'</div>'
      )
    );

    return $response;
  }

  /**
   * Form submission handler.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // TODO: Implement submitForm() method.
  }



  protected function getOnlineUsers(){
    // Do better later
    $users = \Drupal::entityTypeManager()->getStorage('user');
    $query = $users->getQuery()
      ->condition('status', 1)
      ->pager(15)
      ->execute();

    $users = $users->loadMultiple($query);

    $list = [];
    /** @var \Drupal\user\Entity\User $user */
    foreach ($users as $user) {
      $name = $user->getDisplayName();
      $id = $user->id();

      $list[$id] = $this->t($name);
      //dump($name);
      //dump($id);
      //$item = [$id => t($name)];
      //array_push($list, $name);

    }

    return $list;

  }
}