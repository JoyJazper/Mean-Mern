var express = require('express');
var router = express.Router();

var index = require('../controller/index')
/* GET home page. */
router.get('/', index.index);

module.exports = router;
