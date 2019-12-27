<template>
<div id="header-container">
  <div id="top-container">
    <h2>FREE SHIPPING ON ORDERS OVER 40 €</h2>
  </div>
  <img id="website-logo" src="../assets/logo.png"/>
  <div id="nav">
    <router-link to="/">HOME</router-link>
    <router-link to="/catalog">ALL ITEMS</router-link>
    <router-link to="/contact">CONTACT</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header'
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
  height: 30px;
  width: 60%;
  margin: 0 auto;
  font-size: 0.9em;
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;

  a {
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
}
</style>
