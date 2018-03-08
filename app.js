var myApp = angular.module('myApp', ['ngRoute']);

//config
myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/second/', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	.when('/third', {
		templateUrl: 'pages/third.html',
		controller: 'thirdController'
	})
});

//controllerz

myApp.controller('mainController', ['$scope', '$log', function($scope, $log){
	$scope.name = 'Main';
	$log.main = 'Property from main';
	$log.log($scope);
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams){
	
	$scope.num = $routeParams.num || 1;
	$log.second = 'Property from second';
	$log.log($scope);

}]);

myApp.controller('thirdController', ['$scope', '$log', function($scope, $log){

}]);


// via old mainController
//	$scope.handle = '';
//	$scope.lowercasehandle = function(){
//		
//		return $filter('lowercase')($scope.handle);
//
//	};
//	
//	$scope.characters = 5;
//		$scope.rules = [
//			{ rulename: "Must be 5 characters" },
//			{ rulename: "Must not be used elsewhere" },
//			{ rulename: "Must be l33t" }
//			
//		];
//		
//	console.log($scope.rules);
	
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