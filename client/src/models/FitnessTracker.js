/* FITNESS TRACKER MODEL
 * Client side
 */
import {CurrentUser} from "./Users";
import Users from "./Users";
import myFetch from "./myFetch";

//private variable of this module; will continue to live even when all its consumers are destroyed
let interval; //var. holding ref. to timer that will constantly ping server to find changes

export default{
    State: {},
    CurrentDate: new Date(Date.now()),
    //CurrentDay; <-- to be implemented later
    options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    CurrentDateString: (new Date(Date.now())).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    Exercises: [],
    Food: [],
    MyFriends: [],
    addExercise(date, exerciseCategory, exercise){
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
    },
    addFood(date, meal){
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
        
    },
    addFriend(email){
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
    },
    //get exercises from a date
    getExercises(date){
        let e = {};
        for(e in Exercises){  
            if (e[Date] == date){
                return e;
            }
        }
    }, 
    //get food from a date
    getFood(date){
        let food = {};
        for(food in Food){  
            if (food[Date] == date){
                return food;
            }
        }
    },
    Init(){
        myFetch('/fitnessTracker') //returns a Promise
            //every time fitness tracker gets initialized, fetch state from server
            .then(x => {
                State = x;	
                console.log(x);
            })
    }
}