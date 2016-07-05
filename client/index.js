

angular.module('searchBar', [])

.controller('searchController', function($scope, $http) {
	var endP = 'https://api.nutritionix.com/v1_1/search -H'

	$scope.input = '';

	$scope.clickFunc = function() {
		console.log('clicked!')
		console.log($scope.input)
		var endP = 'https://api.nutritionix.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=80bbaf64&appKey=9407cbb21fbb771a52f34ce630ef451b'

		$http({
      method: 'GET',
      url: endP,
     }).success(function(data){
      console.log(data)  
    }).error(function(){
      console.log("error");
  });
		//  "appId":"YOUR_API_ID",
		//  "appKey":"YOUR_API_KEY",
		//  "query":"Cookies `n Cream"
}

});