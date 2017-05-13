'use strict'

angular.module('myapp',[]).controller('StaticCtrl', function($scope, $log){
	//$log.info("hello");
	$scope.persons = [
		{
			'name' : 'follow',
			'age' : '18',
			'sex' : 'm'
		},
		{
			'name' : 'wind',
			'age' : '21',
			'sex' : 'm'
		},
		{
			'name' : 'sun',
			'age' : '18',
			'sex' : 'w'
		}
	];
	
	$scope.del = function(person, index){
		$log.info(person);
		//$log.info(index);
		var i = $scope.persons.indexOf(person);
		$log.info(i);
		$scope.persons.splice(i, 1);
	};
	
	$scope.status = false;
});
