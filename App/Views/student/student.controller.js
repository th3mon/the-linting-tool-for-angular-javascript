(function () {
    app.controller("studentController", ["$rootScope", "$scope", "employeeService", function ($rootScope, $scope, employeeService) {


        employeeService.getEmployees().then(function (response) {
            $scope.student = response.data;
            if ($scope.student == undefined) {
                $scope.student = [];
                alert('');
                console.log($scope.student);
                window.open('');
            }

        });


    }]);
})()