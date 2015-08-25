'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
