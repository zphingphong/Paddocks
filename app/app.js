'use strict';

// Declare app level module which depends on views, and components
var paddocksApp = angular.module('Paddocks', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/home', {
    templateUrl: '/home/home.html',
    controller: 'HomeCtrl'
  });
  $routeProvider.when('/collection', {
    templateUrl: '/collection/collection.html',
    controller: 'CollectionCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
