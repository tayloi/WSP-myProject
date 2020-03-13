<template>
  <section class="container">
    <div class="hero">
        <h1 class="title is-1">
          Progress Page
        </h1>
    </div>

    <div class="card">
      <div class="card-content">
        <ul>
          <li v-for="e in Exercises" :key="e.Day">
            Day {{e.Day}}
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