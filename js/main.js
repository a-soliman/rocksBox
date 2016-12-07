var app = angular.module('footerLinks', [])

app.controller('servicesCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('service.json').then(function(response) {
		$scope.services = response.data
	})
}])

}])