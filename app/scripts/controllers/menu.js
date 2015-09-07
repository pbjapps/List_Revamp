'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('MenuCtrl', function (/* $scope */) {
    angular.element('.header-list-item').removeClass('active');
    angular.element('.hli-menu').addClass('active');
  });
