<template>
    <div>
      <nav class="main-menu">
        <router-link class="router-links"
          v-for="routes in links" 
          v-bind:key="routes.id"
          :to="`${routes.page}`">{{routes.text}}</router-link>
      </nav>
      <router-view  class="text-info"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters([
      'basket'
    ]),
    links: function () {
      var idx = 0;
      return [
        {
          id: idx++,
          text: 'На главную страницу',
          page:'/goods',
          component: 'Goods'
        },
        {
          id: idx++,
          text: 'Корзина ' + this.countItem,
          page: '/basket',
          component: 'Basket'
        },
      ]
    },
    countItem: function () {
      return '(' + this.basket.reduce( (accumulator, currentValue) => accumulator + currentValue.Count, 0) + ')'
    }
  },
}
</script>
<style scoped>
a {
  padding-bottom: 15px;
  /*text-decoration: none;*/
}

a:hover {
  color: blue;
  text-decoration: underline;
}

.router-links {
  margin: 10px;
}

.header-message {
  display: flex;
  align-items: center;
  width: 90%;
  align-items: center;
}

.page {
  display: flex;
  flex-direction: column;
}

.header-title {
  display: flex;
  padding: 30px 90px;
  height: 10%;
  border-bottom: 2px solid green
}

.content {
  display: flex;
  flex-direction: column;
}

.main-menu {
  display: flex;
  text-align: right;
  flex-direction: row;
  align-items: flex-start;
}

/*.text-info {
  flex: 0 0 auto;
  overflow: hidden;
  min-height: 400px;
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: scroll;
}*/

.footer {
    height: 10%;
    border-top: 2px solid green
}

.footer p {
  text-align: center;
}

#app {
  width: 100%;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
