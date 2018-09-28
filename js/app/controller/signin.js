'use strict'
app.controller('SignInFormController', function($scope, $http, $filter, $state) {
    
    $scope.login = function(){

        $state.go("app.blank");

        // $http.post($scope.serverUrl + 'user/login', $scope.user).then(function(response){
        //     // console.log(response.data);
        //     if(response.data.code == 200){
        //         $state.go("app.blank");
        //     }else{
        //         alert(response.data.msg);
        //     }
        // }, 
        // function(err){
        //     alert("登录失败");
        // });
    }
});