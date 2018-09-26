'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/front/index');
          $stateProvider
              //admin
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/admin/app.html'
              })
              // pages
              .state('app.page', {
                  url: '/page',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              .state('app.page.profile', {
                  url: '/profile',
                  templateUrl: 'tpl/admin/page_profile.html'
              })
              .state('app.page.post', {
                  url: '/post',
                  templateUrl: 'tpl/admin/page_post.html'
              })
              .state('app.page.search', {
                  url: '/search',
                  templateUrl: 'tpl/admin/page_search.html'
              })
              .state('app.page.invoice', {
                  url: '/invoice',
                  templateUrl: 'tpl/admin/page_invoice.html'
              })
              .state('app.page.price', {
                  url: '/price',
                  templateUrl: 'tpl/admin/page_price.html'
              })
              // others
              .state('lockme', {
                  url: '/lockme',
                  templateUrl: 'tpl/admin/page_lockme.html'
              })
              .state('admin', {
                  url: '/admin',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('admin.signin', {
                  url: '/signin',
                  templateUrl: 'tpl/admin/page_signin.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/app/controller/signin.js'] );
                      }]
                  }
              })
              .state('admin.signup', {
                  url: '/signup',
                  templateUrl: 'tpl/admin/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/app/controller/signup.js'] );
                      }]
                  }
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'tpl/admin/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'tpl/admin/page_404.html'
              })
              .state('app.blank', {
                url: '/blank',
                templateUrl: 'tpl/blank.html'
              })
              .state('app.table', {
                url: '/table',
                templateUrl: 'tpl/table.html'
              })
      }
    ]
  );
