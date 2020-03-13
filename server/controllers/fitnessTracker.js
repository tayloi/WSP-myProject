const express = require('express');

const exerciseCategories = require('../models/exerciseCategories');

const router = express.Router();

router
    .get('/exerciseCategories', (req, res) => res.send(exerciseCategories) );

module.exports = router; 