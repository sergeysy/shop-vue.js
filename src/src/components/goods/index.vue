<template>
  <div>
    <!--<h1>Наш клёвый магазин</h1>-->
    <table id="table-goods">
    <tbody>
      <tr v-for="(item, index) in goods" v-bind:key="index" >
        <td class="description">
          <img class="image-item" :src="item.Picture"/>
          <p class="description-text">{{item.Name}}</p>
        </td>
        <td class="add-basket">
          <button @click="add(item)">Добавить в корзину</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Goods', //this is the name of the component
  computed:  {
    ...mapGetters([
      'goods'
    ]),
  },
  
  methods: {
    add(item) {
      this.$store.dispatch('INCREASE_ITEM', Object.assign({}, item))
      .catch( (err) => {
        alert(err)
      })
    },
    
  },
}

</script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

<style scoped>

.description {
  display: flex;
  flex-direction: row;
  align-self: center;
  padding: 10px;
}

.image-item {
  width: 100px;
  height: 100px;
  margin: 10px;
  max-width: 100px;
  min-width: 100px;
}

.description-text {
  margin: 10px;
  word-wrap: break-word;
  white-space: pre-line;
  min-width: 0;
}

.add-basket {
  width: 10%;
}

#table-goods {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

#table-goods td, #table-goods th {
    border: 1px solid #ddd;
    padding: 8px;
}

#table-goods tr:nth-child(even){background-color: #f2f2f2;}

#table-goods tr:hover {background-color: #ddd;}

#table-goods th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
}
</style>