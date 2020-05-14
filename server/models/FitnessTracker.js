/* FITNESS TRACKER MODEL
 * Server side
 */
const users = require("./Users");
const exerciseCategories = require("../models/exerciseCategories");

let CurrentDate = new Date(Date.now());
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let CurrentDateString = CurrentDate.toLocaleDateString("en-US", options);

const Exercises = [
    /* Format
    {
        //Day: unsigned int,
        Date: Date,
        Cardio: [string],
        Strength: [string],
        Flexibility: [string],
        Balance: [string]
    }
    */
];

const Food = [
    /* Format
    {
        //Day: unsigned int,
        Date: Date,
        Meals: [string]
    }
    */
];

const MyFriends = [
    /* Format
    {User}
    */
];


function addExercise(date, exerciseCategory, exercise){
    let i, e;
    //check if exercises have been entered with the date
    for(i in Exercises){
        e = Exercises[i];
        if (e.Date == date){
            e[exerciseCategory].push(exercise);
            return;
        }
    }
    //Exercises is empty or doesn't contain object with the date; add new object
    e = { Date: date };
    let category;
    for (i in exerciseCategories.list){
        category = exerciseCategories.list[i];
        if(exerciseCategory == category){
            e[category] = [exercise];
        }
        else{ e[category] = []; }
    }
    Exercises.push(e);
}

function addFood(date, meal){
    //check if meals have been entered with current date
    let i, food;
    for(i in Food){
        food = Food[i];
        if (food.Date == date){
            food.Meals.push(meal);
            return;
        }
    }
    //Food is empty or doesn't contain object with the date; add new object
    Food.push({
        Date: date,
        Meals: [meal]
    });  
}

function searchUsers(email){
    return myFetch(`/Users?email=${email}`);
}

function addFriend(email){
    let i, u, f, friend;
        
    //check that user exists
    for(i in users.Users){
        u = users.Users[i];
        if(u.Email == email){
            friend = u;
            break;
        }
        else{
            throw Error("This user does not exist.");
        }
    }
    
    //check friend not already added
    for(i in MyFriends){
        f = MyFriends[i];
        if(f == friend){ //my friend = new friend to be added
            throw Error("You are already friends with this user.");
        }
    }
    //else friend not added yet
    MyFriends.push(friend);
}

//get exercises from a date
function getExercises(date){
    let i, e;
    for(i in Exercises){  
        e = Exercises[i];
        if (e.Date == date){
            return e;
        }
    }
}

//get food from a date
function getFood(date){
    let i, food;
    for(i in Food){
        food = Food[i];
        if (food.Date == date){
            return food;
        }
    }
}

module.exports = {
    CurrentDate, CurrentDateString,
    Exercises, Food, MyFriends, 
    addExercise, addFood, addFriend,
    getExercises, getFood, searchUsers
};