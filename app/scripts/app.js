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
      .otherwise({
        redirectTo: '/'
      });
  });
