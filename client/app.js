angular.module('nutriSearch', ['main', 'ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'main/main.html',
			controller: 'mainController'
		})
})