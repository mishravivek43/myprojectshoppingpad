/**
 * Created by bridgelabz4 on 31/5/16.
 */
(function() {
    angular.module('myModule').service('restService', restService);
    function restService($http){
        console.log('inside restService');
        var port=3000;
        var baseUrl=" http://localhost:"+ port;
        this.getRequest=function(path,query){
            console.log('inside getRequest');
            var result=$http.get(baseUrl+"/"+path);
            return result;
        }
        this.postRequest=function(path,data,headers){
            var result=$http.post(baseUrl + "/" +path,data);
            return result;
        }
    }
})();
