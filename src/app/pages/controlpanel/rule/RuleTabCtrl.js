/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.controlpanel.rule')
      .controller('RuleTabCtrl', RuleTabCtrl);

  /** @ngInject */
  function RuleTabCtrl($scope, $uibModal, baProgressModal) {
  	
  	$scope.open = function(page, size){
  		alert(100);
  		$uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
  	}

  	$scope.openProgressDialog = baProgressModal.open;
  }
});