<template>
  <div id="home" class="home">
    <slideshow2></slideshow2>
    <teacher class="teacher"></teacher>
    <teacher2 class="teacher2"></teacher2>
    <plan></plan>
  </div>
</template>
<script>
export default {
  components: {
    teacher: () => import("./teacher.vue"),
    teacher2: () => import("./teacher2.vue"),
    plan: () => import("./plan.vue"),
    slideshow2: () => import('./slideshow2.vue')
  }
};
</script>
<style lang="scss" scoped>
.teacher {
  padding: 0 32px;
}
.teacher2 {
  margin-top: 95px;
}
@media screen and (min-width: 768px) {
  .teacher {
    padding: 0;
  }
}
</style>

