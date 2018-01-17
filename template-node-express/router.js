var express = require('express');
var router = express.Router();
var home = require('./controllers/home');
var auth = require('./middlewares/auth');


router.get('/express/index', home.index);//进入首页,auth.authWxUser

router.get('/express/upload/index', home.uploadHome);//上传功能
router.post('/express/upload', home.upload);//图片上传


module.exports = router;