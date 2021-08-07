<script>
  import Navbar from '@/components/Navbar/Navbar.vue'
  import Titlebar from '@/components/Titlebar/Titlebar.vue'
  export default {
    components: { Navbar, Titlebar }
  }
</script>
<template>
  <div class="title">
      <Titlebar />
  </div>
  <div class="content">
    <Navbar />
  </div>
  <div class="nav">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4E4C71;
}

.content {

    height: 100%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
}

</style>
