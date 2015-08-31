'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('MainCtrl', function (/* $scope */) {
    angular.element('.header-list-item').removeClass('active');
    angular.element('.hli-home').addClass('active');
  });
