var express = require('express');
const UserController = require('../controller/UserController')
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });
// router.get('/user',)\
router.get('/user', UserController.getUser)
router.post('/user', UserController.addUser)
router.put('/user', UserController.modifyUser)
router.delete('/user', UserController.deleteUser)
router.post('/login', UserController.login)
router.get('/logout',UserController.logout)
module.exports = router;
