angular.module('main', [])

.controller('mainController', function($scope, retrieve) {;
	angular.extend($scope, retrieve);
	$scope.show = true;
	$scope.error = false;
	$scope.soylent = false;
	
	$scope.results = retrieve.transferData || [];

	$scope.getData = function(param) {
		if(param === "soylent") {
			$scope.soylent = true;
		}
		else {
			retrieve.clickFunc(param)
				.then(function(foods) {
					if(foods.data.hits.length === 0) {
				     	$scope.show = false;
				     	$scope.error = true;
			     	}
				     else {
				     	$scope.show = true;
				 	
				      for(var i = 0; i < 10; i++) {
				      	var newFood = {
				      		"Name": null,
				      		"Calories": null, 
				      		"Fat": null
				      	}
				      	newFood.name = foods.data.hits[i].fields.item_name;
				      	newFood.calories = foods.data.hits[i].fields.nf_calories;
				      	newFood.fat = foods.data.hits[i].fields.nf_total_fat;
				      	$scope.results[i] = newFood;
				      }
			  		}	
			  	})
			  	.catch(function(error){
			  		console.log("error")
			  	})
		}
	}

})