'use strict';

/**
 * @ngdoc function
 * @name listRevampApp.controller:DirectionsCtrl
 * @description
 * # DirectionsCtrl
 * Controller of the listRevampApp
 */
angular.module('listRevampApp')
  .controller('DirectionsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //create map
    // var listLatLng = {lat: 47.6134058, lng: -122.345995};
    // var mapCanvas = document.getElementById('map');
    // var mapOptions = {
    //   center: listLatLng,
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // var map = new google.maps.Map(mapCanvas, mapOptions);
    //
    // //initialize marker and info window
    // var infoWindowString = '<div id="content">'+
    // '<h4>List Restaurant</h4>'+
    // '<div id="bodyContent">'+
    // '<p><a href="https://www.google.com/maps/dir//List+Restaurant,+2226+1st+Ave,+Seattle,+WA+98121/@47.6134058,-122.345995,17z/data=!4m13!1m4!3m3!1s0x5490154dba59c9af:0x92cbe7090ddef8f9!2sList+Restaurant!3b1!4m7!1m0!1m5!1m1!1s0x5490154dba59c9af:0x92cbe7090ddef8f9!2m2!1d-122.345995!2d47.6134058"'+
    // ' target="_blank">Get Directions</a>'+
    // '</p>'+
    // '</div>'+
    // '</div>';
    // var infowindow = new google.maps.InfoWindow({
    // content: infoWindowString
    // });
    // var marker = new google.maps.Marker({
    // position: listLatLng,
    // title: 'List Restaurant'
    // });
    // marker.setMap(map);
    // marker.addListener('click', function() {
    //   infowindow.open(map, marker);
    // });

  });
