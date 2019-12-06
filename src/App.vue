<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="3D view with Vue+Babylonjs"/>
    <Box> </Box>
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
