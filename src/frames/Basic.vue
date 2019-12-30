<template>
  <div>
    <navigation></navigation>
    <div class="paddingForNavigation">
      <router-view/>
    </div>
    <baseFooter></baseFooter>
  </div>
</template>
<script>
import navigation from '@/components/navigation.vue';
import baseFooter from '@/components/baseFooter.vue'
export default {
  components: {
    navigation,
    baseFooter
  }
};
</script>
<style lang="scss" scoped>
.paddingForNavigation {
  padding: 58px 0;
}
</style>
