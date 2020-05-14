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
        <b-field label="Find a friend to add">
            <b-autocomplete
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. janedoe@gmail.com"
                icon="fas fa-search"
                clearable
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
        // String update
        if (this.name !== name) {
            this.name = name
            this.data = []
            this.page = 1
            this.totalPages = 1
        }
        // String cleared
        if (!name.length) {
            this.data = []
            this.page = 1
            this.totalPages = 1
            return
        }
        // Reached last page
        if (this.page > this.totalPages) {
            return
        }
        this.isFetching = true
        this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}&page=${this.page}`)
            .then(({ data }) => {
                data.results.forEach((item) => this.data.push(item))
                
                this.page++
                this.totalPages = data.total_pages
            })
            .catch((error) => {
                throw error
            })
            .finally(() => {
                this.isFetching = false
            })
      }, 500),
      getMoreAsyncData: debounce(function () {
          this.getAsyncData(this.name)
      }, 250),
      addFriend: function(){
        let email = document.querySelector('[name="add-friend"]').value;
        FitnessTracker.addFriend(email);
      }
    }
  }
</script>
