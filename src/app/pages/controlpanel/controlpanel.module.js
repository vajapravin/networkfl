/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.controlpanel', [
    'BlurAdmin.pages.controlpanel.rule',
    'BlurAdmin.pages.controlpanel.workflow',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('controlpanel', {
          url: '/controlpanel',
          templateUrl: 'app/pages/controlpanel/controlpanel.html',
          title: 'Control Panel',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
  }

})();
