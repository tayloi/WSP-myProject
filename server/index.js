/* INDEX.JS
 * Server side
 */
const express = require('express');
const path = require('path');

const fitnessTrackerController = require('./controllers/fitnessTracker');
const usersController = require('./controllers/users')

const app = express();
const port = 3000;

//CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

//Authorization header middleware
app.use(function(req, res, next) {
    const arr = (req.headers.authorization || "").split(" "); //make sure not NULL; throw away everything before space
    if(arr.length > 1 && arr[1] != null){ //make sure arrray has at least 2 elements
        req.userId = +arr[1]; //adding our own property userId and set equal to token; + converts string to int
        //^ any request made will have userId available to it
    }
    next();
});

//actuall logic of app
app
    .use(express.json()) //parse JSON
    .use(express.urlencoded({ extended: true })) //parse body url encoded 
    .use(express.static( __dirname + '/../client/dist'))
    //when msg sent w/verb 'get' and '/', call this function
    .get('/', (req, res) => res.send('Welcome to the fitness tracker!')) // <-- lamda expression used here and below
    //mount controllers
    .use('/fitnessTracker', fitnessTrackerController)
    .use('/users', usersController)
    
    //catch all (if nothing else works)
    //default response (index.html) that we can host view on our site with having to have # in url
    .use((req, res) => {
        const homePath = path.join( __dirname , '/../client/dist/index.html');
        console.log(homePath);
        res.sendFile(homePath)
    })
    //error handling
    .use( (err, req, res, next) => {
        console.error(err); //log (print) error in red
        const errorCode = err.code || 500; //way to shortcircuit in JS
        res.status(errorCode).send({ message: err.message });
    } );

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));