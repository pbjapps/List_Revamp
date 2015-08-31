'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:DirectionsCtrl
 * @description
 * # DirectionsCtrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('DirectionsCtrl', function (/* $scope */) {
    angular.element('.header-list-item').removeClass('active');
    angular.element('.hli-directions').addClass('active');
  });
