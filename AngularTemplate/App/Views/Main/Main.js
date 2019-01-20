app.controller("Main", function ($scope, httpService) {
    var vm = this;

    vm.Test = function () {
        alert("Main");
    };
    vm.TestWithParameter = function () {
        httpService.TestWithParameter(vm.InputValue, function (ret) {
            if (ret.data) {
                vm.ReturnedValue = ret.data;
            }
            else {
                //Error
            }
        });
    };

});
