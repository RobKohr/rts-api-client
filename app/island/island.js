'use strict';

angular.module('myApp.island', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/island/:key', {
    templateUrl: 'island/island.html',
    controller: 'islandCtrl'
  });
}])

.controller('islandCtrl', ['$scope', 'IslandListSrv','$routeParams', function($scope, IslandListSrv, $routeParams) {
      $scope.island_list = IslandListSrv.get({});
      console.log($scope.island_list);
    }]);