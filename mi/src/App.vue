<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Index from "./view/HomePage/index.vue"



export default {
  name: 'app',
  components: {
    HelloWorld,
    Index
  }
}
</script>

<style>

</style>
