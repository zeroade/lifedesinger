<template>
  <div class="slideshow">
    <slot>
      
    </slot>
    <div class="slideshow__buttons">
      <button class="w3-button w3-display-left" @click="plusDivs(-1)">&#10094;</button>
      <button class="w3-button w3-display-right" @click="plusDivs(+1)">&#10095;</button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    slideIndex: 1
  }),
  mounted () {
    this.showDivs(this.slideIndex);
  },
  methods: {
    plusDivs (n) {
      this.showDivs((this.slideIndex += n));
    },
    showDivs (n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[this.slideIndex - 1].style.display = "block";
    }
  }
};
</script>
<style lang="scss" scoped>
.slideshow {
  position: relative;
  width: 100%;
  .slideshow__buttons {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 50%;
    border: 1px solid black;
  }
}
.mySlides {
  width: 100vw;
  height: 100vw;
}
</style>
