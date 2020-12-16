<?php


namespace Drupal\dru_chat\Controller;


use Drupal\Component\Serialization\Json;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Session\AccountInterface;
use Drupal\dru_chat\Service\Messages;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class MessagesController extends ControllerBase {


  /**
   * @var \Drupal\dru_chat\Service\Messages
   */
  private $messages;

  public function __construct(Messages $messages) {
    $this->messages = $messages;
  }

  public static function create(ContainerInterface $container) {

    $messages = $container->get('dru_chat.messages');
    return new static($messages);
  }

  public function getMessages(AccountInterface $user, Request $request){

    if (!$user) return exit();

    // check request types.. get/post/ajax
    //dump($request->getMethod());

    $user_id = $user->id();

    if ($request->getMethod() === 'GET'){
      $messages = $this->messages->getMessages($user_id);
      //dump($messages);
      $build = [
        '#type' => 'markup',
        '#cache' => ['max-age' => 0],
        '#theme' => 'dru_chat_messages',
        '#data' => [
          'messages' => $messages,
          'user_id' => $user->getDisplayName()
        ],
      ];

      $html = \Drupal::service('renderer')->renderRoot($build);
      $response = new Response();
      $response->setContent($html);

      return $response;

    }
  }

  public function newMessage(Request $request){
    // send the message from the request
    // from current session user
    $to = $request->get('receiver_id');
    $message = $request->get('message');

    $created = $this->messages->createMessage($to, $message);

    return new JsonResponse($created);

  }

}