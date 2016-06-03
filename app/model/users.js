// User Model
var mongo        =require('mongoose')
  , mongoose     =require('./db')
  , util         = require("util")
  , EventEmitter = require("events").EventEmitter
  , conn         = require('../database/userSchema');

//constructor
function UserList () {
    EventEmitter.call(this);
}

// Embedded Name schema to be used in User Schema
var Names = mongo.Schema({
    first: {type: String, lowercase: true, trim: true, required: true}
    , middle: {type: String, lowercase: true, trim: true}
    , last: {type: String, lowercase: true, trim: true, required: true}
    , full: {type: String, lowercase: true, trim: true}
});

//constructor
function UserList() {
    EventEmitter.call(this);
}

util.inherits(UserList, EventEmitter);


//Get all users
UserList.prototype.all = function (cb)
{
  return conn.User.find({},function(err,data){
    return cb(data);
  });
};

UserList.prototype.save=function(userData,cb)
{
    var self=this
   ,user=new User(userData);

   conn.user.save(function(error,data){
    if(error)
    {
      return cb(error,null)
    }
    self.emit('user-saved',userData);
    return cb(null,data);
   })
}
module.exports = UserList;
