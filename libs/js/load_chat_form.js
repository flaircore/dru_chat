(function ($, window, Drupal, drupalSettings) {

  /**
   * @param {Drupal.Ajax} [ajax]
   * @param {object} response
   * @param {number} [status]
   */

  Drupal.AjaxCommands.prototype.loadChatMessages = function (ajax, response, status) {

    // do with this response what you wish
    //var duration = response.duration ? response.duration : 'slow'

    //$(response.selector).slideDown(duration)

    console.log('******************* response ********************')
    console.log(response)
    console.log('******************* response ********************')

  }

})(jQuery, this, Drupal, drupalSettings)