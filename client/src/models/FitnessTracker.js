/* FITNESS TRACKER MODEL
 * Client side
 */
import {CurrentUser} from "./Users";
import Users from "./Users";

export let CurrentDate = new Date(Date.now());
//export let CurrentDay; <-- to be implemented later
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
export let CurrentDateString = CurrentDate.toLocaleDateString("en-US", options);

export const Exercises = [
    {
        //Day: 1,
        Date: new Date(2020, 2, 6), //March 6, 2020
        Cardio: [],
        Strength: [],
        Flexibility: [],
        Balance: []
    },
    {
        //Day: 2,
        Date: new Date(2020, 2, 7), //March 7, 2020
        Cardio: ["Walk"],
        Strength: [],
        Flexibility: ["Stretch"],
        Balance: []
    }
];

export const Food = [
    {
        //Day: 1,
        Date: new Date(2020, 2, 6), //March 6, 2020
        Meals: [
            "Impossible burger and french fries",
            "Spaghetti with tomato sauce"
        ]
    },
    {
        //Day: 2,
        Date: new Date(2020, 2, 7), //March 7, 2020
        Meals: [
            "Mozzarella, tomato, and pesto sandwich",
            "Vegetarian burrito bowl"
        ]
    }
];

export const MyFriends = [
    { Name: 'Adam', Password: '2222', Email: 'adam@email.com', userId: 2, isAdmin: false },
    { Name: 'Branda', Password: '3333', Email: 'branda@email.com', userId: 3, isAdmin: false }
];

export function addExercise(year, month, day, cardio, strength, flexibility, balance){
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

export function addFood(year, month, day, meal){
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

export function addFriend(name){
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