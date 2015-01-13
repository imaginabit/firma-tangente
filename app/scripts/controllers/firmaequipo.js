'use strict';

/**
 * @ngdoc function
 * @name tangenteApp.controller:FirmaequipoCtrl
 * @description
 * # FirmaequipoCtrl
 * Controller of the tangenteApp
 */
angular.module('tangenteApp')
  .controller('FirmaequipoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.arrNombres = [
     'acais',
     'ALTEKIO' ,
     'andaria',
     'crac',
     'CSE',
     'cyclos',
     'dabne',
     'freepress',
     'garua',
     'germinando',
     'heliconia' ,
     'ic',
     'idealoga',
     'imc',
     'ioe',
     'laclaqueta',
     'pandora'
    ];
    $scope.arrlogos = [
    'acais.png',
    'ALTEKIO.png',
    'andaria_.png',
    'crac.png',
    'CSE.png',
    'cyclos.png',
    'dabne.png',
    'freepress.png',
    'garua.png',
    'germinando.png',
    'heliconia.png',
    'ic.png',
    'idealoga.png',
    'imc.png',
    'ioe.png',
    'laclaqueta.png',
    'pandora.png'
    ];
    $scope.arrUrls = [
    'http://acais.net/',
    'http://www.altekio.es/',
    'http://www.andaira.net/',
    'http://redasociativa.org/crac/',
    'http://www.cse.coop/',
    'http://www.cycloscoop.net/',
    'http://www.dabne.net/',
    'http://www.freepress.coop',
    'http://www.garuacoop.es/',
    'http://germinando.es/',
    'http://www.heliconia.es/',
    'http://www.ic-iniciativas.com/',
    'http://www.idealoga.org/',
    'http://imcasociacion.org/',
    'http://www.colectivoioe.org/',
    'http://www.laclaqueta.net/',
    'http://www.pandoramirabilia.net/'
    ];
    $scope.baseurl = "/";
    $scope.msg = "";


    $scope.selectText = function(element) {
      var doc = document;
      var text = doc.getElementById(element);

      if (doc.body.createTextRange) { // ms
        var range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();
        var range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      $scope.msg = "Pulsa Ctrl + C para copiar";
    }


  });
