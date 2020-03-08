<template>
  <div id="app">
    <MyNav></MyNav>
    <router-view/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import MyNav from "@/components/Nav.vue"; 
  export default {
    components: {
      MyNav
    }
  }
</script>

<style lang="scss">

</style>
