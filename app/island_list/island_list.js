'use strict';

angular.module('myApp.island_list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/island_list', {
    templateUrl: 'island_list/island_list.html',
    controller: 'island_listCtrl'
  });
}])

.controller('island_listCtrl', ['$scope', 'IslandListSrv', function($scope, IslandListSrv) {
      console.log('heree');
      $scope.island_list = IslandListSrv.get({});
    }]);