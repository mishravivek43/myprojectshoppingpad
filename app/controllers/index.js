var express  = require('express')
   , router  = express.Router()
   , path = require('path')
   , app =express();

router.use('/users',require('./users'));
router.use('/demo',require('./demo'));
router.use('/auth',require('./authenticate'));
router.use('/content',require('./content'));
router.use('/user1',require('./user1'));
router.use('/api',require('./register'));
router.use(require('./fileupload'));
// var fileupload2 = require('../model/fileupload');
//home page
router.get('/',function(req,res){
    res.send('This is main controller');
});

router.post('/employee',function(req,res){
    res.send('This is main controller');
});

router.get('/employee',function(req,res){
    res.send('you will get employees here');
});
module.exports=router;
