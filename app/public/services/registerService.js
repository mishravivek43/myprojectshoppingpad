/**
 * Created by bridgelabz4 on 31/5/16.
 */
(function() {
    angular.module('myModule').service('registerService', registerService);

    function registerService($q, $http,restService) {
        var deferred = $q.defer();

        //function to get all category
        this.getAllCategory = function () {
            console.log('in controller');
            //calling json data
            return restService.getRequest('api/category',null).then(function (response) {
                    category = response.data;
                    deferred.resolve(category);
                    return deferred.promise;
                },
                function (error) {
                    deferred.reject(error);
                    return deferred.promise;
                });
        }



    }
})();
