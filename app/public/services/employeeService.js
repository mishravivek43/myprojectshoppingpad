(function() {
  angular.module('myModule').factory('employeeService', employeeService);
    function employeeService (){
  return {
    giveEmployee: function () {
      var employees = [
      {name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender:"Male", salary: 55000.788, city: "London"  },
      {name: "Anurag", dateOfBirth: new Date("December 10, 1991"), gender:"Male", salary: 45000.475, city: "Paris" },
      {name: "Sharvari", dateOfBirth: new Date("January 15, 1990"), gender:"Female", salary: 39000.123, city: "New York" },
      {name: "Eshwar", dateOfBirth: new Date("February 29, 1992"), gender:"Male", salary: 60000.875, city: "L.A.USA" },
      {name: "Azhar", dateOfBirth: new Date("April 10, 1991"), gender:"Male", salary: 70000.256, city: "London" },
      {name: "Chandan", dateOfBirth: new Date("October 12, 1992"), gender:"Male", salary: 29000.786, city: "Mumbai" },
      {name: "Balram", dateOfBirth: new Date("August 13, 1991"), gender:"Male", salary: 74000.987, city: "Mumbai" },
      {name: "Sourab", dateOfBirth: new Date("July 23, 1992"), gender:"Male", salary: 25000.333, city: "Paris" },
      {name: "Mohhamad", dateOfBirth: new Date("December 07, 1991"), gender:"Male", salary: 120000.356, city: "New York" },
      {name: "Yippi", dateOfBirth: new Date("January 15, 1993"), gender:"Male", salary: 87000.467, city: "Mumbai" },
      {name: "Paresh", dateOfBirth: new Date("June 30, 1991"), gender:"Male", salary: 52000.564, city: "New York" },
      {name: "Pranali", dateOfBirth: new Date("March 17, 1991"), gender:"Female", salary: 74000.00, city: "Bengluru" },

      ];

      return employees;
    }
  };
}
})();
