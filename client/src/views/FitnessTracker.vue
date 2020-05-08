<!-- FITNESS TRACKER VIEW
  -- This is where users can see their own day-to-day activity.
  -->
<template>
  <div class="container" style="padding: 0 2% 4% 2%">
    <p v-if="CurrentUser != null">Logged in as: {{CurrentUser.Name}}</p>
    <h1 class="title is-3 has-text-centered" style="padding-bottom: 1%">
      My Fitness
    </h1>

    <!--ADD NEW DATA
    <div :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" class="dropdown" style="padding-bottom: 2%">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Add new</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div :class="{ 'is-active':isOpen }" class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div class="dropdown-item dropdown is-hoverable">
            <div class="dropdown-trigger">
                <span>Exercise</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>
            </div>
          </div>
          <div class="dropdown-item dropdown is-hoverable">
            <div class="dropdown-trigger">
                <span>Meal/snack</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->
    <div class="columns">
      <!--ADD NEW EXERCISE-->
      <div class="card column">
        <p class="is-size-5"><strong>Add new exercise</strong></p>
        <div class="card-content">
          <div class="field">
            <label class="label" for="date">Date:</label>
            <div class="control">
              <input class="input" type="date" id="date" name="exercise-date">
            </div>
          </div>
          <div class="field">
            <label class="label">Category</label>
            <div class="control">
              <div class="select">
                <select id="category">
                  <option v-for="category in exerciseCategories.list" :key="category">
                    {{category}}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Activity</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name/description" name="activity">
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button @click="exerciseSubmit()" class="button is-primary" type="reset" value="reset">Submit</button>
            </div>
          </div>
        </div>
      </div>
       <!--ADD NEW FOOD-->
      <div class="card column">
        <p class="is-size-5"><strong>Add new meal/snack</strong></p>
        <div class="card-content">
          <div class="field">
            <label class="label" for="date">Date:</label>
            <div class="control">
              <input class="input" type="date" id="food-date" name="food-date">
            </div>
          </div>
          <div class="field">
            <label class="label">Food</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name/description" name="food">
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button @click="foodSubmit()" class="button is-primary" type="reset" value="reset">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    
    <div class="columns">
      
      <!--CURRENT DAY ACTIVITY-->
      <div class="column">
        <div class="panel">
          <h3 class="panel-heading">Today: {{FitnessTracker.CurrentDateString}}</h3>
          <p class="panel-tabs">
            <a @click="todayExercises = true; todayFood = false">Exercises</a>
            <a @click="todayFood = true; todayFood = false">Food</a>
          </p>
          <!--TABLE OF EXERCISES-->
          <table  :class="{ 'is-active':todayExercises, 'is-hidden':!todayExercises }" class="table is-fullwidth is-hoverable">
            <tr>
              <th v-for="category in exerciseCategories.list" :key="category">
                {{category}}
              </th>
            </tr>
            <tr v-for="i in longestCategoryArray(FitnessTracker.CurrentDate).length" :key="i">
              <td v-for="category in exerciseCategories.list" :key="category">
                {{FitnessTracker.Exercises[category][i-1]}}
              </td>
            </tr>
          </table>
          <!--LIST OF FOOD-->
          <li :class="{ 'is-active':todayFood, 'is-hidden':!todayFood }" class="panel-block">
            
          </li>
        </div>
      </div>
      
      <!--PAST ACTIVITY-->
      <div class="column">
        <div class="panel">
          <h3 class="panel-heading">History</h3>
          <p class="panel-tabs">
            <a>Exercises</a>
            <a>Food</a>
          </p>
          <!--TABLE OF EXERCISES-->
          <li class="panel-block" v-for="exercise in FitnessTracker.Exercises" :key="exercise">
            {{exercise}}
          </li>
          <table class="table is-fullwidth is-hoverable">
            <tr>
              <th v-for="category in exerciseCategories.list" :key="category">
                {{category}}
              </th>
            </tr>
            <tr v-for="i in longestCategoryArray(new Date(2020, 2, 6)).length" :key="i">
              <td v-for="category in exerciseCategories.list" :key="category">
                {{FitnessTracker.Exercises[category][i-1]}}
              </td>
            </tr>
          </table>
          <!--LIST OF FOOD-->
          <li class="panel-block" v-for="meal in FitnessTracker.Food" :key="meal">
            {{meal}}
          </li>
          <!--
          <ul> 
            <h6 class="title is-6">Exercises</h6>
            <li v-for="exercise in FitnessTracker.Exercises" :key="exercise.Date">
              {{exercise}}
            </li>
            <br>
            <h6 class="title is-6">Food</h6>
            <li v-for="meal in FitnessTracker.Food" :key="meal.Date">
              {{meal}}
            </li>
          </ul>
          -->
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import FitnessTracker from "../models/FitnessTracker";
  import * as exerciseCategories from "../../../server/models/exerciseCategories"
  import {CurrentUser} from "../models/Users";
  
  export default {
    name: 'Home',
    created(){
      FitnessTracker.Init();
    },
    data: () => ({
      FitnessTracker,
      exerciseCategories,
      CurrentUser,
      isOpen: false,
      todayExercises: true,
      todayFood: false,
    }),
    methods: {
      //function to get the longest exerciseCategory array from an object in Exercises
      longestCategoryArray: function(date){
        let array = [];
        let exercise, e, i;
        
        //get exercise from CurrentDate
        for(e in FitnessTracker.Exercises){  
            if (e[Date] == date){
              exercise = e;
            }
        }
        if(exercise){
          for (i = 1; i<exercise.length; i++){
            if(exercise[i].length > array.length){
              array = property;
            }
          }
        }
        return array;
      }, //end of longestCategoryArray function
      exerciseSubmit: function(){
        let d = document.querySelector('[name="exercise-date"]').value;
        let c = document.querySelector('#category option:checked').value;
        let e = document.querySelector('[name="activity"]').value;
        FitnessTracker.addExercise(d, c, e);
      },
      foodSubmit: function(){
        let d = document.querySelector('[name="food-date"]').value;
        let m = document.querySelector('[name="food"]').value;
        FitnessTracker.addFood(d, m);
      }
    }
  }
</script>

<style>
  img.card-image{
    width: 100%
  }
</style>