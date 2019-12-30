<template>
  <div class="designerItem">
    <div class="designerItem__header">
      <img class="header__portrait" :src="designer.portrait" />
      <template v-if="designer.name.type==='zh'">
        <div class="header__name">
          <img class="name__frame" src="@/assets/designer/frame-zh.png" />
          <span class="name__forename name__forename--zh">{{designer.name.forename}}</span>
          <span class="name__surname name__surname--zh">{{designer.name.surname}}</span>
          <span v-if="designer.name.nickname" class="name__nickname">{{designer.name.nickname}}</span>
        </div>
      </template>
      <template v-if="designer.name.type==='en'">
        <div class="header__name">
          <img class="name__frame" src="@/assets/designer/frame-en.png" />
          <span class="name__forename name__forename--en">{{designer.name.forename}}</span>
          <span class="name__surname name__surname--en">{{designer.name.surname}}</span>
          <span v-if="designer.name.nickname" class="name__nickname">{{designer.name.nickname}}</span>
        </div>
      </template>
      <div class="header__description">
        <p class="description__title">{{designer.description.title}}</p>
        <div class="description__sentenceGroup">
          <template v-for="(sentence, index) in designer.description.sentences">
            <p class="description__sentence" :key="index">{{sentence}}</p>
          </template>
        </div>
      </div>
    </div>
    <productItem
      v-if="designer.services"
      :primary="'SERVICE'"
      :secondary="'服務'"
      :productInfo="designer.services"
    ></productItem>
    <productItem
      v-if="designer.courses"
      :primary="'COURSE'"
      :secondary="'課程'"
      :productInfo="designer.courses"
    ></productItem>
    <div class="designerItem__topicGroup">
      <!-- <div class="topicGroup__topic">
        <img src="@/assets/designer/topic1.png" />
      </div>
      <div class="topicGroup__topic">
        <img src="@/assets/designer/topic2.png" />
      </div>
      <div class="topicGroup__topic">
        <img src="@/assets/designer/topic3.png" />
      </div>-->
    </div>
    <hr class="designerItem__line" />
  </div>
</template>
<script>
import productItem from './productItem.vue'
export default {
  components: {
    productItem
  },
  props: {
    designer: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.designerItem__header {
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 900px;
  margin-top: 1rem;
  .header__portrait {
    width: 320px;
    height: 240px;
  }
  .header__name {
    margin-left: 56px;
    position: relative;
    margin-top: 32px;
    color: #5b5756;
    .name__frame {
    }
    .name__forename {
      font-size: 36px;
      position: absolute;
      top: 42px;
      left: -24px;
      transform: translateY(-50%);
    }
    .name__forename--zh {
      writing-mode: vertical-lr;
    }
    .name__surname {
      position: absolute;

      transform: translateX(-50%);
    }
    .name__surname--zh {
      writing-mode: vertical-lr;
      font-size: 36px;
      left: 31px;
      top: 80px;
    }
    .name__surname--en {
      font-size: 15px;
      left: 40px;
      top: 72px;
    }
    .name__nickname {
      font-size: 15px;
      position: absolute;
      right: 0px;
      transform: translateX(50%);
      top: 40px;
    }
  }
  .header__description {
    margin-left: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 330px;
    .description__title {
      color: #4aa9c4;
      font-size: 12px;
    }
    .description__sentence {
      margin: 0;
      line-height: 1.4;
      font-size: 12px;
    }
  }
}
.designerItem__topicGroup {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2px;
  width: 604px;
  margin: 38px auto auto auto;
}
.designerItem__line {
  border-style: dashed;
  border-color: #4aa9c4;
  border-width: 1px;
}
</style>
