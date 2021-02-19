<?php
namespace Drupal\dru_chat\Event;

use Symfony\Component\EventDispatcher\Event;

class DruChatEvent extends Event {

  const NEW_MESSAGE_EVENT = 'dru_chat_send_message_event';

  /**
   * Array item
   *  [
   *     'from' => $from,
   *     'to' => $to,
   *     'message' => $message,
   *     'is_read' => FALSE
   *   ];
   */
  protected $msg_data;

  public function __construct($msg_data) {
    $this->msg_data = $msg_data;
  }

  public function getMessageItem(){
    return $this->msg_data;
  }

}
