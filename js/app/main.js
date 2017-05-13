'use strict'

var myapp = angular.module('myapp',
	[
		'ui.router',
		'ngAnimate',
		'oc.lazyLoad',
		'app.controller'
	]);


angular.module('app.controller', [])
	.controller('AppCtrl', function($scope, $log){
		$log.info("welcome to my app");
	})
;

