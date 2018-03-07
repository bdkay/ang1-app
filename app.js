var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource){
  	
	$scope.name = 'John';
	$scope.formattedname = $filter('uppercase')($scope.name);
	$log.info($scope.name);
	$log.info($scope.formattedname);
	
});
