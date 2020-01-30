
const express = require('express');
const criminals = require('./criminals.route');

const router = express.Router();

router.use('/criminals', criminals);

module.exports = router;