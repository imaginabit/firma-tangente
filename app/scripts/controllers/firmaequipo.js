'use strict';

/**
 * @ngdoc function
 * @name tangenteApp.controller:FirmaequipoCtrl
 * @description
 * # FirmaequipoCtrl
 * Controller of the tangenteApp
 */
angular.module('tangenteApp')
  .controller('FirmaequipoCtrl', function ($scope, $rootScope,$parse) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.main = 'loaded';
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

    // $scope.baseurl = 'http://tangente.coop/firma/';
    // $scope.msg = '';

    $scope.selectFirma = function() {
        if ($('#htmlcont2').css('display')==='none') {
            $scope.selectText('firma2');
        } else {
            $scope.selectText('html2');
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
      if ($('#showHtml2').html()==='Ver html') {
        $('#showHtml2').html('Ver firma');
      } else {
         $('#showHtml2').html('Ver html');
      }
      $('#firma2').toggle();
      $('#htmlcont2').toggle();
      var firma = $('#firma2').html();
      firma = $('<div />').text(firma).html();
      firma += ' <p>&nbsp;</p> ';

      $('#html2').html(firma);
      $scope.msg = 'Pulsa Ctrl + C para copiar';
    };

    $scope.$watch('equipo', function(newVal, oldVal) {
      console.log('oldVal',oldVal);
      console.log('new ',newVal);

      $('img.base64').each(function() {
        console.log('convertir a base64');
        //var imgurl = $(this).attr('data-img') ;
        var imgurl = this.attributes['data-img'].value;// .attr('data-img') ;
        console.log('img url',imgurl);
        // console.log('img url value',imgurl.value);
        // console.log('img url value parse ', $parse ( imgurl.value )($rootScope));
        imgurl = $parse ( imgurl )($rootScope,$scope);
        console.log('parsed imgurl',imgurl);
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

    });

  });
