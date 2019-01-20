app.service('toasty', function ($timeout, $rootScope) {
    if (!$rootScope.toastyMessages) {
        $rootScope.toastyMessages = [];
    }
    this.pop = {};
    var pop = function (msg) {
        $rootScope.toastyMessages.push(msg);
        if (msg.clickToClose !== false) {
            $timeout(function () {
                $rootScope.toastyMessages.splice($rootScope.toastyMessages.indexOf(msg), 1);
            }, msg.timout || 3000);
        }
    };
    this.pop.error = function (msg) {
        msg.type = 'error';
        pop(msg);
    };
    this.pop.info = function (msg) {
        msg.type = 'info';
        pop(msg);
    };
    this.pop.warning = function (msg) {
        msg.type = 'warning';
        pop(msg);
    };
    this.pop.success = function (msg) {
        msg.type = 'success';
        pop(msg);
    };

});