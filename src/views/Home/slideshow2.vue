<template>
  <div class="plan">
    <div class="banner__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/home/banner.png">
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/home/banner.png">
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/home/banner.png">
            </div>
          </li>
        </ul>
      </div>
      <div v-if="glide" class="glide__bullets" data-glide-el="controls[nav]">
        <button
          class="glide__bullet"
          :class="{'glide__bullet--active':glide._i===0}"
          data-glide-dir="=0"
          @click="glide.go('=0')"
        ></button>
        <button
          class="glide__bullet"
          :class="{'glide__bullet--active':glide._i===1}"
          data-glide-dir="=1"
          @click="glide.go('=1')"
        ></button>
        <button
          class="glide__bullet"
          :class="{'glide__bullet--active':glide._i===2}"
          data-glide-dir="=2"
          @click="glide.go('=2')"
        ></button>
      </div>
      <div class="glide__control" data-glide-el="controls">
        <button class="control__button" data-glide-dir="<">&#60;</button>
        <button class="control__button" data-glide-dir=">">&#62;</button>
      </div>
    </div>
  </div>
</template>
<script>
import Glide from '@glidejs/glide'
export default {
  data: () => ({
    glide: null,
  }),
  mounted () {
    this.glide = new Glide('.banner__glide', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
      // breakpoints: {
      //   768: {
      //     perView: 3
      //   },
      //   576: {
      //     perView: 2
      //   },
      // }
    }).mount()
  }
}
</script>
<style lang="scss" scoped>
.plan__slogan {
  display: flex;
  justify-content: center;
  border-left: 8px solid #4aa9c4;
  border-right: 8px solid #4aa9c4;
  margin-top: 32px;
  .slogan__image {
    margin: 0 4px;
  }
}
.banner__glide {
  margin-top: 32px;
  .glide__control {
    position: absolute;
    top: 50%;
    transform: translateY(-60%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    .control__button {
      height: 50px;
      font-size: 50px;
      line-height: 50px;
      font-weight: 200;
      &:focus{
        outline: none;
      }
    }
  }
  .glide__bullet {
    border: 1px solid black;
  }
  .glide__bullet--active {
    background-color: black;
  }
}
.slide__content {
  display: flex;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
}
</style>

