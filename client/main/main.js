angular.module('main', [])

.controller('mainController', function($scope, $http) {
	var endP = 'https://api.nutritionix.com/v1_1/search -H'
	$scope.input = ''
	$scope.results = {
		"Name": $scope.input,
		"Calories": null,
		"Fat": null,
		"all": 
		[{
			Name: null,
			Calories: null,
			Fat: null
		}]

	}
	$scope.clickFunc = function() {
		console.log('clicked!')
		console.log($scope.input)
		var query =  $scope.input.split(' ');
		var newQuery = '';
		query.length > 1 ? newQuery = query[0].concat('%20').concat(query[1]) : newQuery = query[0];
		var endP = 'https://api.nutritionix.com/v1_1/search/' + newQuery + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=80bbaf64&appKey=9407cbb21fbb771a52f34ce630ef451b'
		$http({
	      method: 'GET',
	      url: endP,
	     }).success(function(data){
	     
	      for(var i = 0; i < 10; i++) {
	      	var newFood = {
	      		"Name": null,
	      		"Calories": null, 
	      		"Fat": null
	      	}
	      	newFood.name = data.hits[i].fields.item_name;
	      	newFood.calories = data.hits[i].fields.nf_calories;
	      	newFood.fat = data.hits[i].fields.nf_total_fat;
	      	$scope.results.all[i] = newFood;
	      }
	    }).error(function(){
	      console.log("error");
  	});
  	}

});
