'use strict'
myapp.config(function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.when("", "/app");
	$urlRouterProvider
            .otherwise('/app/index');
    $stateProvider
	    .state("app", {
	        url: "/app",
	        templateUrl: "views/app.html"
	    })
	    .state("app.index", {
	        url: "/index",
	        templateUrl: "views/index/main.html"
	    })
	    .state("app.banner", {
	        url: "/banner",
	        templateUrl: "views/banner/banner.html"
	    })
	    // table
        .state('app.table', {
            url: '/table',
            template: '<div ui-view></div>'
        })
        .state('app.table.static', {
            url: '/static',
            templateUrl: 'views/table/table_static.html',
            resolve: {
                deps: ['$ocLazyLoad',
                  function( $ocLazyLoad ){
                    return $ocLazyLoad.load([
                    	'js/app/controller/table/table_static.js'
                    ]);
                }]
            }
        })
});
