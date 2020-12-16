<?php


namespace Drupal\dru_chat\Service;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Faker\Factory;
use Faker\Generator;
use Pusher\Pusher;

class Messages {

  /** @var  \Drupal\Core\Entity\EntityTypeManagerInterface */
  protected $entityTypeManager;

  public function setEntity(EntityTypeManagerInterface $entityTypeManager){
    $this->entityTypeManager = $entityTypeManager;
  }

  public function getMessages($user_id){

    /** @var \Drupal\Core\Session\AccountProxy $current_user */
    $current_user = \Drupal::currentUser();
    //dump($current_user->id());
    //dump($user_id);

    $users = [$current_user->id(), $user_id];

    // update unread
    $update_query = \Drupal::database()->update('dru_chat_messages');
    $update_query->fields(['is_read' => TRUE])
      ->condition('from', $user_id)
      ->condition('to', $current_user->id())
      ->execute();

    // return messages which are from current_user->id()
    // and to = $user_id, OR from = $user_id and to = $current_user->id()
    $entity = $this->entityTypeManager->getStorage('dru_chat_messages');


    $query = $entity->getQuery();

    $data = $query
      #->condition('status', 1)
      //->condition('type', $bundle)
      #->accessCheck(FALSE)
        ->condition('from', $users, 'IN')
        ->condition('to', $users, 'IN')
      ->sort('id','ASC')
      ->pager(30)
      ->execute();
    return $entity->loadMultiple($data);



  }

  public function createMessage($to, $message){

    /** @var \Drupal\Core\Session\AccountProxy $current_user */
    $current_user = \Drupal::currentUser();
    $from = $current_user->id();

    $entity = $this->entityTypeManager->getStorage('dru_chat_messages');

    $values = [
      'from' => $from,
      'to' => $to,
      'message' => $message,
      'is_read' => FALSE
    ];


    $entity->create($values)->save();

    // Send to pusher

    $options = array(
      'cluster' => 'ap2',
      'useTLS' => true
    );
    $pusher = new Pusher(
      'load from config_form',
      'load from config_form',
      'load from config_form',
      $options
    );

    $data['message'] = 'hello world';
    $data = [
      'from' => $from,
      'to' => $to,

    ];
    $pusher->trigger('my-channel', 'dru-chat-event', $data);

    return $entity;
  }

  public function countUnread($users, $current_user){

    // TODO:: inject instead
    $query = \Drupal::entityQueryAggregate('dru_chat_messages');
    $data = $query
      ->condition('from', $users, 'IN')
      ->condition('to', $current_user)
      ->condition('is_read', FALSE)
      ->groupBy('from')
      ->aggregate('message', 'COUNT')
      ->execute();
    return $data;

  }

  public function sendMessage(){

  }

  public function generateFakeData(){
    $entity = $this->entityTypeManager->getStorage('dru_chat_messages');


    // create demos

    $faker = Factory::create();

    for ($i = 0; $i < 500; ++$i) {

      do {

        $from = rand(1, 20);
        $to = rand(1, 20);
        $is_read = rand(0, 1);

      } while ($from === $to);

      $values = [
        'from' => $from,
        'to' => $to,
        'message' => $faker->sentence,
        'is_read' => $is_read
      ];


      $entity->create($values)->save();



    }
  }

}