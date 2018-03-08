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

//you got served
myApp.service('nameService', function(){
	var self = this;
	this.name = 'John Doe';
	this.namelength = function(){
		return self.name.length;
	}
});

//controllerz

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){
	$scope.name = nameService.name;
	
	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});
	
	$log.log(nameService.name);
	$log.log(nameService.namelength());

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){
	$scope.name = nameService.name;
	
	$scope.num = $routeParams.num || 1;
	
	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});

}]);

myApp.controller('thirdController', ['$scope', '$log', function($scope, $log){

}]);

//custom directive

myApp.directive("searchResult", function(){
	return {
		restrict: 'AE',
		template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Steve Doe</h4><p class="list-grou-item-text">555 Main St., New York, NY 00100</p></a>',
		replace: true
	}
});


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