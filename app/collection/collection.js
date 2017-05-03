'use strict';

angular.module('Paddocks.collection', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/collection', {
    templateUrl: '/collection/collection.html',
    controller: 'CollectionCtrl'
  });
}])
.controller('CollectionCtrl', [function() {
}]);