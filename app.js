(function () {
    'use strict';

var myApp = angular.module('myApp', []);
    myApp.controller('studentController', function($scope){
        $scope.student = {
            firstName: "Christian",
            lastName: "Lee",
            fees: 1500,

            subjects: [
                {name: 'Software Developtment', marks:70},
                {name: 'IT Project', marks:85},
                {name: 'Programming', marks:90}
            ],
            fullName: function(){
                var studentObject;
                studentObject = $scope.student;
                return studentObject.firstName + " " + studentObject.lastName;
            }
        };

    });

})();
