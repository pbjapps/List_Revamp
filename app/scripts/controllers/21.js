'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:21Ctrl
 * @description
 * # 21Ctrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('21Ctrl', function (/* $scope */) {
    angular.element('.header-list-item').removeClass('active');
    angular.element('.hli-21').addClass('active');
  });
