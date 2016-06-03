/**
 * Created by bridgelabz4 on 31/5/16.
 */
var util         =   require('util')
    ,EventEmitter=   require('events').EventEmitter;


var id=0;
var categoryData=[
    {
        "id": id++,
        "name": "AUTOMATIVE ",
        "details": [
            "Electronics",
            "SUB-CAT-2",
            "SUB-CAT-3",
            "SUB-CAT-4"
        ]
    },
    {
        "id": id++,
        "name": "REAL ESTATE",
        "details": [
            "Electronics",
            "SUB-CAT-2",
            "SUB-CAT-3",
            "SUB-CAT-4"
        ]
    },
    {
        "id": id++,
        "name": "RETAIL",
        "details": [
            "Electronics",
            "SUB-CAT-2",
            "SUB-CAT-3",
            "SUB-CAT-4"
        ]
    }

];

function Register(){
    EventEmitter.call(this);
}
util.inherits(Register,EventEmitter);

Register.prototype.categoryList=function(){
    return categoryData;
};

module.exports=Register;
