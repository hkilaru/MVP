angular.module('nutriSearch', ['main', 'landing', 'ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'landing/landing.html',
			controller: 'landingController'
		})
		.when('/main', {
			templateUrl: 'main/main.html',
			controller: 'mainController'
		})
})
.factory('retrieve', function($http, $location) {
	var transferData;
	var setData = function(data) {
		this.transferData = data;
	}
	var endP = 'https://api.nutritionix.com/v1_1/search -H'
	var input = input;
	var clickFunc = function(param) {
		console.log("param", param);
		var query =  param.split(' ');
		var newQuery = '';
		query.length > 1 ? newQuery = query[0].concat('%20').concat(query[1]) : newQuery = query[0];
		var endP = 'https://api.nutritionix.com/v1_1/search/' + newQuery + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=80bbaf64&appKey=9407cbb21fbb771a52f34ce630ef451b'
		return $http({
	      method: 'GET',
	      url: endP
	     });
  	}
  	return {
  		endP: endP,
  		input: input,
  		clickFunc: clickFunc,
  		transferData:transferData,
  		setData: setData
  	}
}

)
