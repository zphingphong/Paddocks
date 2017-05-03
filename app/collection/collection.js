'use strict';

paddocksApp.controller('CollectionCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
  $scope.collection = JSON.parse(localStorage.getItem('paddockCollection'));
  console.log($scope.collection);
}]);