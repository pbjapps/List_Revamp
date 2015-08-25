'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('MenuCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
