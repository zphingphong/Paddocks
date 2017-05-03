paddocksApp.directive('drawingBoard', function(){
  return {
    restrict: 'E',
    templateUrl: '/components/drawing-board/drawing-board.html',
    controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
      $scope.currentX = 0;
      $scope.currentY = 0;
      $scope.points = [];

      $scope.updateCurrentLocation = function($event){
        $scope.currentX = $event.layerX;
        $scope.currentY = $event.layerY;
      };

      $scope.addPoint = function($event){
        $scope.points.push({
          x: $event.layerX,
          y: $event.layerY
        });
        console.log($scope.points);
      };
    }]
  }
});
