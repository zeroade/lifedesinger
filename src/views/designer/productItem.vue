<template>
  <div class="productItem">
    <div class="productItem__product" @click="isOpen=!isOpen">
      <div class="product__title">
        <span class="title__primary">{{primary}}</span>
        <span class="title__secondary">{{secondary}}</span>
      </div>
    </div>
    <div class="productItem__content" :class="{'productItem__content--isOpen':isOpen}">
      <template v-for="(segment, index) in productInfo">
        <div class="content__header" v-if="segment.type==='header'" :key="index">
          <h2 class="header__text">{{segment.title}}</h2>
          <hr class="header__line" />
          <p
            class="header__description"
            v-for="(description,index) in segment.descriptions"
            :key="`description${index}`"
          >
            <span class="description__title">{{description.title}}:</span>
            {{description.description}}
          </p>
        </div>
        <div class="content__list" v-if="segment.type==='list'" :key="index">
          <img class="list__triangle list__triangle--topLeft" src="@/assets/designer/triangle.png" />
          <img
            class="list__triangle list__triangle--bottomRight"
            src="@/assets/designer/triangle.png"
          />
          <span class="list__title">{{segment.title}}</span>
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
        </div>
        <div class="content__paragraph" v-if="segment.type==='paragraph'" :key="index">
          <h2 class="paragraph__title">{{segment.title}}</h2>
          <div
            class="paragraph__body"
            v-for="(paragraph,index) in segment.paragraphs"
            :key="`paragraph${index}`"
          >
            <h3 class="body__title">{{paragraph.title}}</h3>
            <p
              class="body__sentence"
              v-for="(sentence, index) in paragraph.sentences"
              :key="`paragraph${index}`"
            >{{sentence}}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isOpen: false
  }),
  props: {
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
  .content__list {
    background-color: #efefef;
    padding: 10px 12px;
    display: flex;
    position: relative;
    margin-top: 38px;
    .list__title {
      align-self: center;
      color: #4aa9c4;
      width: 7em;
      font-size: 12px;
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
</style>
