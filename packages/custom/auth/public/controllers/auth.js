'use strict';

/* jshint -W098 */
angular.module('mean.auth').controller('AuthController', ['$scope', 'Global', 'Auth',
  function($scope, Global, Auth) {
    $scope.global = Global;
    $scope.package = {
      name: 'auth'
    };
  }
]);
