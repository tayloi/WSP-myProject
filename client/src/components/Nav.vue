<template>
  <nav role="navigation" aria-label="main navigation" style="padding-bottom: 2%">
    <div class="navbar has-background-grey-lighter">
      <div class="navbar-brand">
        <a class="navbar-item has-background-primary" href="/">
          <i class="fas fa-running"></i>
          <span class="" style="padding: 0 5px 0 5px">FitnessTracker</span> 
          <i class="far fa-calendar-alt"></i>
        </a>

        <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="{ 'is-active':isOpen }" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/fitnessTracker" class="navbar-item">My Fitness</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light" href="/login">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data: ()=>({
      isOpen: false
    })
  }
</script>

<style>
  .is-current {
    font-weight: bold;
    color: blueviolet
  }
</style> 