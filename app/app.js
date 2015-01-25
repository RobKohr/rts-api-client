'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.services',
  'myApp.home',
  'myApp.island_list',
  'myApp.island',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])

.controller('navListCtrl', ['$scope', '$rootScope', 'IsLoggedIn', function($scope, $rootScope, IsLoggedIn) {
      $scope.nav_pages = [];
      IsLoggedIn.get({}, function(data) {
        $rootScope.logged_in = data.logged_in;
        if(data.logged_in){
          $scope.nav_pages = ['home', 'settings', 'ranking', 'alliance', 'friends', 'events', 'mail', 'logout'];
          $rootScope.logged_in_username = data.logged_in_username;
        }else{
          $scope.nav_pages = ['home', 'register', 'login'];
        }
      });
}])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
