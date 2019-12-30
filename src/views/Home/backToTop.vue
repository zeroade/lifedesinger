<template>
  <div class="back">
    <a ref="backTopLink" @click="goAnchor('#home')">Back</a>
  </div>
</template>
<script>
export default {
  methods: {
    goAnchor (selector) {
      var anchor = document.querySelector(selector)
      console.log({
          anchor
      })
      anchor.scrollIntoView();
    //   document.body.scrollTop = anchor.offsetTop
    }
  }
};
</script>
<style lang="scss" scoped>
.back {
  position: fixed;
  right: 44px;
  bottom: 44px;
}
</style>
