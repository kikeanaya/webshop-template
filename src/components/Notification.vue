<template>
<div id="notification-container">
  <h2>{{ notificationText() }}</h2>
</div>
</template>

<script>
export default {
  name: 'Header',

  props: {
      beer: {
          type: Object
      },
      notificationType: {
          type: String
      }
  },

  methods: {
    notificationText() {
      if(this.notificationType === 'beerAdded') {
          return `${this.beer.name} has been added`;
      }
      if(this.notificationType === 'somethingElse') {
          return 'Something else';
      }
    }
  },

  mounted() {
      console.log("montado");
  }
}
</script>

<style scoped lang="scss">
#notification-container {
    position: fixed;
    right: 10px;
    top: 10px;
    border: 1px solid black;
    padding: 0px 30px;
    z-index: 1000;
    background-color: white;
}
</style>
