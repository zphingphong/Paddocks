paddocksApp.directive('drawingBoard', function(){
  return {
    restrict: 'E',
    templateUrl: '/components/drawing-board/drawing-board.html',
    controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
      $scope.currentX = 0;
      $scope.currentY = 0;
      $scope.updateCurrentLocation = function($event){
        $scope.currentX = $event.layerX;
        $scope.currentY = $event.layerY;
      }
    }]
  }
});
