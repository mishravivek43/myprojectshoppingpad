var util = require("util"),
    EventEmitter = require("events").EventEmitter,
    comm = require('../helper/common'),
    conn = require('../database/userSchema'),
    fs = require('fs');

var express = require('express'); //Express Web Server
var bodyParser = require('body-parser'); //connects bodyParsing middleware
var formidable = require('formidable');
var path = require('path'); //used for file path
var fs = require('fs-extra'); //File System-needed for renaming file etc
var multer = require('multer');
var app = express();
var content2 = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters": {
        "batter": [{
            "id": "1001",
            "type": "Regular"
        }, {
            "id": "1002",
            "type": "Chocolate"
        }, {
            "id": "1003",
            "type": "Blueberry"
        }, {
            "id": "1004",
            "type": "Devil's Food"
        }]
    },
    "topping": [{
        "id": "5001",
        "type": "None"
    }, {
        "id": "5002",
        "type": "Glazed"
    }, {
        "id": "5005",
        "type": "Sugar"
    }, {
        "id": "5007",
        "type": "Powdered Sugar"
    }, {
        "id": "5006",
        "type": "Chocolate with Sprinkles"
    }, {
        "id": "5003",
        "type": "Chocolate"
    }, {
        "id": "5004",
        "type": "Maple"
    }]
}
app.use(bodyParser({
    defer: true
}));
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './img')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({
    storage: storage
}).array('fileUploaded', 1);
module.exports = {
    'upload': upload,
    'content2': content2
};
