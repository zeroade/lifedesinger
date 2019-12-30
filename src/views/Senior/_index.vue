<template>
  <div class="senior">
    <div class="senior__banner">
      <img src="@/assets/home/unknown1.jpg">
    </div> 
    <productItem
      id="service"
      :primary="'SERVICE'"
      :secondary="'服務'"
      :productInfo="designer.services"
    ></productItem>
    <productItem id="course" :primary="'COURSE'" :secondary="'課程'" :productInfo="designer.courses"></productItem>
  </div>
</template>
<script>
import productItem from './productItem.vue'
export default {
  components: {
    productItem
  },
  data: () => ({
    glide: null,
    designer: {
      services: [
        {
          type: 'list',
          title: '轉職說明書',
          items: [
            '在面試時問出對於自己重要的資訊。',
            '在工作機會中做選擇時下理性判斷。',
            '降低求職時做錯選擇的風險',
            '判斷現在是否是自己轉職的好時機'
          ],
        },
        {
          type: 'list',
          title: '生涯電話亭',
          items: [
            '再戰職場的評估',
            '子女關懷與溝通',
            '退休後生活規劃',
          ]
        },
        {
          type: 'remark',
          text: '以上不知道找誰, 可以跟我們聊聊。'
        }
      ],
      courses: [
        {
          type: 'list',
          title: '生涯設計工作坊',
          items: [
            '三種生涯原型',
            '一年內免費複訓',
            '生涯設計師社群的資源整合',
            '完成任務後頒發"生涯設計工作坊結業證書"'
          ],
          link: 'https://www.facebook.com/lifedesignertw'
        },
      ]
    },
  }),
}
</script>
<style lang="scss" scoped>
.senior__banner {
  height: 200px;
  background-color: #4aa9c4;
}
.senior__service {
  background-color: #efefef;
  text-align: center;
  margin-top: 25px;
  height: 30px;
  cursor: pointer;
  .service__title {
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
.senior__glide {
  margin-top: 32px;
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
</style>