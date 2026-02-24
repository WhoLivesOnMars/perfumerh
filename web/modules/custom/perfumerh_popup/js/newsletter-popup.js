(function (Drupal, once, $) {
  'use strict';

  Drupal.behaviors.perfumerhAutoNewsletterPopup = {
    attach: function (context) {
      once('perfumerhAutoNewsletterPopup', 'body', context).forEach(function () {
        if (localStorage.getItem('ph_newsletter_shown')) {
          return;
        }

        setTimeout(function () {
          if (!Drupal.ajax || !Drupal.url) {
            return;
          }

          var ajax = Drupal.ajax({
            url: Drupal.url('newsletter-popup'),
            dialogType: 'modal',
            dialog: {
              width: 760,
              dialogClass: 'ph-newsletter-dialog'
            }
          });

          ajax.execute();
          localStorage.setItem('ph_newsletter_shown', '1');
        }, 2000);
      });

      $(context).on('click', '.js-ph-popup-close', function (e) {
        e.preventDefault();
        var $dialogContent = $(this).closest('.ui-dialog-content');

        if ($dialogContent.length && $.isFunction($dialogContent.dialog)) {
          $dialogContent.dialog('close');
        }
      });
    }
  };

})(Drupal, once, jQuery);
