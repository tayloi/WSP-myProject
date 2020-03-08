const express = require('express');
const exerciseCategories = require('./fitnessTracker/exerciseCategories');
const app = express();
const port = 3000;

app
    .get('/', (req, res) => res.send('This class is awesome!')) // <-- lamda expression used here and below
//when msg sent w/verb 'get' and '/', call this funciton
    .get('/fitnessTracker/exerciseCategories', (req, res) => res.send(exerciseCategories));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));