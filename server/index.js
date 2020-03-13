const express = require('express');
const exerciseCategories = require('./controllers/fitnessTracker');

const app = express();
const port = 3000;

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .get('/', (req, res) => res.send('Welcome to the fitness tracker!')) // <-- lamda expression used here and below
//when msg sent w/verb 'get' and '/', call this funciton
    .use('/fitnessTracker', fitnessTrackerController);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));