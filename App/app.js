var app = angular.module('studentModule', ['ui.router']);
(function () {

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);
    app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider.state('main', {
            url: '/home',
            templateUrl: 'app/views/student/student.html',
            controller: 'studentController'
        });
        $urlRouterProvider.otherwise('/home');
    }]);

})();