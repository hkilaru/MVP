

angular.module('searchBar', [])

.controller('searchController', function($scope, $http) {
	var endP = 'https://api.nutritionix.com/v1_1/search -H'

	$scope.input = '';
	$scope.results = {
		"Name": $scope.input,
		"Calories": null,
		"Fat": null
	};

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
      console.log(data.hits[0].fields.nf_calories)  
      $scope.results.calories = data.hits[0].fields.nf_calories;
    }).error(function(){
      console.log("error");
  });
		//  "appId":"YOUR_API_ID",
		//  "appKey":"YOUR_API_KEY",
		//  "query":"Cookies `n Cream"
}

});