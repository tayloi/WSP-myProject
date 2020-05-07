<template>
  <div class="container">
    <section style="padding-bottom: 2%">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Add friend">
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </section>
    <div class="columns">
      <div class="column">
        <div class="panel">
          <h3 class="panel-heading">Activity Feed</h3>
            <!--Friends' activity goes here-->
        </div>
      </div>
      <div class="column is-one-third">
        <div class="panel">
          <h3 class="panel-heading">My Friends</h3>
            <li class="panel-block" v-for="friend in FitnessTracker.MyFriends" :key="friend.Name">
              {{friend.Name}}
            </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FitnessTracker from "../models/FitnessTracker";

  export default{
    data: () => ({
      FitnessTracker
    })
  }
</script>
