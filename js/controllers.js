var ucalgaryGitHubIoApp = angular.module('ucalgaryGitHubIoApp', []);

ucalgaryGitHubIoApp.controller('ReposController', function ($scope, $http) {
  $http.get('https://api.github.com/orgs/ucalgary/repos').success(function(data) {
    $scope.repos = data;
  });
});