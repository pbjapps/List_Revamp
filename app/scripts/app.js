'use strict';

/**
 * @ngdoc overview
 * @name listRevampApp
 * @description
 * # listRevampApp
 *
 * Main module of the application.
 */
angular
  .module('listRevampApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .when('/happyhour', {
        templateUrl: 'views/happyhour.html'
      })
      .when('/views', {
        templateUrl: 'views/views.html'
      })
      .when('/directions', {
        templateUrl: 'views/directions.html',
        controller: 'DirectionsCtrl'
      })
      .when('/21', {
        templateUrl: 'views/21.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
