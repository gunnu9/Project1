angular.module("deepika").controller("logoutCtrl",function($state,$cookieStore){
    $cookieStore.remove("login");
    $state.go("login");
});