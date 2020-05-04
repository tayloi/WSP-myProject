/* FITNESS TRACKER MODEL
 * Server side
 */
const CurrentUser = require("./Users");
//import Users from "./Users";

let CurrentDay = new Date(Date.now());

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


function addExercise(year, month, day, cardio, strength, flexibility, balance){
    if(Exercises != null){ //if Exercises not empty
        let d = new Date(year, month, day);
        //check if exercises have been entered with current date
        for(e in Exercises){  
            if (e[Date] == d){
                e.Cardio.push(cardio);
                e.Strength.push(strength);
                e.Flexibility.push(flexibility);
                e.Balance.push(balance);
                return;
            }
        }
    }
    else{ //Exercises is empty
        Exercises.push({
            Date: new Date(year, month, day),
            Cardio: [cardio],
            Strength: [strength],
            Flexibility: [flexibility],
            Balance: [balance]
        });
    }
}

function addFood(year, month, day, meal){
    if(Food != null){ //if Food not empty
        let d = new Date(year, month, day);
        //check if meals have been entered with current date
        for(f in Food){
            if (f[Date] == d){
                f.Meals.push(meal);
                return;
            }
        }
    }
    else{ //Food is empty
        Food.push({
            Date: new Date(year, month, day),
            Meals: [meal]
        });
    }
}

function addFriend(name){
    //check that user exists
    for(u in Users){
        if(u.Name == name){
            let friend = u;
        }
        else{
            throw Error("This user does not exist.");
        }
    }
    //check friend not already added
    if(MyFriends != null){
        for(f in MyFriends){
            if(f == friend){
                throw Error("You are already friends with this user.");
            }
        }
        //else friend not added yet
        MyFriends.push(friend);
    }
}

module.exports = {
    CurrentDay, Exercises, Food, MyFriends, 
    addExercise, addFood, addFriend
};