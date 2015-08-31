'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:ViewsCtrl
 * @description
 * # ViewsCtrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('ViewsCtrl', function (/* $scope */) {
    angular.element('.header-list-item').removeClass('active');
    angular.element('.hli-views').addClass('active');
  });
