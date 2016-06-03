(function() {
    angular.module("myModule")
        .controller("homeController", function ($scope, stringService, employeeService) {

            $scope.transformString = function (input) {

                $scope.output = stringService.processString(input);

            };


            $scope.employees = employeeService.giveEmployee();
            $scope.sortColumn = "name";
            $scope.reverseSort = false;
            // $scope.searchText ="";

            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                $scope.sortColumn = column;
            };

            $scope.getSortClass = function (column) {
                if ($scope.sortColumn == column) {
                    return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
                }
                return '';
            };
        });
})();


  
