/**
 * Created by bridgelabz4 on 31/5/16.
 */
(function () {
    angular.module('myModule').controller('homePageController', homePageController);

    function homePageController($scope, $state ) {



        $scope.signin = function () {
            $state.go('app.login.step1')
        };
        $scope.registerin = function () {
            $state.go('app.home.register1')
        };
    }
})();
