CONTENTS OF THIS FILE
---------------------

* Introduction
* Recommended modules
* Installation
* Configuration


INTRODUCTION
------------
This module provides a live chat block, and uses the pusher api.
Project home page: https://www.drupal.org/project/dru_chat
https://pusher.com/channels/pricing
![Chat View](/chat_thread.PNG)

INSTALLATION
------------
Run `composer require 'drupal/dru_chat:1.0.x-dev@dev'` to install this module.
<strike>
Before enabling this module, as at this stage (sandbox), download the pusher api library
via composer by running `composer require pusher/pusher-php-server`, Then enable the module.
</strike>

CONFIGURATION
------------
After enabling the module, head to `<front>/admin/dru-chat/pusher-configs` and enter your Pusher
app (Channel) details as provided here `https://dashboard.pusher.com/apps/` ie app_id, key, secret,
cluster.
After this, place the dru chat block at the footer of your site.

![User list View](/chat_user.PNG)
![minimized](/un_read_msgs.PNG)
