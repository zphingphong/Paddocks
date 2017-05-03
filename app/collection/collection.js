'use strict';

paddocksApp.controller('CollectionCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
  var sanitizeCollection = function(collection){
    var collectionData = [];
    for(var i = 0; i < collection.length; i++){
      var points = '';
      for(var j = 0; j < collection[i].length; j++){
        points += collection[i][j].x + ',' + collection[i][j].y + ' ';
      }
      collectionData.push({
        points: points
      });
    }
    return collectionData;
  };
  $scope.collection = (localStorage.getItem('paddockCollection') != null) ? sanitizeCollection(JSON.parse(localStorage.getItem('paddockCollection'))) : [];
}]);