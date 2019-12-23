<template>
  <div id="card-container">
    <div class="beer-card" data-aos="fade-up">
        <img src="../assets/beer1.png">
        <h5>OTHER HALF GINGERBREAD</h5>
        <h5>9 €</h5>
    </div>
    <div class="beer-card" data-aos="fade-up">
        <img src="../assets/beer2.png">
        <h5>OTHER HALF FLORETS</h5>
        <h5>6 €</h5>
    </div>
    <div class="beer-card" data-aos="fade-up">
        <img src="../assets/beer3.png">
        <h5>OTHER HALF BALACLAVA</h5>
        <h5>8 €</h5>
    </div>
    <div class="beer-card" data-aos="fade-up">
        <img src="../assets/beer4.png">
        <h5>OTHER HALF HOP SHOWERS</h5>
        <h5>9 €</h5>
    </div>
    <div class="beer-card" data-aos="fade-up">
        <img src="../assets/beer5.png">
        <h5>OTHER HALF CREAM ON THE INSIDE</h5>
        <h5>7 €</h5>
    </div>
    <div class="beer-card" data-aos="fade-up">
        <img src="../assets/beer6.png">
        <h5>OTHER HALF GREEN DIAMONDS</h5>
        <h5>6 €</h5>
    </div>
    <div class="beer-card" data-aos="fade-up">
        <img src="../assets/beer7.png">
        <h5>OTHER HALF COBBLER JAMS</h5>
        <h5>6 €</h5>
    </div>
    <div class="beer-card" data-aos="fade-up">
        <img src="../assets/beer8.png">
        <h5>OTHER HALF MYLAR BAGS</h5>
        <h5>8 €</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catalog',

  data() {
    return {

    }
  },
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
  }

  #card-container {
    width: 80%;
    margin: 30px auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>
