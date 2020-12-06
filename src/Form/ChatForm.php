<?php

namespace Drupal\dru_chat\Form;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\HtmlCommand;
use Drupal\Core\Ajax\InvokeCommand;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class ChatForm extends FormBase {

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
    return 'dru_chat_form';
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

    $form['messages'] = [
      '#type' => 'markup',
      '#markup' => '<div id="message-results" class="message-results"></div>',
    ];

    $form['users_online'] = [
      '#type' => 'markup',
      '#markup' => $this->getOnlineUsers(),
    ];

    $form['message_body'] = [
      '#type' => 'markup',
      '#markup' => '<div id="message-body" class="message-body" style="height: 400px; overflow-y: scroll; overflow-x: hidden;">

        <div style="text-align: right;">
            <p style="background-color: lightblue; word-break: break-word; display: inline-block;
                padding: 5px; border-radius: 10px; max-width: 70%;">
                Chat message Here!!!!

            </p>

        </div>
        <div style="text-align: left;">
            <p style="background-color: yellow; word-break: break-word; display: inline-block;
                padding: 5px; border-radius: 10px; max-width: 70%;">
                Chat message Here Form the other user here!!!!

            </p>

        </div>
    </div>',
    ];

    $form['message'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Message'),
      '#required' => TRUE,
    ];

    $form['reload'] = [
      '#type' => 'actions',
      '#attributes' => [
        'class' => [ 'reload-form'],
        'id' => [ 'reload-form-btn'],
      ],
      '#value' => $this->t('Reload'),
      '#ajax' => [
        'callback' => '::reloadMessage',
        'disable-refocus' => FALSE,
        //'event' => 'change',
      ],
    ];

    $form['actions'] = [
      '#type' => 'button',
      '#value' => $this->t('Send'),
      '#ajax' => [
        'callback' => '::sendMessage',
        'disable-refocus' => FALSE,
        //'event' => 'change',
      ],
    ];

    $form['#attached']['library'][] = 'dru_chat/form_libs';

    return $form;
  }


  public function sendMessage(array &$form, FormStateInterface $form_state){

    $message = $form_state->getValue('message');
    $from = 25;
    $to = [28, 33];

    $message = Json::encode([$message, $from, $to]);

    $response = new AjaxResponse();

    $response->addCommand(
      new HtmlCommand(
        '.message-results',
        '<div class="message-list">'.$this->t($form_state->getValue('message')).'</div>'
      )
    );

    $response->addCommand(
      new InvokeCommand(
        NULL,
        'on_chat',
        [$message]
      )
    );

    return $response;
  }

  public function reloadMessages(array &$form, FormStateInterface $form_state){

    $response = new AjaxResponse();

    $response->addCommand(
      new HtmlCommand(
        '#message-body',
        '<div class="chat-content">'.$this->t('Reaload the messages for more!!!!').'</div>'
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

    $markup = '
    <div id="online-users"><h3>Online Users</h3>
        <ul id="users-list">';

    /** @var \Drupal\user\Entity\User $user */
    foreach ($users as $user) {
      $name = $user->getDisplayName();
      $uuid = $user->uuid();
      $id = $user->id();

      $markup .= '<li id="online-user" value='.$uuid.'>'.$name.'</li>';

    }

    $markup .='</ul>
    </div>
    
    ';

    return $markup;
  }
}