<!-- FITNESS TRACKER VIEW
  -- This is where users can see their own day-to-day activity.
  -->
<template>
  <div class="container">
    <h1 class="title is-3 has-text-centered">
      My Fitness
    </h1>

    <!--Add new data-->
    <div class="columns">
      <!--Add new exercise-->
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
            <label class="label">Exercise</label>
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
       <!--Add new meal-->
      <div class="card column">
        <p class="is-size-5"><strong>Add new meal</strong></p>
        <div class="card-content">
          <div class="field">
            <label class="label" for="date">Date:</label>
            <div class="control">
              <input class="input" type="date" id="date">
            </div>
          </div>
          <div class="field">
            <label class="label">Meal</label>
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
    

    <!--Current day activity-->
    <div class="columns">
      <div class="card column">
        <div class="card-content">
          <h3 class="title is-3">Today: {{FitnessTracker.CurrentDateString}}</h3>
          <h4 class="title is-4">+Activity</h4>
          <h4 class="title is-4">+Meal</h4>
        </div>
      </div>
      <!--Past activity-->
      <div class="card column">
        <div class="card-content">
          <h3 class="title is-3">History</h3>
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
    created(){
      Init();
    },
    data: () => ({
      FitnessTracker,
      exerciseCategories
    })
  }
  
  /*
  // Get all "dropdown" elements
  const $hasDropdowns = Array.prototype.slice.call(document.querySelectorAll(".dropdown"), 0);
  let dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.classList.toggle('is-active');
  });*/
</script>

<style>
  img.card-image{
    width: 100%
  }
</style>