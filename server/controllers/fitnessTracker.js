/* FITNESS TRACKER CONTROLLER
 * Server side
 */
const express = require('express');
const exerciseCategories = require('../models/exerciseCategories');
const fitnessTracker = require('../models/FitnessTracker');

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
    .get('/', (req, res) => res.send({
        CurrentDay: fitnessTracker.CurrentDay, Exercises: fitnessTracker.Exercises, Food: fitnessTracker.Food, MyFriends: fitnessTracker.MyFriends,
        addExercise: fitnessTracker.addExercise, addMeal: fitnessTracker.addMeal, addFriend: fitnessTracker.addFriend
     }) );

module.exports = router; 