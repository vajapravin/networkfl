/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.controlpanel.rule', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('controlpanel.rule', {
          url: '/rule',
          templateUrl: 'app/pages/controlpanel/rule/rule.html',
          controller: 'RuleTabCtrl',
          title: 'Rules'
        });
  }

})();
