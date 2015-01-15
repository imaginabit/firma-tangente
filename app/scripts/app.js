'use strict';

/**
 * @ngdoc overview
 * @name tangenteApp
 * @description
 * # tangenteApp
 *
 * Main module of the application.
 */
angular
  .module('tangenteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/firmaSubmarca', {
        templateUrl: 'views/firmasubmarca.html',
        controller: 'FirmasubmarcaCtrl'
      })
      .when('/firmaEquipo', {
        templateUrl: 'views/firmaequipo.html',
        controller: 'FirmaequipoCtrl'
      })
      .when('/instruciones', {
        templateUrl: 'views/instruciones.html',
        controller: 'InstrucionesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', '$location', function($rootScope, $location){
   var path = function() { return $location.path();};
   $rootScope.$watch(path, function(newVal, oldVal){
     $rootScope.activetab = newVal;
   });
}])

  ;
