<?php
namespace Drupal\dru_chat\Service;
require __DIR__.'../../../../../../vendor/autoload.php';




use Drupal\Component\Serialization\Json;
use Ratchet\App;
use Ratchet\Http\HttpServer;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;


$app = new App("localhost", 8080, '0.0.0.0', $loop);
$app->route('/chat', new Chat, array('*'));

$app->run();

/*$server = IoServer::factory(
  new HttpServer(
    new WsServer(
      new Chat()
    )
  ),
  8080
);

print(Json::encode($server));

$server->run();
*/

/*class Server {


  public function startSocketServer(){

    $server = IoServer::factory(
      new HttpServer(
        new WsServer(
          new Chat()
        )
      ),
      8080
    );

    $server->run();
  }
}
*/