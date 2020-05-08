<template>
  <div class="container" style="padding: 0 2% 4% 2%">
    <div class="columns">
      <section class="column is-two-thirds" style="padding-bottom: 2%">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Friend's email address" name="add-friend">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
          
        </p>
      </section>
      <section class="column is-one-third">
        <span class="is-right">
            <button @click="addFriend()" class="button is-primary" type="reset" value="reset">Add friend</button>
          </span>
      </section>
    </div>
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
    }),
    methods: {
      addFriend: function(){
        let email = document.querySelector('[name="add-friend"]').value;
        FitnessTracker.addFriend(email);
      }
    }
  }
</script>
