
'use strict';

angular.module('myApp.aquarium', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aquarium', {
    templateUrl: 'aquarium/aquarium.html',
    controller: 'AquariumCtrl'
  });
}])

.controller('AquariumCtrl', [ '$scope', function($scope) {
	var self = this;



}]);