app.factory('forecast', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);


// Well done! The city_name now shows up in the view. How does it work?

// 1. First in js/services/forecast.js, we made a new service. We used app.factory to create a new service named forecast

// 2. The forecast service needs to use AngularJS's built-in $http to fetch JSON from the server. Therefore, we add $http to the forecast service as a dependency, like this:
//  ['$http', function($http) {
//    // ...
//  }]
// Now $http is available to use inside forecast.

// 3. Then, inside forecast, we use $http to construct an HTTP GET request for the weather data. If the request succeeds, the weather data is returned; otherwise the error info is returned.

// 4. Next in the controller, we used the forecast service to fetch data from the server. First we added forecast into MainController as a dependency so that it's available to use. Then within the controller we used forecast to asynchronously fetch the weather data from the server and store it into $scope.fiveDay

// 5. As before, any properties attached to $scope become available to use in the view. This means in index.html, we can display the city_name using an expression as done before.
