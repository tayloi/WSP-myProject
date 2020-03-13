const express = require('express');

const exerciseCategories = require('../models/exerciseCategories');

const router = express.Router();

router
    .use('/exerciseCategories', (req, res, next) => {
        console.log({ method: req.method, body: req.body });
        next();
    })
    .get('/exerciseCategories', (req, res) => res.send(exerciseCategories) )
    .post('exerciseCategories', (req, res) => {
        exerciseCategories.add(req.body.text);
        res.send(exerciseCategories.list[exerciseCategories.lenth-1]);
    })

module.exports = router; 