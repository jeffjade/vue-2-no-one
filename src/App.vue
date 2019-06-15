<template>
  <div id="app">
    <Mainpage/>
  </div>
</template>

<script>
import Mainpage from './components/Mainpage.vue'

export default {
  name: 'app',
  components: {
    Mainpage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
