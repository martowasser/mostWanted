const express = require('express');
const router = express.Router({ mergeParams: true });

const criminalsController = require('../controllers/criminals.controller');

router.route('/find/:name')
    .get(criminalsController.getPossibleCriminals);

router.route('*')
    .get(() => {
        return "404 not found"
    })

module.exports = router;