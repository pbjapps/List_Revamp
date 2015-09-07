'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:HappyHourCtrl
 * @description
 * # HappyHourCtrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('HappyHourCtrl', function (/* $scope */) {
    angular.element('.header-list-item').removeClass('active');
    angular.element('.hli-happyhour').addClass('active');
  });
