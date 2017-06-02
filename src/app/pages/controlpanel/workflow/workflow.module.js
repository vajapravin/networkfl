/**
 * @author v.lugovsky
 * created on 16.12.2015
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
          controller: 'WorkflowTabCtrl',
          controllerAs: "workflowTabCtrl",
          title: 'Workflows'
        });
  }

})();