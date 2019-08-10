<template>
  <div id="app">
      <Index></Index>
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
