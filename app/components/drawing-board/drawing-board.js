paddocksApp.directive('drawingBoard', function(){
  return {
    restrict: 'E',
    templateUrl: '/components/drawing-board/drawing-board.html',
    controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
      $scope.currentX = 0;
      $scope.currentY = 0;
      $scope.totalArea = 0;
      $scope.points = [];
      $scope.board = document.getElementById('board');
      $scope.ctx = $scope.board.getContext('2d');
      $scope.ctx.beginPath();

      $scope.updateCurrentLocation = function($event){
        $scope.currentX = $event.layerX;
        $scope.currentY = $event.layerY;
      };

      var calculateArea = function(points){
        // TODO: handle edge cases. This calculation won't be correct if the user draw 1 point over another, or draw backward
        // Ref: http://stackoverflow.com/questions/16285134/calculating-polygon-area
        var total = 0;
        for (var i = 0, l = points.length; i < l; i++) {
          var addX = points[i].x;
          var addY = points[i == points.length - 1 ? 0 : i + 1].y;
          var subX = points[i == points.length - 1 ? 0 : i + 1].x;
          var subY = points[i].y;

          total += (addX * addY * 0.5);
          total -= (subX * subY * 0.5);
        }

        return Math.abs(total);
      };

      $scope.addPoint = function($event){
        var thisX = $event.layerX;
        var thisY = $event.layerY;
        $scope.points.push({
          x: thisX,
          y: thisY
        });
        $scope.ctx.arc(thisX, thisY, 5, 0, Math.PI * 2);
        $scope.ctx.fillStyle = 'green';
        $scope.ctx.fill();
        // Calculate total area if the drawing become a polygon
        if($scope.points.length >= 3) {
          $scope.totalArea = calculateArea($scope.points);
        }
      };

      $scope.clearBoard = function() {
        $scope.points = [];
        $scope.ctx.clearRect(0, 0, $scope.board.width, $scope.board.height);
        $scope.ctx.beginPath();
      };

      $scope.save = function() {
        $rootScope.$emit('savePaddock');
      };
    }]
  }
});
