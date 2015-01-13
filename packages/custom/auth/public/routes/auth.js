'use strict';

angular.module('mean.auth').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('auth example page', {
      url: '/auth/example',
      templateUrl: 'auth/views/index.html'
    });
  }
]);
