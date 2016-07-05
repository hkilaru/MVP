var nutritionix = require('nutritionix')({
    appId: '80bbaf64',
    appKey: '9407cbb21fbb771a52f34ce630ef451b'
}, false);


angular.module('searchBar', [])

.controller('searchController', function($scope) {

	$scope.clickFunc = function() {
		console.log('clicked!')
		console.log($scope.input)
		
		nutritionix.v1_1.search.standard({
		    phrase: $scope.input,
		    results: '0:1'
		}, function (err, results){
		    console.log(results);
		    if(err) {
		    	console.log(err)
			}
		});
	}
	$scope.input = ''

});