angular.module('searchBar', [])

.controller('searchController', function($scope) {

	$scope.name = 'NutriSearch'
	$scope.clickFunc = function() {
		console.log('clicked!')
	}

});