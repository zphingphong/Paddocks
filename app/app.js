'use strict';

// Declare app level module which depends on views, and components
var paddocksApp = angular.module('Paddocks', [
  'ngRoute',
  'Paddocks.home',
  'Paddocks.collection'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
