<template>
  <div>
    <h1>Корзина</h1>
    <template v-if="isNotEmptyBasket">
      <button @click="clearBasket()">Очистить корзину</button>
      <table id="table-goods">
        <thead>
          <tr>
            <th>Описание</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Итого</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filtered" v-bind:key="index" >
            <td class="description">
              <img class="image-item" :src="item.Picture"/>
              <div class="description-sub">
                <p>{{item.Name}}</p>
                <button class="remove-icon" @click="deleteItem(item)"><img src="@/assets/remove_icon.png"/></button>
              </div>
            </td>
            <td>
              <input type="number" min="0" :value="item.Count" @input="changeCountItem($event, item)">
            <td>
              Цена: {{item.Price}}
            </td>
            <td>
              {{totalPriceItem(item)}}</td>
          </tr>
        </tbody>
      </table>
      <p class="total-price">Общая сумма: {{totalPrice()}}</p>
    </template>
    <template v-else>
      <p>Корзина пустая</p>
    </template>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Basket',
  computed:  {
    ...mapGetters([
      'basket'
    ]),
    filtered: function() {
      let arr = this.basket.filter(item => item).sort( function (left, right) {
        return right.Time - left.Time
      })
      return arr
    },
    isNotEmptyBasket: function() {
      return this.totalPrice() != 0
    }
  },
  created() {
    this.$store.dispatch('BASKET_REQUEST')
    .catch( (err) => {
      alert(err)
    })
  },
  methods: {
    totalPriceItem: function(item) {
      return item.Price * item.Count
    },
    totalPrice: function() {
      return this.basket.reduce( (accumulator, currentValue) => accumulator + currentValue.Price * currentValue.Count, 0)
    },
    increaseItem: function(item) {
      this.$store.dispatch('INCREASE_ITEM', item)
      .catch(() => {
        alert('Fail update basket')
      })
    },
    decreaseItem: function(item) {
      this.$store.dispatch('DECREASE_ITEM', item)
      .catch(() => {
        alert('Fail update basket')
      })
    },
    changeCountItem: function(evt, item) {
      if ( evt.currentTarget.value == 0 ) {
        this.$store.dispatch('DELETE_ITEM', item)
        .catch(() => {
          alert('Fail update basket')
        })
      } else {
        this.$store.dispatch('CHANGE_COUNT_ITEM', {Item: item, Count: +evt.currentTarget.value})
      }
      //this.$store.dispatch('CHANGE_COUNT_ITEM', evt)
    },
    deleteItem: function(item) {
      this.$store.dispatch('DELETE_ITEM', item)
      .catch(() => {
        alert('Fail update basket')
      })
    },
    clearBasket: function() {
      this.$store.dispatch('CLEAR_BASKET')
      .catch(() => {
        alert('Basket clear fail')
      })
    }
  },
  
}

</script>

<style scoped>
.description {
  display: flex;
  flex-direction: row;
  align-self: center;
  padding: 10px;
}

.description-sub {
  margin: 10px;
  word-wrap: break-word;
  white-space: pre-line;
  min-width: 0;
}

.image-item {
  width: 100px;
  height: 100px;
}

#remove-icon {
  border: none;
}
#remove-icon img {
    display: block;
    height: 100px;  
    width: 100px;
}
#table-goods {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
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

.total-price {
  text-align: right;
}
</style>