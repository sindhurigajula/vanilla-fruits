var express = require('express');
var router = express.Router();
var controller = require("../src/controller");


router.get('/getfruit',controller.getFruit);

module.exports = router;