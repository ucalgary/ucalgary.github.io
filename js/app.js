var ucalgaryGitHubIoApp = angular.module('ucalgaryGitHubIoApp', [
  'ngRoute',
  'ucalgaryGitHubIoControllers'
]);

ucalgaryGitHubIoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/repos-list.html',
        controller: 'ReposController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);