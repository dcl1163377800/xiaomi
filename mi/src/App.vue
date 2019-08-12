<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Index from "./view/HomePage/index.vue"



export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style lang="scss">
  html {
    font-size: -webkit-calc(100vw/7.5);
    font-size: calc(100vw / 7.5);

    }
    body{
        font-size: .24rem;
    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
</style>
