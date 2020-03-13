<template>
  <section class="container">
    <div class="card">
      <div class="card-content">
        <h1 class="title is-1">
          Fitness Tracker
        </h1>
      </div>
    </div>


    <div class="card">
      <div class="card-content">
        <h3 class="title is-3">Day {{CurrentDay}}</h3>
        <h4 class="title is-4">+Activity</h4>
        <h4 class="title is-4">+Meal</h4>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h5 class="title is-5"> Here is your progress up to today: </h5>
        <ul> 
          <h6 class="title is-6">Exercises</h6>
          <li v-for="exercise in Exercises">
            {{exercise}}
          </li>
          <br>
          <h6 class="title is-6">Food</h6>
          <li v-for="meal in Food">
            {{meal}}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import {CurrentDay, Exercises, Food} from "../models/FitnessTracker";

  export default {
    name: 'Home',
    created(){
      Init();
    },
    data: () => ({
      CurrentDay,
      Exercises,
      Food
    }),
    components: {

    }
  }
</script>

<style>
  img.card-image{
    width: 100%
  }
</style>