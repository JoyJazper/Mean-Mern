var express = require('express');
var router = express.Router();

var index = require('../controller/index');
var register = require('../controller/RegistrarHandle');

/* GET home page. */
router.get('/', index.index);
router.get('/register', register.Get_RegistrationPage);
router.post('/register', register.Submit_Data);

module.exports = router;
