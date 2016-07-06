angular.module('landing', [])

.controller('landingController', function($scope, $location, retrieve){
	$scope.input = '';
	$scope.results = {
		all: []
	}
	$scope.initialSearch = function(param) {
		console.log('initialSearch clicked');
		retrieve.clickFunc(param)
			.then(function(foods){
				console.log('switching views');
				if(foods.data.hits.length === 0) {
			     	// $scope.show = false;
			     	// $scope.error = true;
		     	}
			     else {
			     	// $scope.show = true;
			 	
			      for(var i = 0; i < 10; i++) {
			      	var newFood = {
			      		"Name": null,
			      		"Calories": null, 
			      		"Fat": null
			      	}
			      	newFood.name = foods.data.hits[i].fields.item_name;
			      	newFood.calories = foods.data.hits[i].fields.nf_calories;
			      	newFood.fat = foods.data.hits[i].fields.nf_total_fat;
			      	$scope.results.all[i] = newFood;
			      }
			      retrieve.setData($scope.results.all);	
			      $location.path('/main');	     
		  		}	
		
	})

}})