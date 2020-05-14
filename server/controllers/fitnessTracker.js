/* FITNESS TRACKER CONTROLLER
 * Server side
 */
const express = require('express');

const exerciseCategories = require('../models/exerciseCategories');
const fitnessTracker = require('../models/FitnessTracker');
const users = require('../models/Users')
const router = express.Router();

router
    .get('/', (req, res) => res.send({
        CurrentDay: fitnessTracker.CurrentDay, Exercises: fitnessTracker.Exercises, Food: fitnessTracker.Food, MyFriends: fitnessTracker.MyFriends,
        addExercise: fitnessTracker.addExercise, addMeal: fitnessTracker.addMeal, addFriend: fitnessTracker.addFriend
     }) )
    .get('/exerciseCategories', (req, res) => res.send(exerciseCategories) )
    .get('/getExercises', (req, res) => res.send(fitnessTracker.getExercises(req.body.date)) )
    .get('/getFood', (req, res) => res.send(fitnessTracker.getFood(req.body.date)) )
    .post('/addCategory', (req, res) => {
        exerciseCategories.add(req.body.category);
        res.send(exerciseCategories.list[exerciseCategories.lenth-1]);
    })
    .post('/addExercise', (req, res) => {
        fitnessTracker.addExercise(req.body.date, req.body.category, req.body.exercise);
        res.send(fitnessTracker.Exercises);
    })
    .post('/addFood', (req, res) => {
        fitnessTracker.addFood(req.body.date, req.body.meal);
        res.send(fitnessTracker.Food);
    })
    .post('/addFriend', (req, res) => {
        fitnessTracker.addFriend(req.body.email);
        res.send(fitnessTracker.MyFriends);
    })
    .get('/users', (req, res) => {
        res.send(users.list.filter(x => x.email.includes(req.query.email)))
    });

module.exports = router; 