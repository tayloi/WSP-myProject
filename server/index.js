const express = require('express');
const exerciseCategories = require('./controllers/fitnessTracker');
const path = require('path');

const app = express();
const port = 3000;

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static( __dirname + '/../client/dist'))
    .get('/', (req, res) => res.send('Welcome to the fitness tracker!')) // <-- lamda expression used here and below
//when msg sent w/verb 'get' and '/', call this funciton
    .use('/fitnessTracker', fitnessTrackerController)
    
    .use((req, res) => {
        const homePath = path.join( __dirname , '/../client/dist/index.html');
        console.log(homePath);
        res.sendFile(homePath)
    });

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));