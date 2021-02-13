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
      console.log(data)

      if (current_id === data.from) {
        alert('sender is ME')
      } else if (current_id === data.to) {
        // update my view
        if (receiver_id === data.from) {
          document.querySelector(`[id="${data.from}"]`).click()
          // if receiver is selected reload the selected user..
        } else {
          // if receiver not selected, add unread notification for that user
          // debug from here
          let pending = document.querySelector(`[id="${data.from}"]`)
          if (pending.querySelector('.pending') && pending.querySelector('.pending').innerText) {
            pending.querySelector('.pending').innerText = pending.querySelector('.pending').innerText + 1
          } else {
            const item = document.createElement('span')
            item.classList.add('pending')
            item.innerText = 1
            pending.prepend(item)
          }
        }
        //alert('you nave a new massage')
      }

    })


    function sendNewMessage(e) {
      console.log(this)

      var msg = this.value
      // check if enter key is pressed and message and recever id not null
      if (e.keyCode === 13 && msg !== '' && receiver_id !== ''){

        // clear txt box
        this.value = ''
        var params = 'receiver_id=' + receiver_id + '&message=' + msg
        //xhr.send(params)

        const url = 'http://localhost/dru_push/web/dru-chat/new-message'

        xhr.open('POST', url, true)

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0")
        // TODO:: set up form csrf token

        xhr.onprogress = function () {
          console.log(xhr.readyState) // === 3
        }

        xhr.onload = function () {

          if (this.status === 200) {
            // 403: forbidden
            // 404: Not found

            console.log(this.responseText)
            console.log('New messahe div ++++++++++++++++++')
            console.log('New messahe div ++++++++++++++++++')
            console.log('New messahe div ++++++++++++++++++')
            console.log('New messahe div ++++++++++++++++++')
            console.log('New messahe div ++++++++++++++++++')
            console.log('New messahe div ++++++++++++++++++')

            //const users = JSON.parse(this.responseText)
            /*var output = ''
            output += '<ul>' +
                '<li> ID: '
                +
                '</ul>'
            console.log(this.responseText)
            messages.innerHTML = this.responseText

            // listener for message input
            const message = document.querySelector('[type="input"], [name="message"]')
            message.addEventListener('keyup', sendNewMessage) */
            /*document.getElementById('msg').innerHTML =
                this.responseText*/
          }
        }

        xhr.onerror = function () {
          console.log('ERRor')
        }

        xhr.send(params)
      }
    }

    function showChats() {
      receiver_id = this.id
      current_id = drupalSettings.dru_chat.current_id
      //this.classList.remove('active')
      this.classList.add('active')

      // OPEN - type, url/file, async
      // /dru-chat/messages/{user}
      //const url = 'https://api.github.com/users?name=mimi'
      const url = 'http://localhost/dru_push/web/dru-chat/messages/' + receiver_id

      xhr.open('GET', url, true)
      //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0")
      //var params = "name="+name;
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

      xhr.onprogress = function () {
        console.log(xhr.readyState) // === 3
      }

      // readyState === 4 onload
      xhr.onload = function () {

        if (this.status === 200) {
          // 403: forbidden
          // 404: Not found

          //const users = JSON.parse(this.responseText)
          var output = ''
          output += '<ul>' +
              '<li> ID: '
              +
              '</ul>'
          console.log(this.responseText)
          messages.innerHTML = this.responseText

          // listener for message input
          const message = document.querySelector('[type="input"], [name="message"]')
          message.addEventListener('keyup', sendNewMessage)
          /*document.getElementById('msg').innerHTML =
              this.responseText*/
        }
      }

      xhr.onerror = function () {
        console.log('ERRor')
      }

      xhr.send()
    }
  }

  if (document.readyState === 'complete'){

  }

  $(document).ready(function () {
    druChatInit()
  })
})(jQuery, Drupal, drupalSettings)
