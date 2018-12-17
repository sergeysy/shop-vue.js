<template>
  <div id="app">
      <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '@/components/navigation'

export default {
  name: 'app',
  components: {
    Navigation
  },
  beforeCreate: function () {
    this.$store.dispatch('BASKET_REQUEST')
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
