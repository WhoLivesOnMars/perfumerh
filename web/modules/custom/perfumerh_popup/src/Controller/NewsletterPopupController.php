<?php

namespace Drupal\perfumerh_popup\Controller;

use Drupal\Core\Controller\ControllerBase;

class NewsletterPopupController extends ControllerBase {

  public function content() {
    return [
      '#theme' => 'perfumerh_newsletter_popup',
      '#attached' => [
        'library' => [
          'perfumerh_popup/newsletter_popup',
        ],
      ],
    ];
  }

}
