/**
 * @author a.demeshko
 * created on 12.21.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.controlpanel.workflow', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('controlpanel.workflow', {
          url: '/workflow',
          templateUrl: 'app/pages/controlpanel/workflow/workflow.html',
          title: 'Workflow',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
