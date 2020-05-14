/* FITNESS TRACKER MODEL
 * Client side
 */
import {CurrentUser} from "./Users";
import Users from "./Users";
import myFetch from "./myFetch";
import * as exerciseCategories from "../../../server/models/exerciseCategories";

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
        let i, e;
        //check if exercises have been entered with the date
        for(i in this.Exercises){
            e = this.Exercises[i];
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
        this.Exercises.push(e);
    },
    addFood(date, meal){
        //check if meals have been entered with current date
        let i, food;
        for(i in this.Food){
            food = this.Food[i];
            if (food.Date == date){
                food.Meals.push(meal);
                return;
            }
        }
        //Food is empty or doesn't contain object with the date; add new object
        this.Food.push({
            Date: date,
            Meals: [meal]
        });
        
    },
    searchUsers(email){
        return myFetch(`/Users?email=${email}`);
    },
    addFriend(email){
        let i, u, f, friend;
        
        //check that user exists
        for(i in Users){
            u = Users[i];
            if(u.Email == email){
                friend = u;
                break;
            }
            else{
                throw Error("This user does not exist.");
            }
        }
        
        //check friend not already added
        for(i in this.MyFriends){
            f = this.MyFriends[i];
            if(f == friend){ //my friend = new friend to be added
                throw Error("You are already friends with this user.");
            }
        }
        //else friend not added yet
        this.MyFriends.push(friend);
    },
    //get exercises from a date
    getExercises(date){
        let i, e;
        for(i in this.Exercises){  
            e = this.Exercises[i];
            if (e.Date == date){
                return e;
            }
        }
    }, 
    //get food from a date
    getFood(date){
        let i, food;
        for(i in this.Food){
            food = this.Food[i];
            if (food.Date == date){
                return food;
            }
        }
    },
    Init(){
        myFetch('/fitnessTracker') //returns a Promise
            //every time fitness tracker gets initialized, fetch state from server
            .then(x => {
                this.State = x;	
                console.log(x);
            })
    }
}