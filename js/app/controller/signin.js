app.controller('SigninFormController', function($scope, $http, $filter, $state) {
    $scope.user = {};
    console.log($scope.user);
    $state.go('app.blank');
});