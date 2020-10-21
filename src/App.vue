<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import  'prismjs'

export default {
  name: 'App',
}
</script>

<style>
@import url('http://cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.min.css');
@import url('https://unpkg.com/katex@0.6.0/dist/katex.min.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 20px;
}
</style>
