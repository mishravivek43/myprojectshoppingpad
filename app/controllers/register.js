/**
 * Created by bridgelabz4 on 31/5/16.
 */
var express = require('express')
    , router = express.Router()
    , categoryList = require('../model/register')
    ,Event = require('events').EventEmitter
    , category = new categoryList()

    , fs = require('fs');

/**
 *
 * returns all category
 *
 */
router.get('/category', function (req, res) {
    res.send(category.categoryList());
});

module.exports=router;
