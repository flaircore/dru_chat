<?php

namespace Drupal\dru_chat\Ajax;

use Drupal\Core\Ajax\CommandInterface;

class LoadMessagesCommand implements CommandInterface {


  private $selector;
  private $duration;
  /**
   * LoadMessagesCommand constructor.
   *
   * @param $selector
   * @param null $duration
   */
  public function __construct($selector, $duration = NULL) {
    $this->selector = $selector;
    $this->duration = $duration;
  }

  /**
   * Return an array to be run through json_encode and sent to the client.
   */
  public function render() {

    return [
      'command' => 'loadChatMessages', // Name of Javascript method
      // other response arguments
      'selector' => $this->selector,
      'duration' => $this->duration,
      'method' => NULL,
    ];
  }
}