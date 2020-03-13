const express = require('express');

const exerciseCategories = require('../models/exerciseCategories');

const router = express.Router();

router
    .get('/exerciseCategories', (req, res) => res.send(exerciseCategories) )
    .post('exerciseCategories', (req, res) => {
        exerciseCategories.add(req.query.text);
        res.send(exerciseCategories.list[exerciseCategories.lenth-1]);
    })

module.exports = router; 