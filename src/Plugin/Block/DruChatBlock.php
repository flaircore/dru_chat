<?php

namespace Drupal\dru_chat\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Form\FormState;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\dru_chat\Service\Messages;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Url;

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

  /**
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  public function __construct(array $configuration, $plugin_id, $plugin_definition, Messages $messages, ConfigFactoryInterface $configFactory) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->messages = $messages;
    $this->configFactory = $configFactory;
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
      $container->get('dru_chat.messages'),
      $container->get('config.factory')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {

    // TODO:: custom fallback for all users not logged in

    /*$form_state = new FormState();
    $form_state->setRebuild();

    $form = \Drupal::formBuilder()->buildForm('\Drupal\dru_chat\Form\OnlineListForm', $form_state);


    return $form; */

    //$messages = $this->messages->generateFakeData();

    //$this->messages->generateFakeData();

    //dump($messages);

    $user = \Drupal::currentUser();
    $config = $this->configFactory->getEditable('dru_chat.settings');
    $cluster = $config->get('cluster');
    $app_id = $config->get('app_id');
    $secret = $config->get('secret');
    $auth_key = $config->get('auth_key');

    $token = \Drupal::csrfToken();


    $new_msg_url = Url::fromRoute('dru_chat.new_messages');
    $new_msg_url_token = $token->get($new_msg_url->getInternalPath());
    $new_msg_url->setOptions(['absolute' => TRUE, 'query' => ['token' => $new_msg_url_token]]);
    $new_msg_url = $new_msg_url->toString();

    $msgs_url = Url::fromRoute('<front>');
    //$msgs_url_token = $token->get($msgs_url->getInternalPath());
    //$msgs_url->setOptions(['absolute' => TRUE, 'user' => NULL, 'query' => ['token' => $msgs_url_token]]);
    $msgs_url->setOptions(['absolute' => TRUE]);
    $msgs_url = $msgs_url->toString();

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
    $total_unread = [];
    foreach ($unread_messages as $unread_message) {
      array_push($total_unread, $unread_message['message_count']);
    }

    $users = $users->loadMultiple($user_ids);

    return [
      '#theme' => 'dru_chat_block',
      '#cache' => ['max-age' => 0],
      '#data' => [
        'title' => 'Testing title',
        'total_unread' => array_sum($total_unread),
        'pusher_cluster' => $cluster,
        'pusher_app_key' => $auth_key,
        'users' => $users,
        'current_id' => $user->id(), // TODO:: token for guests
        'unread_messages' => $unread_messages,
      ],
      '#attached' => [
        'library' => [
          'dru_chat/chat_libs',
        ],
        'drupalSettings' =>[
          'dru_chat' => [
            'current_id' => $user->id(),
            'pusher_cluster' => $cluster,
            'pusher_app_key' => $auth_key,
            'new_msg_url' => $new_msg_url,
            'msgs_url' => $msgs_url . "dru-chat/messages/"
          ]
        ]
      ],
    ];
  }

}
