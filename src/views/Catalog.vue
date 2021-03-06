<template>
<div>
  <notification v-if="showNotification" :beer="beerToShow" :notificationType="notificationType"></notification>
  <a id="cart-button" @click="showCart = !showCart">CART</a>
  <input id="search-bar" placeholder="search here" spellcheck="false" autocomplete="false" v-model="searchText" @input="search"> 
  <div id="card-container">
    <div v-for="item in searchResults" :key="item.name" class="beer-card" data-aos="fade-up">
        <img :src="`${item.image}`">
        <h5>{{ item.name }}</h5>
        <div id="price-cart-container">
          <h5>{{ item.price }} €</h5>
          <h5 @click="addToCart(item)" id="add-button">+</h5>
        </div>
    </div>
    <div v-if="searchResults.length === 0">
      <h1>NO RESULTS FOUND</h1>
    </div>
  </div>

  <div v-show="showSort" id="sort-container">
    <p>PRICE: </p>
    <p @click="sortByPrice('UP')" class="sort-button">HIGHER FIRST </p>
    <p @click="sortByPrice('DOWN')" class="sort-button">LOWER FIRST</p>
    <hr>
    <p>NAME: </p>
    <p @click="sortByName('UP')" class="sort-button">A TO Z</p>
    <p @click="sortByName('DOWN')" class="sort-button">Z TO A</p>
  </div>

  <div v-show="showFilter" id="filter-container">

  </div>

  <a id="sort-button" @click="showSort = !showSort">SORT</a>
  <a id="filter-button" @click="showFilter = !showFilter">FILTER</a>

  <div id="cart-container" v-show="showCart">
    <h2>YOUR CART:</h2>
    <div v-for="item in cart" :key="item.name" class="cart-item" data-aos="fade-up">
        <img :src="`${item.image}`">
        <h5>{{ item.name }}</h5>
        <h5>{{ item.price }} €</h5>
    </div>
    <div v-if="searchResults.length === 0">
      <h1>NO RES</h1>
    </div>
  </div>
</div>
</template>

<script>
import items from "../assets/items.json";
import notification from '../components/Notification'

export default {
  name: 'catalog',

  components: {
    notification
  },

  data() {
    return {
      items,
      showSort: false,
      showFilter: false,
      showCart: false,
      searchText: '',
      searchResults: items,
      cart: [],
      showNotification: false,
      beerToShow: {},
      notificationType: null
    }
  },
  methods: {
    sortByPrice(mode) {
      if (mode === 'UP') this.searchResults.sort((a, b) => b.price - a.price);
      else if (mode === 'DOWN') this.searchResults.sort((a, b) => a.price - b.price);
    },
    sortByName(mode) {
      if (mode === 'UP') this.searchResults.sort((a, b) => b.name - a.name);
      else if (mode === 'DOWN') this.searchResults.sort((a, b) => a.name - b.name);
    },
    search() {
      this.searchResults = this.items.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase()));
    },
    addToCart(item) {
      this.cart.push(item);
      this.showNotification = true;
      this.beerToShow = item;
      this.notificationType = 'beerAdded';
    }
  }
}
</script>

<style lang="scss" scoped>
  .beer-card {
    border: 1px solid lightgray;
    border-radius: 3px;
    width: 300px;
    height: 350px;
    text-align: left;
    margin: 20px;

    h5 {
      margin: 0 15px;
    }

    img {
      width: 100%;
    }

    &:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
  }

  #card-container {
    width: 80%;
    margin: 0px auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  #sort-button {
    position: fixed;
    left: 30px;
    bottom: 30px;
    border-bottom: 1px solid lightgray;
    font-size: 0.8em;
    padding: 0px 10px;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid black;
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
  }

  #filter-button {
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-bottom: 1px solid lightgray;
    font-size: 0.8em;
    padding: 0px 10px;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid black;
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
  }

  #sort-container {
    width: 100px;
    height: 175px;
    z-index: 30;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    position: fixed;
    left: 30px;
    bottom: 70px;
    padding: 20px;
    font-size: 0.7em;
  }

  #filter-container {
    width: 100px;
    height: 100px;
    z-index: 30;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    position: fixed;
    right: 30px;
    bottom: 70px;
  }

  .sort-button {
    &:hover {
      cursor: pointer;
    }
  }

  #search-bar {
    width: 150px;
    font-size: 0.8em;
    padding: 10px 10px;
    border: 0px;
    border-bottom: 1px solid lightgray;
    outline: none;
    margin: 10px 0px 0px 0px;

    &:focus{
      border-bottom: 1px solid black;
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
  }

  #price-cart-container {
    display: flex;
    justify-content: space-between;
  }

  #add-button {
    color: rgb(179, 178, 178);

    &:hover{
      cursor: pointer;
      color: black;
    }
  }

  #cart-button {
    position: fixed;
    right: calc(100% - 50% - 20px);
    bottom: 20px;
    border-bottom: 1px solid lightgray;
    padding: 5px 10px;
    z-index: 100;
    background-color: white;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid black;
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
  }

  #cart-container {
    background-color: white;
    height: 400px;
    width: 300px;
    position: fixed;
    right: calc(100% - 50% - 161px);
    bottom: 20px;
    z-index: 200;
    overflow: scroll;
    padding: 20px 10px;
    border: 1px solid red;

    .cart-item {
      border: 1px solid lightgray;
      border-radius: 3px;
      width: 85%;
      height: 40%;
      text-align: left;
      margin: 20px;

      h5 {
        margin: 0 15px;
      }

      img {
        width: 100%;
      }

      &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      }
    }
  }
</style>
