/**
 * Created by bridgelabz4 on 31/5/16.
 */
(function () {
    angular.module('myModule').controller('registerController', registerController);

    function registerController($scope, registerService, $stateParams, $state) {
        var categoryId=$stateParams.categoryId;
        $scope.category = null;
        $scope.cur_category=null;
        //getCategory function to get all category from rest call.

        $scope.getCategory = function () {

            registerService.getAllCategory().then(function (response) {
                $scope.category = response;
                console.log($scope.category);
            });
        };
    }
})();
