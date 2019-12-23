<template>
  <div id="highlights-container">
    <img id="website-logo" :src="require(`@/assets/${images[imageCounter]}`)" :key="images[imageCounter]"/>
    <a id="previous-icon" @click="previousClick">&#10094;</a>
    <a id="next-icon" @click="nextClick">&#10095;</a>
  </div>
</template>

<script>

export default {
  name: 'home',

  data() {
    return {
      imageCounter: 0,
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg"
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
  },

  computed: {
    selectedImage() {
      return this.images[this.imageCounter];
    }
  }
}
</script>

<style lang="scss" scoped>
  #highlights-container {
    margin: 10px auto;
    height: 400px;
    width: 50%;
    border:  1px solid black;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  #previous-icon {
    position: absolute;
    left: 10px;
    top: 185px;
    color: white;
    font-size: 2em;

    &:hover {
      cursor: pointer;
    }
  }

  #next-icon {
    position: absolute;
    right: 10px;
    top: 185px;
    color: white;
    font-size: 2em;

    &:hover {
      cursor: pointer;
    }
  }
</style>
