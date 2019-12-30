<template>
  <div class="productItem">
    <div class="productItem__product">
      <div class="product__title">
        <span class="title__primary">{{primary}}</span>
        <span class="title__secondary">{{secondary}}</span>
      </div>
    </div>
    <div class="productItem__content">
      <div class="content__glide glide" :class="`content__glide--${id}`">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <div class="slide__content">
                <img class="content__image" src="@/assets/designer/designer1.png" />
              </div>
            </li>
            <li class="glide__slide">
              <div class="slide__content">
                <img class="content__image" src="@/assets/designer/designer2.png" />
              </div>
            </li>
            <li class="glide__slide">
              <div class="slide__content">
                <img class="content__image" src="@/assets/designer/designer3.png" />
              </div>
            </li>
            <li class="glide__slide">
              <div class="slide__content">
                <img class="content__image" src="@/assets/designer/designer2.png" />
              </div>
            </li>
            <li class="glide__slide">
              <div class="slide__content">
                <img class="content__image" src="@/assets/designer/designer3.png" />
              </div>
            </li>
          </ul>
        </div>
        <div v-if="glide" class="glide__bullets" data-glide-el="controls[nav]">
          <template v-for="(number,index) in 5">
            <button
              :key="number"
              class="glide__bullet"
              :class="{'glide__bullet--active':glide._i===index}"
              data-glide-dir="=0"
              @click="glide.go('=0')"
            ></button>
          </template>
        </div>
        <div class="glide__control" data-glide-el="controls">
          <button class="control__button" data-glide-dir="<">&#60;</button>
          <button class="control__button" data-glide-dir=">">&#62;</button>
        </div>
      </div>
      <div class="productItem__contentGroup">
        <template v-for="(segment, index) in productInfo">
          <div class="content__list" v-if="segment.type==='list'" :key="`list${index}`">
            <img
              class="list__triangle list__triangle--topLeft"
              src="@/assets/designer/triangle.png"
            />
            <img
              class="list__triangle list__triangle--bottomRight"
              src="@/assets/designer/triangle.png"
            />
            <h1 class="list__title">{{segment.title}}</h1>
            <hr class="list__line" />
            <ul class="list__itemGroup">
              <template v-for="(item,index) in segment.items">
                <li class="itemGroup__listItem" :key="`item${index}`">
                  <div class="listItem__content">
                    <span class="content__number">{{index+1}}</span>
                    <span class="content__description">{{item}}</span>
                  </div>
                </li>
              </template>
            </ul>
            <a
              v-if="segment.link"
              class="list__link"
              :href="segment.link"
              target="_blank"
            >{{segment.link}}</a>
          </div>
          <div
            v-if="segment.type==='remark'"
            class="content__remark"
            :key="`remark${index}`"
          >{{segment.text}}</div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import Glide from '@glidejs/glide'
export default {
  data: () => ({
    isOpen: false,
    glide: null,
  }),
  props: {
    id: {
      type: String,
      required: true
    },
    primary: {
      type: String,
      default: ''
    },
    secondary: {
      type: String,
      default: ''
    },
    productInfo: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  mounted () {
    this.createGlide()
  },
  methods: {
    createGlide () {
      this.glide = new Glide(`.content__glide--${this.id}`, {
        type: 'carousel',
        perView: 4,
        focusAt: 'center',
        breakpoints: {
          576: { perView: 1 },
          720: { perView: 2 },
        }
      }).mount()
    }
  }
}
</script>
<style lang="scss" scoped>
.productItem__product {
  background-color: #efefef;
  text-align: center;
  margin-top: 25px;
  height: 30px;
  cursor: pointer;
  .product__title {
    width: 240px;
    margin: auto;
    display: flex;
    justify-content: center;
    background-color: white;
    color: #4aa9c4;
    .title__primary {
      font-size: 30px;
      line-height: 30px;
      font-family: "Open Sans Condensed", sans-serif;
      letter-spacing: 5px;
    }
    .title__secondary {
      writing-mode: vertical-lr;
      font-size: 15px;
    }
  }
}
.productItem__content {
  padding: 0 5%;
  overflow: hidden;
  transition: all 0.38s;
  max-height: 300vh;
  .content__header {
    font-weight: normal;
    margin-top: 45px;
    .header__text {
      font-size: 36px;
      color: #4aa9c4;
    }
    .header__line {
      border-color: #4aa9c4;
    }
    .header__description {
      font-size: 12px;
      .description__title {
        color: #4aa9c4;
      }
    }
  }
  .content__glide {
    margin-top: 16px;
    .glide__slide {
      .slide__content {
        .content__image {
          width: 100%;
        }
      }
    }
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
        color: white;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .productItem__contentGroup {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .content__list {
      background-color: #efefef;
      padding: 10px 12px;
      // display: flex;
      position: relative;
      margin-top: 38px;
      // width: 45%;
      .list__title {
        color: #4aa9c4;
        font-size: 36px;
        margin-left: 8px;
      }
      .list__line {
        border-color: #4aa9c4;
      }
      .list__triangle {
        position: absolute;
      }
      .list__triangle--topLeft {
        top: 0;
        left: 0;
      }
      .list__triangle--bottomRight {
        bottom: 0;
        right: 0;
        transform: rotate(180deg);
      }
      .list__itemGroup {
        display: flex;
        flex-direction: column;
        .itemGroup__listItem {
          margin-top: 15px;
          display: flex;
          &:first-child {
            margin-top: 0px;
          }
          .listItem__content {
            border-bottom: 1px solid #4aa9c4;
            position: relative;
            margin-top: 18px;
            .content__number {
              position: absolute;
              font-size: 50px;
              color: #4aa9c4;
              font-family: "Open Sans Condensed", sans-serif;
              transform: translateY(20px);
              bottom: 0;
            }
            .content__description {
              margin-left: 30px;
              font-size: 12px;
            }
          }
        }
      }
      .list__link {
        color: #4aa9c4;
        margin-left: 30px;
      }
    }
    .content__remark {
      color: #4aa9c4;
    }
    .content__link {
      color: #4aa9c4;
    }
  }
  .content__paragraph {
    margin-top: 38px;
    padding-left: 12px;
    .paragraph__title {
      font-size: 12px;
      font-weight: bold;
      color: #4aa9c4;
    }
    .paragraph__body {
      .body__title {
        font-size: 12px;
        color: #4aa9c4;
      }
      .body__sentence {
        font-size: 12px;
      }
    }
  }
}
.productItem__content--isOpen {
  max-height: 0px;
}

@media screen and (min-width: 720px) {
  .productItem__content {
    .productItem__contentGroup {
      display: grid;
      grid-column-gap: 16px;
      grid-template-columns: 1fr 1fr;
      .content__list {
        margin: unset;
      }
    }
  }
}
</style>
