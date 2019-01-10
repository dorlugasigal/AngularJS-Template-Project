App.service("httpService", function ($http, $rootScope, $location) {
    function IsDevMode() {
        if ($location.$$absUrl.indexOf("localhost") > -1) {
            $rootScope.IsDevMode = true;
            return true;
        }
        else {
            $rootScope.IsDevMode = false;
            return false;
        }
    };

    this.GetBaseServer = function () {
        if (IsDevMode() === true) {
            return 'http://localhost/AngularTemplate/api/';
        }
        else {
            return 'http://SERVERURL/AngularTemplate/api/';
        }
    };

    this.SomeDbInsertFunction = function (randomData1, randomData2, randomData3, CallBack) {
        $http({
            url: this.GetBaseServer() + 'SomeDbInsertFunction',
            method: 'POST',
            data: {
                Prop1: randomData1, //column names MUST match the
                Prop2: randomData2, //class properties given as parameter in the MainController.cs file
                Prop3: randomData3  //in function 'SomeDbInsertFunction' , Same as class 'clsSomeData'
            }
        }).then(function (ret) {
            CallBack(ret);
        },function (err) {
            CallBack(err);
        });
    };


    this.TestWithParameter = function (inputValue, CallBack) {
        $http({
            url: this.GetBaseServer() + 'TestWithParameter',
            method: 'POST',
            data: JSON.stringify(inputValue)
        }).then(function (ret) {
            CallBack(ret);
        }, function (err) {
            CallBack(err);
        });;
    };

});
