'use strict'

var myapp = angular.module('myapp',
	[
		'ui.router',
		'ngAnimate',
        'ngCookies',
		'ui.load',
		'ui.jq',
		'ui.bootstrap',
        'ngStorage',
        'meta.umeditor',
		'app.controller',
        'app.filters',
        'app.services',
        'app.directive'
	]);


angular.module('app.controller', [])
	.controller('AppCtrl', function($scope, $log){
		$log.info("welcome to my app");

        $scope.datatables_lang = {
            "sProcessing": "处理中...",
            "sLengthMenu": "每页 _MENU_ 项",
            "sZeroRecords": "没有匹配结果",
            "sInfo": "当前显示第 _START_ 至 _END_ 项，共 _TOTAL_ 项。",
            "sInfoEmpty": "当前显示第 0 至 0 项，共 0 项",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "搜索:",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上页",
                "sNext": "下页",
                "sLast": "末页",
                "sJump": "跳转"
            },
            "oAria": {
                "sSortAscending": ": 以升序排列此列",
                "sSortDescending": ": 以降序排列此列"
            }
        };
	})
;


myapp.constant('JQ_CONFIG', {
        dataTable:      ['js/datatables/jquery.dataTables.min.js',
            'js/datatables/dataTables.bootstrap.js',
            'js/datatables/dataTables.bootstrap.css'],
        filestyle:      ['js/jquery/file/bootstrap-filestyle.min.js'],
        wysiwyg:        ['js/jquery/wysiwyg/bootstrap-wysiwyg.js',
            'js/jquery/wysiwyg/jquery.hotkeys.js'],
        umeditor:       []
    }
);

myapp.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    }])
    /*.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }])*/
;

