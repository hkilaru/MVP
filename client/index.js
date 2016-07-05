angular.module('searchBar', [])

.controller('searchController', function($scope) {

	$scope.clickFunc = function() {
		console.log('clicked!')
	}

});