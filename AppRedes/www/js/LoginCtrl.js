angular.module('AppRedes')


.controller('LoginCtrl', function ($scope, $state){ 
  console.log('teste');
  $scope.Login = function () {
    console.log('login');
    $state.go('app.material');
    }; 

});