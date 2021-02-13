//const Pusher = require("pusher")
import Pusher from 'pusher-js';
//import './scss/main.scss'

// https://stackoverflow.com/questions/34782493/difference-between-csrf-and-x-csrf-token
// https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs
(function ($, Drupal, drupalSettings) {

  var receiver_id = '';
  var my_id = drupalSettings.dru_chat.user;// load from request instead

  console.log('CHAT JS JS JSJ');
  console.log('CHAT JS JS JSJ');
  console.log(my_id);
  console.log('CHAT JS JS JSJ');
  console.log('CHAT JS JS JSJ');

  // https://stackoverflow.com/questions/34782493/difference-between-csrf-and-x-csrf-token

  $(document).ready(function () {

    // ajax setup form csrf token
    /*$.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })

    */

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('load from config_form app id', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('dru-chat-event', function(data) {
      //alert(JSON.stringify(data));

      if (my_id === data.from) {

        //alert('SENDER!!!')
        $('#'+data.to).click()

      } else if (my_id === data.to) {

        if (receiver_id === data.from) {

          // if receiver is selected, reload the selected user ...\
          $('#'+data.from).click()
        } else {

          // if not populate counter
          var unread = parseInt($('#' + data.from).find('.pending').html())
          if (unread) {
            $('#'+ data.from).find('.pending').html(unread + 1)
          } else {
            $('#' + data.from).append('<span class="pending">1</span>')
          }
        }

      }
    });


    $('.user').click(function () {
      $('.user').removeClass('active');
      $(this).addClass('active');
      $(this).find('.pending').remove()

      receiver_id = $(this).attr('id');
      //alert(receiver_id);

      $.ajax({
        //protocol: '',
        type: 'get',
        url: 'http://localhost/dru_8_tests/web/dru-chat/messages/' + receiver_id,
        data:'',
        cache: false,
        success: function (data) {
          //console.log(data);
          $('#messages').html(data);
          scrollToBottom()
        }
      });

    })

    // send message

    $(document).on('keyup', '.dru-chat-message-box input', function (e) {

      var message = $(this).val()

      if (e.keyCode === 13 && message !== '' && receiver_id !== ''){
        //alert(message)
        $(this).val('') // clear input
        var request_data = 'receiver_id=' + receiver_id + '&message=' + message

        $.ajax({
          type: 'post',
          url: 'http://localhost/dru_8_tests/web/dru-chat/new-message',
          data: request_data,
          cache: false,
          success: function (data) {
            console.log(data)

          },

          error: function (jqXHR, status, err) {

          },

          complete: function () {
            scrollToBottom()

          }

        })
      }
    })

  });


  function scrollToBottom() {
    $('.message-wrapper').animate({
      scrollTop: $('.message-wrapper').get(0).scrollHeight
    }, 50)
  }


})(jQuery, Drupal, drupalSettings);