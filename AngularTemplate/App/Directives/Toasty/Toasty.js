app.directive('toastyContainer', function ($timeout, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'App/Directives/Toasty/toasty.html',
        scope: {

        },
        link: function (scope, element, attrs, req) {
            if (!$rootScope.toastyMessages) {
                $rootScope.toastyMessages = [];
            }
            scope.messages = $rootScope.toastyMessages;
            scope.hideMessage = function (msg, event) {
                $timeout(function () {
                    $rootScope.toastyMessages.splice($rootScope.toastyMessages.indexOf(msg), 1);
                }, 0);
            };
        }
    };
});