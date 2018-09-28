'use strict';

angular.module('app.directive', [])
	.directive('hello', function($scope, $log){
		return {
	      	restrict: 'A',
	      	compile: function (el, attrs) {
		        
	      	},
	      	link: function(scope, el, attr) {
	      		
    		}
    	}
	});
