var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){

	$scope.handle = '';
	$scope.lowercasehandle = function(){
		
		return $filter('lowercase')($scope.handle);

	};
	
	$scope.characters = 5;
		$scope.rules = [
			{ rulename: "Must be 5 characters" },
			{ rulename: "Must not be used elsewhere" },
			{ rulename: "Must be l33t" }
			
		];
		
	console.log($scope.rules);
	
//	$scope.$watch('handle', function(newValue, oldValue){
//		
//		console.info('Changed!');
//		console.log('Old: ' + oldValue);
//		console.log('New: ' + newValue);
//		
//	});
//	
//	setTimeout(function(){
//		$scope.$apply(function(){
//			$scope.handle = 'newtwitterhandle';
//			console.log('Scope changed!');	
//		})
//	}, 3000);
	
}]);
