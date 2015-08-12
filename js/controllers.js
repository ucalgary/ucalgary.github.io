var ucalgaryGitHubIoControllers = angular.module('ucalgaryGitHubIoControllers', []);

ucalgaryGitHubIoControllers.controller('ReposController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('https://api.github.com/orgs/ucalgary/repos').success(function(data) {
      $scope.repos = data;
    });
}]);