// Your JavaScript Code here
/* global angular */
var app = angular.module('myThumbnails', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("/api/thumbnails").then(function (response) {
        console.log(response.data.thumbnails);
        $scope.myThumbnail =response.data.thumbnails;
    });
});