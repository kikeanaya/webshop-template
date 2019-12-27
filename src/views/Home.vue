<template>
<div>
  <div id="highlights-container">
    <transition-group name="fade">
      <img id="website-logo" :src="images[imageCounter]" :key="images[imageCounter]"/>
    </transition-group>
    <a id="previous-icon" @click="previousClick">&#10094;</a>
    <a id="next-icon" @click="nextClick">&#10095;</a>
  </div>
  <div id="fresh-card" data-aos="fade-right">
    <div class="title-container">
      <h1>FRESH</h1>
    </div>
  </div>
  <div id="pairing-card" data-aos="fade-left">
    <div class="title-container">
      <h1>PAIRING</h1>
    </div>
  </div>
</div>
</template>

<script>
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

export default {
  name: 'home',

  data() {
    return {
      imageCounter: 0,
      images: [
        image1,
        image2,
        image3,
        image4
      ]
    }
  },

  methods: {
    previousClick() {
      if (this.imageCounter === 0) return
      else this.imageCounter--;
    },
    nextClick() {
      if (this.imageCounter === 3) return
      else this.imageCounter++;
    }
  }
}
</script>

<style lang="scss" scoped>
  #highlights-container {
    margin: 10px auto;
    width: 45%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  #previous-icon {
    position: absolute;
    left: 10px;
    top: 195px;
    color: white;
    font-size: 2em;

    &:hover {
      cursor: pointer;
    }
  }

  #next-icon {
    position: absolute;
    right: 10px;
    top: 195px;
    color: white;
    font-size: 2em;

    &:hover {
      cursor: pointer;
    }
  }

  #fresh-card {
    border-radius: 3px;
    width: 500px;
    height: 300px;
    position: absolute;
    left: 200px;
    margin: 150px 0px;
    background-image: url('../assets/fresh.jpg');
    background-size: cover;

    h1{
      color: white;
      font-size: 4em;
    }
  }

  #pairing-card {
    border-radius: 3px;
    width: 500px;
    height: 300px;
    position: absolute;
    right: 200px;
    margin: 150px 0px;
    background-image: url('../assets/pairing.jpg');
    background-size: cover;

    h1{
      color: white;
      font-size: 4em;
    }
  }

  .title-container{
    height: 100%;
    width: 100%;
    margin: 110px auto;
  }
</style>
