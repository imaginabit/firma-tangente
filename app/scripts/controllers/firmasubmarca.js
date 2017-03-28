'use strict';

/**
 * @ngdoc function
 * @name tangenteApp.controller:FirmasubmarcaCtrl
 * @description
 * # FirmasubmarcaCtrl
 * Controller of the tangenteApp
 */
angular.module('tangenteApp')
  .controller('FirmasubmarcaCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.arrNombres = [
     'emprender.coop',
     'Aula Tangente'
    ];
    $scope.arrlogos = [
    'emprender-250.png',
    'logo_aulaTangente1-250.png'
    ];
    $scope.arrUrls = [
    'http://emprender.coop/',
    'http://aula.tangente.coop/'
    ];

    $scope.baseurl = 'http://tangente.coop/firma/';
    $scope.msg = '';


    //codigo duplicado que deveria poner de otraforma

    $scope.selectFirma = function() {
        if ($('#htmlcont1').css('display')==='none') {
          $scope.selectText('firma1');
        } else {
            $scope.selectText('html1');
        }
    };

    $scope.selectText = function(element) {
      var doc = document;
      var text = doc.getElementById(element);
      var range;

      if (doc.body.createTextRange) { // ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      $scope.msg = 'Pulsa Ctrl + C para copiar';
    };


    $scope.showHtml = function(element) {
      console.log(element);
      if ($('#showHtml1').html()==='Ver html') {
        $('#showHtml1').html('Ver firma');
      } else {
         $('#showHtml1').html('Ver html');
      }
      $('#firma1').toggle();
      $('#htmlcont1').toggle();
      var firma = $('#firma1').html();
      firma = $('<div />').text(firma).html();
      firma += ' <p>&nbsp;</p> ';

      $('#html1').html(firma);

      $scope.msg = 'Pulsa Ctrl + C para copiar';
    };
  });
