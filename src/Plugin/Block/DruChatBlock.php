<?php

namespace Drupal\dru_chat\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'DruChatBlock' block.
 *
 * @Block(
 *  id = "dru_chat_block",
 *  admin_label = @Translation("Dru chat block"),
 * )
 */
class DruChatBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {


    return [
      '#theme' => 'dru_chat_block',
      '#data' => [
        'title' => 'Testing title',
        'chat' => 'Chatijng'
      ],
      '#attached' => [
        'library' => [
          'dru_chat/chat_libs',
        ],
      ],
    ];
  }

}
