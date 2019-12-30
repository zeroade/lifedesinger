<template>
  <div class="baseFooter">
    <hr class="baseFooter__hr d-none d-md-block">
    <span class="baseFooter__patent">@2019 生涯設計師 ALL RIGHT RESERVED.</span>
    <hr class="baseFooter__hr d-none d-md-block">
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.baseFooter {
  background-color: #4aa9c4;
  color: white;
  padding: 16px 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  .baseFooter__patent{
    margin: 0 2em;
  }
  .baseFooter__hr {
    width: 5em;
    border-color: white;
  }
}
</style>
