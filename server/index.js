const express = require('express');
const quoteCards = require('./game/quoteCards');
const app = express();
const port = 3000;

app
    .get('/', (req, res) => res.send('This class is awesome!')) // <-- lamda expression used here and below
//when msg sent w/verb 'get' and '/', call this funciton

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));