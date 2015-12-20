angular.module('AppRedes')


.controller('MainCtrl', function ($scope){

        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        $scope.map = map;
   

  	console.log('teste');
  	$scope.Login = function () {
    console.log('login');
    }; 

});