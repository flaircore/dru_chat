<?php

namespace Drupal\dru_chat\Controller;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use Drupal\dru_chat\Service\Chat;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ServerController.
 */
class ServerController extends ControllerBase {


  /**
   * Initializes websockets server
   */
  public function serverInit() {

    /*
    $server = IoServer::factory(
      new HttpServer(
        new WsServer(
          new Chat()
        )
      ),
      8080
    );

    print(Json::encode($server));

    $server->run(); */


    return new JsonResponse('HELLO');
  }

  /**
   * returns a chat form for each user
   * via ajax.. can load upto 10 of this
   */
  public function loadChatForm(Request $request){

  }

  /**
   * returns a user massage thread for a pair of users
   */
  public function loadMessages(Request $request){

  }

  /**
   * updates the message to read for message recipient on view
   */
  public function updateMsgRead(Request $request){

  }

}
