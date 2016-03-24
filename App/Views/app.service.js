(function () {
    var base = 'http://localhost/service/api/Employee/'

   

    app.service('employeeService', ['$http', '$q', function ($http, $q) {
        this.getEmployees = function () {
            return $http.get(base + 'employees');
        };
    }]);
})();