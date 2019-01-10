App.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.
            when('/Main', {
                templateUrl: 'App/Views/Main/Main.html',
                controller: "Main as vm"
            }).
            when('/OtherView', {
                templateUrl: 'App/Views/OtherView/OtherView.html',
                controller: "OtherView as vm"
            }).

            otherwise('/Main');
    }
]);
