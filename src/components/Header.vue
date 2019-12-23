<template>
<div id="header-container">
  <div id="top-container">
    <h2>FREE SHIPPING ON ORDERS OVER 40 €</h2>
    <input placeholder="search here">
  </div>
  <img id="website-logo" src="../assets/logo.png"/>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <a>All Items</a>
    <router-link to="/contact">Contact</router-link>
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
  border-bottom: 1px solid black;
}

#website-logo {
  height: 120px;
}

#top-container {
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin: 10px;

  h2 {
    font-size: 0.7em;
    font-weight: 100;
    margin: 0px;
  }

  input {
    width: 200px;
    padding: 0px 10px;
    border: 0px;
    border-bottom: 1px solid lightgray;
    outline: none;
  }
}

#nav {
  height: 30px;
  width: 60%;
  margin: 0 auto;
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
