/**
 * Created by NathanBriscoe on 6/6/16.
 */
var app = angular.module('myApp', []);

app.controller("signupFormController", function($scope){
    var one = $scope.signup.name;
    var two = $scope.signup.email;
    var three = $scope.signup.username;
 console.log(one, two, three);
});
