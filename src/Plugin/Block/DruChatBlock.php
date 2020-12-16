<?php

namespace Drupal\dru_chat\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormState;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\dru_chat\Service\Messages;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a 'DruChatBlock' block.
 *
 * @Block(
 *  id = "dru_chat_block",
 *  admin_label = @Translation("Dru chat block"),
 * )
 */
class DruChatBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * @var \Drupal\dru_chat\Service\Messages
   */
  private $messages;

  public function __construct(array $configuration, $plugin_id, $plugin_definition, Messages $messages) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->messages = $messages;
  }

  /**
   * Creates an instance of the plugin.
   *
   * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
   *   The container to pull out services used in the plugin.
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin ID for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   *
   * @return static
   *   Returns an instance of this plugin.
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('dru_chat.messages')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {

    /*$form_state = new FormState();
    $form_state->setRebuild();

    $form = \Drupal::formBuilder()->buildForm('\Drupal\dru_chat\Form\OnlineListForm', $form_state);


    return $form; */

    //$messages = $this->messages->getMessages();

    // $this->messages->generateFakeData();

    //dump($messages);

    $user = \Drupal::currentUser();

    //dump($user);

    // do better here... users online and such
    $users = \Drupal::entityTypeManager()->getStorage('user');
    $user_ids = $users->getQuery()
      #->latestRevision()
      ->condition('status', 1)
      ->condition('uid', $user->id(), '!=')
      ->pager(15)
      ->execute();

    // get unread messages from user_ids
    $unread_messages = $this->messages->countUnread($user_ids, $user->id());

    $users = $users->loadMultiple($user_ids);



    #dump($users);
    return [
      '#theme' => 'dru_chat_block',
      '#cache' => ['max-age' => 0],
      '#data' => [
        'title' => 'Testing title',
        'chat' => 'Chatijng',
        'users' => $users,
        'unread_messages' => $unread_messages,
      ],
      '#attached' => [
        'library' => [
          'dru_chat/chat_libs',
        ],
      ],
    ];
  }

}
