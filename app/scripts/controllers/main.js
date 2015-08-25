'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
