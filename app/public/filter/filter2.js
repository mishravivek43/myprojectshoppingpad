/**
 * Created by bridgelabz4 on 31/5/16.
 */
(function() {
    angular.module('myModule').filter('advanceSearch', function () {

        return function (item, searchText) {
            var arrayToReturn = [];

            if (searchText == undefined) {
                arrayToReturn = searchText;

                //return true;
            }
            else {
                searchText = searchText.toString();
                var search1 = searchText.split(':')[0];
                var search2 = searchText.split(':')[1];
                if (search1 == undefined) {
                    search1 = "no";
                }
                if (search2 == undefined) {
                    search2 = "@@";
                }
                search1 = search1.toLowerCase();
                search2 = search2.toLowerCase();


                for (var i = 0; i < item.length; i++) {
                    if (search1 == "name" && item[i].name.toLowerCase().indexOf(search2) != -1
                        || search1 == "dob" && item[i].dateOfBirth.toString().indexOf(search2) != -1
                        || search1 == "city" && item[i].city.toLowerCase().indexOf(search2) != -1
                        || search1 == "salary" && item[i].salary.toString().indexOf(search2) != -1
                        || search1 == "gender" && item[i].gender.toLowerCase().indexOf(search2) != -1) {
                        arrayToReturn.push(item[i]);
                    }
                }
                return arrayToReturn;
            }
        }
        return arrayToReturn;
    });
})();