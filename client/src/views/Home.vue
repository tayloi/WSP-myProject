<template>
  <div class="container" style="padding: 0 2% 4% 2%">
    <!--ADD FRIEND-->
    <div class="columns">
      <section class="column is-two-thirds" style="padding-bottom: 2%">
        <!--Search bar to add a friend-->
        <!--<p class="control has-icons-left">
          <input class="input" type="text" placeholder="Friend's email address" name="add-friend">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>-->
        <b-field label="Find a friend to add" name="add-friend">
            <b-autocomplete
                :data="data"
                placeholder="e.g. janedoe@gmail.com"
                icon="fas fa-search"
                clearable
                field="title"
                :loading="isFetching"
                @typing="getAsyncData"
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
      </section>
      <!--"Add friend" button-->
      <section class="column is-one-third" style="padding-top: 5%">
        <span class="is-right">
          <button @click="addFriend()" class="button is-primary" type="reset" value="reset">Add friend</button>
        </span>
      </section>
    </div>
    <!--ACTIVITY FEED-->
    <div class="columns">
      <div class="column">
        <div class="panel">
          <h3 class="panel-heading">Activity Feed</h3>
            <!--Friends' activity goes here-->
        </div>
      </div>
      <!--MY FRIENDS-->
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
  import debounce from 'lodash/debounce';

  export default{
    data: () => ({
      FitnessTracker,
      data: [],
      name: '',
      selected: null,
      isFetching: false
    }),
    methods: {
      getAsyncData: debounce(function (name) {
        if (!name.length) {
            this.data = []
            return
        }
        this.isFetching = true
        FitnessTracker.searchUsers(name)
        this.isFetching = false
       }, 250),
      addFriend: function(){
        let email = document.querySelector('[name="add-friend"]').value;
        FitnessTracker.addFriend(email);
      }
    }
  }
</script>
