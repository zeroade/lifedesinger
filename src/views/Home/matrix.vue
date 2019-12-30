<template>
  <div class="matrix">
    <div v-for="(n, index) in 9" class="matrix__item" :key="index">
      <div>
        <img class="item__default" :src="teachers[index]">
        <a :href="`#teacher${n}`">
          <img class="item__hover" src="@/assets/cat2.jpeg">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// const SmoothScroll = require("smooth-scroll");
const teacher1 = require("@/assets/matrix/1.jpg");
const teacher2 = require("@/assets/matrix/2.jpg");
const teacher3 = require("@/assets/matrix/3.jpg");
const teacher4 = require("@/assets/matrix/4.jpg");
const teacher5 = require("@/assets/matrix/5.jpg");
const teacher6 = require("@/assets/matrix/6.jpg");
const teacher7 = require("@/assets/matrix/7.jpg");
const teacher8 = require("@/assets/matrix/8.jpg");
const teacher9 = require("@/assets/matrix/9.jpg");
export default {
  data: () => ({
    teachers: [
      teacher1,
      teacher2,
      teacher3,
      teacher4,
      teacher5,
      teacher6,
      teacher7,
      teacher8,
      teacher9
    ]
  })
};
</script>
<style lang="scss" scoped>
@keyframes showAfterDelay {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
.matrix {
  display: flex;
  flex-wrap: wrap;
  .matrix__item {
    width: 33%;
    position: relative;
    cursor: pointer;
    .item__default {
      width: 100%;
    }
    .item__hover {
      width: 100%;
      display: none;
    }
    &:nth-child(5) {
      .item__hover {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }
      .item__hover {
        transform: rotateY(90deg);
      }
      &:hover {
        .item__default {
          transition: 0.4s;
          transform: rotateY(90deg);
        }
        .item__hover {
          transition: 0.4s;
          transition-delay: 0.4s;
          transform: rotateY(180deg);
        }
      }
    }
    &:not(:nth-child(5)) {
      &:hover {
        .item__default {
          display: none;
        }
        .item__hover {
          display: block;
        }
      }
    }
  }
}
</style>
