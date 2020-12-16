//const Pusher = require("pusher")
import Pusher from 'pusher-js';
import './scss/main.scss'


(function ($, Drupal) {

    var receiver_id = '';
    var my_id = '{{user.id}}';// load from request instead

    console.log('CHAT JS JS JSJ');
    console.log('CHAT JS JS JSJ');
    console.log('CHAT JS JS JSJ');
    console.log('CHAT JS JS JSJ');
    console.log('CHAT JS JS JSJ');
    console.log('CHAT JS JS JSJ');

    // https://youtu.be/cPGhs94Rj5E?t=3584
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

        var pusher = new Pusher('from config', {
            cluster: 'ap2'
        });

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
            alert(JSON.stringify(data));
        });


        $('.user').click(function () {
            $('.user').removeClass('active');
            $(this).addClass('active');

            receiver_id = $(this).attr('id');
            alert(receiver_id);

            $.ajax({
                //protocol: '',
                type: 'get',
                url: 'http://localhost/dru_8_tests/web/dru-chat/messages/' + receiver_id,
                data:'',
                cache: false,
                success: function (data) {
                    console.log(data);
                    $('#messages').html(data);
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

                    }

                })
            }
        })

    });


})(jQuery, Drupal);