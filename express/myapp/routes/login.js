// const express = require('express')
// const UserController = require('../controller/UserController')
// const router = express.Router()
// router.post('/', UserController.login)
// module.exports=router

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.cookie('name','pzx')
  res.render('login', { title: 'Express' });
});

module.exports = router;
