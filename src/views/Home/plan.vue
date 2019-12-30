<template>
  <div class="plan">
    <div class="plan__slogan">
      <div class="slogan__imageGroup">
        <button>
          <img class="slogan__image" src="@/assets/home/slogan1.png" />
        </button>
        <img class="slogan__image slogan__image--cross" src="@/assets/home/slogan2.png" />
        <button>
          <img class="slogan__image" src="@/assets/home/slogan3.png" />
        </button>
      </div>
    </div>
    <div class="plan__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/home/plan.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/home/plan.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/home/plan.png" />
            </div>
          </li>
        </ul>
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
  mounted() {
    new Glide('.plan__glide', {
      type: 'carousel',
      perView: 4,
      focusAt: 'center',
      breakpoints: {
        768: {
          perView: 3
        },
        576: {
          perView: 2
        },
      }
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
  margin-top: 85px;
  .slogan__imageGroup {
    display: flex;
    background-color: white;
    padding: 0 16px;
    .slogan__image {
      height: 30px;
    }
    .slogan__image--cross {
      height: 16px;
      margin: auto 24px;
    }
  }
}
.plan__glide {
  margin-top: 32px;
  .glide__control {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .control__button {
      height: 64px;
      font-size: 64px;
      line-height: 64px;
      color: white;
      font-weight: 200;
    }
  }
}
.slide__content {
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  .plan__slogan {
    background-color: #4aa9c4;
  }
}
</style>

