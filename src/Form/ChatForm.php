<?php

namespace Drupal\dru_chat\Form;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\HtmlCommand;
use Drupal\Core\Ajax\InvokeCommand;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\dru_chat\Ajax\LoadMessagesCommand;

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
  public function buildForm(array $form, FormStateInterface $form_state, $to = NULL) {

    //dump($this->getOnlineUsers());


    $form['messages'] = [
      '#type' => 'markup',
      '#markup' => '<div id="message-results" class="message-results">Loadind....</div>',
    ];

    $form['message_to'] = [
      '#type' => 'textfield',
      '#title' => $this->t('To User'),
      '#value' => $to,
      '#required' => TRUE,
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
      '#type' => 'textarea',
      '#title' => $this->t('Message'),
      '#required' => TRUE,
    ];


    $form['actions_manual'] = [
      '#type' => 'button',
      '#value' => $this->t('Input Manually'),
      '#ajax' => [
        'callback' => '::sendMessage',
      ],
    ];


    //$form['#attached']['library'][] = 'dru_chat/form_libs';

    return $form;
  }


  public function sendMessage(){

    $response = new AjaxResponse();

    $response->addCommand(
      new HtmlCommand(
        '.message-results',
        '<div class="message-list">NEWEST CHAT MESSAEGE NOW..................................................... </div>'
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


  /*
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
    <div id="ajax-target">Ajax goes here!!!</div>
        <ul id="users-list">';

    //@var \Drupal\user\Entity\User $user
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

  */
}