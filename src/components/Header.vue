<template>
<div id="header-container">
  <div id="top-container">
    <h2>FREE SHIPPING ON ORDERS OVER 40 €</h2>
  </div>
  <img id="website-logo" src="../assets/logo.png"/>
  <div id="nav">
    <router-link to="/" :class="{ active: homeSelected }">HOME</router-link>
    <router-link to="/catalog" :class="{ active: catalogSelected }">ALL ITEMS</router-link>
    <router-link to="/contact" :class="{ active: contactSelected }">CONTACT</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    homeSelected() {
      return this.$route.name === 'home';
    },
    catalogSelected() {
      return this.$route.name === 'catalog';
    },
    contactSelected() {
      return this.$route.name === 'contact';
    }
  }
}
</script>

<style scoped lang="scss">
#header-container {
  box-shadow: 0 2px 2px -2px lightgray;
}

#website-logo {
  height: 120px;
}

#spacer {
  height: 2000px;
  background-color: green;
}

#top-container {
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin: 20px;
  margin-bottom: 0px;

  h2 {
    font-size: 0.7em;
    font-weight: 100;
    margin: 0px;
  }
}

#nav {
  width: 60%;
  margin: 0 auto;
  font-size: 0.9em;
  padding: 20px 0px;
  display: flex;
  justify-content: space-evenly;

  a {
    font-weight: bold;
    text-decoration: none;
    color: rgb(152, 150, 150);
  }
}
  
.active {
  color: black !important;
}
</style>
