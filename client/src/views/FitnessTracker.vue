<!-- FITNESS TRACKER VIEW
  -- This is where users can see their own day-to-day activity.
  -->
<template>
  <div class="container">
    <h1 class="title is-3 has-text-centered">
      My Fitness
    </h1>

    <!--ADD NEW DATA-->
    <div :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" class="dropdown" style="padding-bottom: 2%">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div :class="{ 'is-active':isOpen }" class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Dropdown item
          </a>
          <a class="dropdown-item">
            Other dropdown item
          </a>
          <a href="#" class="dropdown-item is-active">
            Active dropdown item
          </a>
          <a href="#" class="dropdown-item">
            Other dropdown item
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            With a divider
          </a>
        </div>
      </div>
    </div>

    <div class="columns">
      <!--ADD NEW EXERCISE-->
      <div class="card column">
        <p class="is-size-5"><strong>Add new exercise</strong></p>
        <div class="card-content">
          <div class="field">
            <label class="label" for="date">Date:</label>
            <div class="control">
              <input class="input" type="date" id="date">
            </div>
          </div>
          <div class="field">
            <label class="label">Category</label>
            <div class="control">
              <div class="select">
                <select>
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
              <input class="input" type="text" placeholder="Name/description">
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
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
              <input class="input" type="date" id="date">
            </div>
          </div>
          <div class="field">
            <label class="label">Food</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name/description">
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
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
            <a>Exercises</a>
            <a>Food</a>
          </p>
          <!--TABLE OF EXERCISES-->
          <table class="table is-fullwidth is-hoverable">
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
          <li class="panel-block">
            
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
  import * as FitnessTracker from "../models/FitnessTracker";
  import * as exerciseCategories from "../../../server/models/exerciseCategories"

  export default {
    name: 'Home',
    data: () => ({
      FitnessTracker,
      exerciseCategories,
      isOpen: false
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
      } //end of longestCategoryArray function

    }
  }
</script>

<style>
  img.card-image{
    width: 100%
  }
</style>