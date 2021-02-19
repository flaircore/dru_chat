
(function ($, Drupal, drupalSettings) {
  const Pusher = require('pusher-js')

  function druChatInit() {
    let receiver_id = '', pusher_cluster = '', pusher_app_key = '', current_id = ''

    // this.target.remove()
    const usersList = document.querySelector('#dru-chat-block .users')
    console.log(usersList)
    console.log(usersList)
    console.log(usersList)
    console.log(usersList)
    const messages = document.querySelector('#messages')
    const users = usersList.children


    for (user of users) {
      console.log(user)
      console.log()
      user.addEventListener('click', showChats)

    }

    var xhr = new XMLHttpRequest()

    pusher_app_key = drupalSettings.dru_chat.pusher_app_key
    pusher_cluster = drupalSettings.dru_chat.pusher_cluster

    Pusher.logToConsole = true
    console.log(pusher_app_key, pusher_cluster)
    var pusher = new Pusher( pusher_app_key, {
      cluster: pusher_cluster
    })

    var channel = pusher.subscribe('my-channel')

    channel.bind('dru-chat-event', function(data) {
      current_id = drupalSettings.dru_chat.current_id
      if (current_id === data.from) {
        document.querySelector(`[id="${data.to}"]`).click()
      } else if (current_id === data.to) {
        // update my view
        if (receiver_id === data.from) {
          document.querySelector(`[id="${data.from}"]`).click()
          // if receiver is selected reload the selected user..
        } else {
          // if receiver not selected, add unread notification for that user

          let pending = document.querySelector(`[id="${data.from}"]`)

          // update total unread if this user is not active state TODO also

          if (pending.querySelector('.pending') && pending.querySelector('.pending').innerText) {
            pending.querySelector('.pending').innerText = parseInt(pending.querySelector('.pending').innerText) + 1
          } else {
            const item = document.createElement('span')
            item.classList.add('pending')
            item.innerText = 1
            pending.prepend(item)
          }
        }
      }

    })


    function sendNewMessage(e) {
      //console.log(this)

      var msg = this.value
      // check if enter key is pressed and message and recever id not null
      if (e.keyCode === 13 && msg !== '' && receiver_id !== ''){

        // clear txt box
        this.value = ''
        var params = 'receiver_id=' + receiver_id + '&message=' + msg
        //xhr.send(params)
        //alert(params)


        const url = drupalSettings.dru_chat.new_msg_url
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0")

        // TODO:: set up form csrf token

        xhr.onprogress = function () {
          //console.log(xhr.readyState) // === 3
        }

        xhr.onload = function () {

          if (this.status === 200) {
            scrollMessageList()
          }
        }

        xhr.onerror = function () {
          //console.log('ERRor')
        }

        xhr.send(params)
      }
    }

    function showChats() {
      receiver_id = this.id
      current_id = drupalSettings.dru_chat.current_id
      // remove active class from prev if any
      let prev_active = document.querySelector('.users .active')
      if (prev_active) prev_active.classList.remove('active')

      let messages_div_hidden = document.querySelector('#dru-chat-block #messages')
      if (messages_div_hidden) messages_div_hidden.style.display = 'inline-block'

      // toggle messages display: none
      //this.classList.remove('active')
      // remove unread notification
      let notifications = document.querySelector(`[id="${this.id}"]`)
      if (notifications && notifications.querySelector('.pending')) {
        notifications.querySelector('.pending').remove()
      }
      this.classList.add('active')

      // OPEN - type, url/file, async
      // /dru-chat/messages/{user}
      //const url = 'https://api.github.com/users?name=mimi'
      const url = drupalSettings.dru_chat.msgs_url + receiver_id

      xhr.open('GET', url, true)
      xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0")
      //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

      xhr.onprogress = function () {
        console.log(xhr.readyState) // === 3
      }

      // readyState === 4 onload
      xhr.onload = function () {

        if (this.status === 200) {
          // 403: forbidden
          // 404: Not found
          messages.innerHTML = this.responseText

          // listener for message input
          const message = document.querySelector('[type="input"], [name="message"]')
          message.addEventListener('keyup', sendNewMessage)
          scrollMessageList()
        }
      }

      xhr.onerror = function () {
        //console.log('ERRor')
      }

      xhr.send()
    }
  }

  if (document.readyState === 'complete'){

  }

  $(document).ready(function () {
    druChatInit()
  })

  // scroll message list
  function scrollMessageList(){
    const msgList = document.querySelector('.message-wrapper')
    /*var y = msgList.scrollHeight;
    var x = msgList.scrollWidth;
    console.log('************** DID YOU CALL ME **********************')
    console.log('************** DID YOU CALL ME **********************')
    console.log('************** DID YOU CALL ME **********************')
    console.log('************** DID YOU CALL ME **********************')
    console.log(msgList)
    console.log(x)
    console.log(y)
    console.log(msgList.animate({scroll}))*/
    $('.message-wrapper').animate({
      scrollTop: msgList.scrollHeight
    }, 50)
  }
})(jQuery, Drupal, drupalSettings)
