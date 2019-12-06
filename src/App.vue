<template>
  <div id="app">
    <Box> </Box>
    <HelloWorld msg="3D view with Vue+Babylonjs"/>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Box from './components/Box.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Box
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
