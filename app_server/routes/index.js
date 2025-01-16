var express = require('express');
var router = express.Router();

// pass request to root as default starting page
const ctrlMain = require('../controllers/main');

// get homepage
router.get('/', ctrlMain.index);

module.exports = router;
