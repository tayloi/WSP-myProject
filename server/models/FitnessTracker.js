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


function addExercise(year, month, day, exerciseCategory, exercise){
    let d = new Date(year, month, day); //date for the new entry
    
    //check if exercises have been entered with the date
    for(e in Exercises){  
        if (e[Date] == d){
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

function addFood(year, month, day, meal){
    let d = new Date(year, month, day); //date for the new entry
    
    //check if meals have been entered with current date
    for(food in Food){
        if (food[Date] == d){
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

module.exports = {
    CurrentDate, CurrentDateString,
    Exercises, Food, MyFriends, 
    addExercise, addFood, addFriend
};