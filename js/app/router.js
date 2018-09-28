'use strict';
myapp.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
	function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
	 	myapp.controller = $controllerProvider.register;
	 	myapp.directive = $compileProvider.directive;
	 	myapp.filter = $filterProvider.register;
	 	myapp.factory = $provide.factory;
	 	myapp.service = $provide.service;
	 	myapp.constant = $provide.constant;
}])
.config(function ($stateProvider, $urlRouterProvider) {

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
	        templateUrl: "views/dashboard/dashboard1.html"
	    })
	    // app.dashboard
        .state('app.dashboard', {
            url: '/dashboard',
            template: '<div ui-view></div>'
        })
        .state('app.dashboard.v1', {
            url: '/dashboard1',
            templateUrl: 'views/dashboard/dashboard1.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.dashboard.v2', {
            url: '/dashboard2',
            templateUrl: 'views/dashboard/dashboard2.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        
        // app.layout
        .state('app.layout', {
            url: '/layout',
            template: '<div ui-view></div>'
        })
        .state('app.layout.fixed', {
            url: '/fixed',
            templateUrl: 'views/layout/fixed.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.layout.collapsed', {
            url: '/collapsed',
            templateUrl: 'views/layout/collapsed-sidebar.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('top-nav', {
            url: '/top-nav',
            templateUrl: 'views/layout/top-nav.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('boxed', {
            url: '/boxed',
            templateUrl: 'views/layout/boxed.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        
        // app.widgets
        .state('app.widgets', {
            url: '/widgets',
            templateUrl: "views/widgets.html"
        })
        // app.charts
        .state('app.charts', {
            url: '/charts',
            template: '<div ui-view></div>'
        })
        .state('app.charts.chartjs', {
            url: '/chartjs',
            templateUrl: 'views/charts/chartjs.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.charts.morris', {
            url: '/morris',
            templateUrl: 'views/charts/morris.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.charts.flot', {
            url: '/flot',
            templateUrl: 'views/charts/flot.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.charts.inline', {
            url: '/inline',
            templateUrl: 'views/charts/inline.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	"js/jquery/sparkline/jquery.sparkline.min.js",
                    	"js/jquery/knob/jquery.knob.js",
                    	"js/app/controller/charts/inline.js"
                    ]);
                }]
            }
        })
        
        // app.ui
        .state('app.ui', {
            url: '/ui',
            template: '<div ui-view></div>'
        })
        .state('app.ui.general', {
            url: '/general',
            templateUrl: 'views/ui/general.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.ui.icons', {
            url: '/icons',
            templateUrl: 'views/ui/icons.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.ui.buttons', {
            url: '/buttons',
            templateUrl: 'views/ui/buttons.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.ui.sliders', {
            url: '/sliders',
            templateUrl: 'views/ui/sliders.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.ui.timeline', {
            url: '/timeline',
            templateUrl: 'views/ui/timeline.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.ui.modals', {
            url: '/modals',
            templateUrl: 'views/ui/modals.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        
        // app.uibootstrap
        .state('app.uibootstrap', {
            url: '/uibootstrap',
            template: '<div ui-view></div>'
        })
        .state('app.uibootstrap.tabs', {
            url: '/tabs',
            templateUrl: 'views/uibootstrap/tabs.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	'js/app/controller/uibootstrap/tabs.js'
                    ]);
                }]
            }
        })
        .state('app.uibootstrap.accordion', {
            url: '/accordion',
            templateUrl: 'views/uibootstrap/accordion.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	'js/app/controller/uibootstrap/accordion.js'
                    ]);
                }]
            }
        })
        .state('app.uibootstrap.carousel', {
            url: '/carousel',
            templateUrl: 'views/uibootstrap/carousel.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	'js/app/controller/uibootstrap/carousel.js'
                    ]);
                }]
            }
        })
        
        // app.angularplugin
        .state('app.angularplugin', {
            url: '/angularplugin',
            template: '<div ui-view></div>'
        })
        .state('app.angularplugin.fileupload', {
            url: '/fileupload',
            templateUrl: 'views/angularplugin/fileupload.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	//'js/app/controller/angularplugin/fileupload.js'
                    ]);
                }]
            }
        })
        
        // app.forms
        .state('app.forms', {
            url: '/forms',
            template: '<div ui-view></div>'
        })
        .state('app.forms.general', {
            url: '/general',
            templateUrl: 'views/forms/general.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.forms.advance', {
            url: '/advance',
            templateUrl: 'views/forms/advanced.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.forms.editors', {
            url: '/editors',
            templateUrl: 'views/forms/editors.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                        'js/jquery/umEditor/themes/default/css/umeditor.css',
                        'js/jquery/umEditor/umeditor.js',
                        'js/jquery/umEditor/third-party/template.min.js',
                        'js/jquery/umEditor/umeditor.config.js',
                        'js/jquery/umEditor/lang/zh-cn/zh-cn.js',
                        'js/app/controller/forms/editors.js'
                    ]);
                }]
            }
        })
        
        // app.tables
        .state('app.tables', {
            url: '/tables',
            template: '<div ui-view></div>'
        })
        .state('app.tables.simpletables', {
            url: '/simpletables',
            templateUrl: 'views/tables/simple.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.tables.datatables', {
            url: '/datatables',
            templateUrl: 'views/tables/data.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	'js/jquery/datatables/media/css/dataTables.bootstrap.css',
                    	'js/jquery/datatables/media/js/jquery.dataTables.js',
      					'js/jquery/datatables/media/js/dataTables.bootstrap.js',
                    	'js/app/controller/tables/data.js'
                    ]);
                }]
            }
        })
        
        // app.calendar
        .state('app.calendar', {
            url: '/calendar',
            templateUrl: "views/calendar.html",
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	'js/jquery/fullcalendar/fullcalendar.min.css',
        				'js/jquery/slimScroll/jquery.slimscroll.min.js',
        				'js/jquery/fastclick/fastclick.js',
        				'js/jquery/fullcalendar/fullcalendar.min.js',
                    	'js/app/controller/calendar.js'
                    ]);
                }]
            }
        })
        
        // app.mailbox
        .state('app.mailbox', {
            url: '/mailbox',
            template: '<div ui-view></div>'
        })
        .state('app.mailbox.inbox', {
            url: '/inbox',
            templateUrl: 'views/mailbox/inbox.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.mailbox.compose', {
            url: '/compose',
            templateUrl: 'views/mailbox/compose.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.mailbox.read', {
            url: '/read',
            templateUrl: 'views/mailbox/readmail.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        
        // app.examples
        .state('app.examples', {
            url: '/examples',
            template: '<div ui-view></div>'
        })
        .state('app.examples.invoice', {
            url: '/invoice',
            templateUrl: 'views/examples/invoice.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.examples.profile', {
            url: '/profile',
            templateUrl: 'views/examples/profile.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/examples/login.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/examples/register.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('lockscreen', {
            url: '/lockscreen',
            templateUrl: 'views/examples/lockscreen.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	
                    ]);
                }]
            }
        })
        .state('app.examples.404', {
            url: '/404',
            templateUrl: 'views/examples/404.html'
        })
        .state('app.examples.500', {
            url: '/500',
            templateUrl: 'views/examples/500.html'
        })
        .state('app.examples.blank', {
            url: '/blank',
            templateUrl: 'views/examples/blank.html'
        })
        .state('app.examples.pace', {
            url: '/pace',
            templateUrl: 'views/examples/pace.html'
        })
        //document
        .state('documentation', {
            url: '/documentation',
            templateUrl: 'doc/index.html',
            resolve: {
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load([
                    	'doc/style.css',
                    	'doc/docs.js'
                    ]);
                }]
            }
        })
});
