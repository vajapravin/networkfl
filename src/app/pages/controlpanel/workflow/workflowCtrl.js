/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.controlpanel.workflow')
    .controller('workflowCtrl', workflowCtrl);

  /** @ngInject */
  function workflowCtrl($scope, $uibModal, $window, baProgressModal) {

    $scope.workflows = angular.fromJson($window.localStorage.getItem('workflows')) || [];

    $scope.workflowTypes = ['Script', 'Notifications'];
    $scope.workflowTitle = 'New Workflow';
    $scope.workflow = { id: '', name: '', type: '', script: '', notification_emails: '', active: false };


    $scope.open = function(page, size){
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

    $scope.save = function(){
      $scope.workflows.push($scope.workflow);
      console.log($scope.workflows);
      $window.localStorage.setItem('workflows', angular.toJson($scope.workflows));
      $scope.safeApply(function(){
        $scope.worfkflows = angular.fromJson($window.localStorage.getItem('worfkflows'));
      });
      $scope.$dismiss();
      $scope.workflow = { id: '', name: '', type: '', script: '', notification_emails: '', active: false };
    }

    $scope.remove = function(item){
      if(confirm('Do you want to continue?')){
        var index = $scope.workflows.indexOf(item);
        $scope.workflows.splice(index, 1);
        $window.localStorage.setItem('workflows', angular.toJson($scope.workflows));
      }
    }

    $scope.edit = function(page, size, index){
      $scope.workflow_index = index;
      $scope.workflow = $scope.workflows[index];
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

    $scope.update = function(index){
      $scope.workflow_index = index;
      $scope.workflows[index] = $scope.workflow;
      $window.localStorage.setItem('workflows', angular.toJson($scope.workflows));
      $scope.$dismiss();
      $scope.workflow = { id: '', name: '', type: '', script: '', notification_emails: '', active: false };
    }

    $scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

    $scope.openProgressDialog = baProgressModal.open;
  }
})();