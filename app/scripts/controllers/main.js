'use strict';

/**
 * @ngdoc function
 * @name tangenteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tangenteApp
 */
angular.module('tangenteApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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

    $scope.baseurl = "http://imaginabit.com/";
    $scope.msg = "";


        $scope.selectFirma = function() {
        if ($("#htmlcont").css('display')=="none") {
            $scope.selectText('firma');
        } else {
            $scope.selectText('html');
        }
    }

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


    $scope.showHtml = function(element) {
      if ($("#showHtml").html()=='Ver html') {
        $("#showHtml").html('Ver firma')
      } else {
         $("#showHtml").html('Ver html');
      }
      $("#firma").toggle();
      $("#htmlcont").toggle();
      var firma = $("#firma").html();
      firma = $("<div />").text(firma).html();
      firma += ' <p>&nbsp;</p> ';

      $("#html").html(firma);

      $scope.msg = "Pulsa Ctrl + C para copiar";
    }

});
