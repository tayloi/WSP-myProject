/* FITNESS TRACKER MODEL
 * Server side
 */
const users = require("./Users");

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
    //check if exercises have been entered with the date
    for(e in Exercises){  
        if (e[Date] == date){
            e[exerciseCategory].push(exercise);
            return;
        }
    }
    //Exercises is empty or doesn't contain object with the date; add new object
    let e = {};
    e[Date] = d;
    e[exerciseCategory] = [exercise];
    Exercises.push(e);
}

function addFood(date, meal){
    //check if meals have been entered with current date
    for(food in Food){
        if (food[Date] == date){
            food[Meals].push(meal);
            return;
        }
    }
    //Food is empty or doesn't contain object with the date; add new object
    Food.push({
        Date: new Date(year, month, day),
        Meals: [meal]
    });
    
}

function addFriend(email){
    let friend;
    
    //check that user exists
    for(u in users){
        if(u.Email == email){
            friend = u;
            break;
        }
        else{
            throw Error("This user does not exist.");
        }
    }
    
    //check friend not already added
    for(f in MyFriends){
        if(f == friend){ //my friend = new friend to be added
            throw Error("You are already friends with this user.");
        }
    }
    //else friend not added yet
    MyFriends.push(friend);
}

//get exercises from a date
function getExercises(date){
    let e = {};
    for(e in Exercises){  
        if (e[Date] == date){
            return e;
        }
    }
}

//get food from a date
function getFood(date){
    let food = {};
    for(food in Food){  
        if (food[Date] == date){
            return food;
        }
    }
}

module.exports = {
    CurrentDate, CurrentDateString,
    Exercises, Food, MyFriends, 
    addExercise, addFood, addFriend,
    getExercises, getFood
};