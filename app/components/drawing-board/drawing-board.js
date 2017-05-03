paddocksApp.directive('drawingBoard', function(){
  return {
    restrict: 'E',
    templateUrl: '/components/drawing-board/drawing-board.html',
    controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
      $scope.currentX = 0;
      $scope.currentY = 0;
      $scope.points = [];
      $scope.board = document.getElementById('board');
      $scope.ctx = $scope.board.getContext('2d');

      $scope.updateCurrentLocation = function($event){
        $scope.currentX = $event.layerX;
        $scope.currentY = $event.layerY;
      };

      $scope.addPoint = function($event){
        var thisX = $event.layerX;
        var thisY = $event.layerY;
        $scope.points.push({
          x: thisX,
          y: thisY
        });
        $scope.ctx.beginPath();
        $scope.ctx.arc(thisX, thisY, 5, 0, Math.PI * 2);
        $scope.ctx.fill();
        console.log($scope.points);
      };
    }]
  }
});
