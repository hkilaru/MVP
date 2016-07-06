angular.module('main', [])

.controller('mainController', function($scope, retrieve) {;
	angular.extend($scope, retrieve);
	$scope.show = true;
	$scope.error = false;
	$scope.soylent = false;
	

	// {
	// 	"Name": $scope.input,
	// 	"Calories": null,
	// 	"Fat": null,
	// 	"all": 
	// 	[{
	// 		Name: null,
	// 		Calories: null,
	// 		Fat: null
	// 	}]

	// }
	console.log("transferData in MAIN", retrieve.transferData)
	$scope.results = retrieve.transferData
	console.log("results in scope", $scope.results);

	$scope.getData = function(param) {
		console.log("param in controller", param);
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