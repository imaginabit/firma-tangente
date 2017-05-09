'use strict';

/**
 * @ngdoc function
 * @name tangenteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tangenteApp
 */
angular.module('tangenteApp')
  .controller('AboutCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.main = 'loaded';
  });
