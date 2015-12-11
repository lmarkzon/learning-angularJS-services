app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
// passing in forecast service
  forecast.success(function(data){
    $scope.fiveDay = data;
  });
}]);
