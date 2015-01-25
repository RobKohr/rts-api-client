'use strict';
var api_path = 'mock_api';

var services = angular.module('myApp.services', ['ngResource']);

services.factory('IsLoggedIn', ['$resource',
    function($resource){
        return $resource(api_path+'/is_logged_in.json', {}, {
            query: {method:'GET', params:{}}
        });
    }]);

services.factory('IslandListSrv', ['$resource',
    function($resource){
        return $resource(api_path+'/island_list.json', {}, {
            query: {method:'GET', params:{}},
        });
    }]);

services.factory('IslandSrv', ['$resource',
    function($resource){
        return $resource(api_path+'/island_list.json', {}, {
            query: {method:'GET', params:{}},
        });
    }]);