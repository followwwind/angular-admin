'use strict';
myapp.controller('EditorsCtrl', function($scope, $log, $window, $state, $http, $stateParams, codeService, $timeout, $sce){


    $scope.config = {};

    var p = "<p>hello world...</p>";

    $scope.content = p;

    $scope.infoContent = $sce.trustAsHtml(p);




});