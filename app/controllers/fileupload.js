var express = require('express'); //Express Web Server
var bodyParser = require('body-parser'); //connects bodyParsing middleware
var formidable = require('formidable');
var path = require('path'); //used for file path
var fs = require('fs-extra'); //File System-needed for renaming file etc
var multer = require('multer');
var router = express.Router()
var app = express();
var fileupload = require('../model/fileupload');
app.use(express.static(path.join(__dirname, 'views')));

/* ==========================================================
 bodyParser() required to allow Express to see the uploaded files
============================================================ */


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
router.get('/upl', function(req, res) {
    res.render('upload', {
        title: 'upload'
    });
});
router.post('/upload', function(req, res) {
    fileupload.upload(req, res, function(err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        console.log("File is uploaded");
        // res.render('uploadsuccess', {
        //     title: 'uploadSuccess'
        // });
        res.end("File is uploaded");
    });
});



// app.post('/upload', multer({ dest: './img/',  rename: function (fieldname, filename) {
//     return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
//
//   }}).single('fileUploaded'), function(req,res){
//   res.writeHead(200, {'content-type': 'text/plain'});
//           res.write('received upload:\n\n');
//
//  console.log(req.body); //form fields
//  /* example output:
//  { title: 'abc' }
//   */
//  console.log(req.file); //form files
//  /* example output:
//            { fieldname: 'upl',
//              originalname: 'grumpy.png',
//              encoding: '7bit',
//              mimetype: 'image/png',
//              destination: './uploads/',
//              filename: '436ec561793aa4dc475a88e84776b1b9',
//              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
//              size: 277056 }
//   */
//
//  res.status(204).end();
// });
// var server = app.listen(3031, function() {
// console.log('Listening on port %d', server.address().port);
// });
module.exports=router;
