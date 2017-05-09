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
  .config(function($routeProvider) {
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
  }).run(['$rootScope', '$location', function($rootScope, $location) {
    var path = function() {
      return $location.path();
    };
    $rootScope.$watch(path, function(newVal, oldVal) {
      $rootScope.activetab = newVal;
    });
  }]).run(function($rootScope,$parse) {
    //$rootScope.baseurl = 'http://dev.agresta.org/firma/';
    $rootScope.baseurl = 'http://localhost:9000/';
    $rootScope.pie = 'views/pie.html';
    $rootScope.testLoco = 'loquisimo';

    $rootScope.showHtml = function(element) {
      console.log(element);
      if ($('#showHtml').html() === 'Ver html') {
        $('#showHtml').html('Ver firma');

        $('#firma').hide();
        $('#htmlcont').show();
        $('#htmlcont').show();

      } else {
        $('#showHtml').html('Ver html');

        $('#firma').show();
        $('#htmlcont').hide();
      }

      var firma = $('#firma').html();
      firma = $('<div />').text(firma).html();
      firma += ' <p>&nbsp;</p> ';

      $('#html').html(firma);
      $rootScope.msg = 'Pulsa Ctrl + C para copiar';
    };

    $rootScope.init = function() {
      console.log('init called');
      $('img.base64').each(function() {
        console.log('convertir a base64');
        //var imgurl = $(this).attr('data-img') ;
        var imgurl = this.attributes['data-img'].value;// .attr('data-img') ;
        console.log('img url',imgurl);
        // console.log('img url value',imgurl.value);
        // console.log('img url value parse ', $parse ( imgurl.value )($rootScope));
        imgurl = $parse ( imgurl )($rootScope);
        var este = $(this);

        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
          var reader = new FileReader();
          reader.onloadend = function() {
            console.log('load end');
            este.attr('src', reader.result);
          };
          reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', imgurl );
        xhr.responseType = 'blob';
        xhr.send();
      });
    };
  });
