<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  background-color: white;
  text-align: center;  
}
html {
  background: #666;
  padding: 0;
  margin: 0;
}
body {
  width: 75%;
  margin: 0 auto;
  padding: 0;
  background: #fff;
}
</style>
