<?php

namespace Drupal\dru_chat\Controller;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use Drupal\dru_chat\Service\Chat;

/**
 * Class ServerController.
 */
class ServerController extends ControllerBase {


  /**
   * Initializes websockets server
   */
  public function serverInit() {

    $server = IoServer::factory(
      new HttpServer(
        new WsServer(
          new Chat()
        )
      ),
      8080
    );

    print(Json::encode($server));

    $server->run();


    return new JsonResponse('HELLO');
  }

}
