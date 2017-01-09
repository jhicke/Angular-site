//list.js

'use strict';

angular.module('myApp.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', [ '$scope', function($scope) {
	var self = this;
	//demo data
	$scope.items = [
		{
			name : 'item1',
			date : '',
			check : false
		},
		{
			name : 'item2',
			date : '',
			check : false	
		}
	];

	$scope.addNew = function(){
		$scope.items.push({
			name : 'newItem',
			date : '',
			check : false
		});
	}

}]);