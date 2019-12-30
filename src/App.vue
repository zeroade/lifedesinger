<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const SmoothScroll = require("smooth-scroll");
export default {
  mounted() {
    new SmoothScroll('a[href*="#"]');
  }
};
</script>

<style lang="scss">
// 加了很糟糕
// html {
//     scroll-behavior: smooth;
// }
// * {
//   margin: 0;
//   padding: 0;
// }
// import global scss
@import "scss/container.scss";
@import "scss/color.scss";

ul,
ol {
  list-style-type: none;
}
// Required Core Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
// Optional Theme Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

button {
  background-color: unset;
  border: unset;
  padding: none;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
}
hr {
  margin: 0;
}

#app {
  font-family: "Noto Sans TC";
}
</style>
