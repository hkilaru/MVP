angular.module('nutriSearch', ['searchBar','ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'searchController'
		})
})