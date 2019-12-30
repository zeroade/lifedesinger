<template>
  <div class="bookmarks d-flex justify-content-between">
    <ul class="bookmarks__tabs d-flex">
      <li class="tabs__item align-self-center">頁籤1</li>
      <li class="tabs__item align-self-center">頁籤2</li>
    </ul>
    <ul class="bookmarks__socials d-flex">
      <li class="socials__item align-self-center">
        <i class="fab fa-facebook-square"></i>
      </li>
      <li class="socials__item align-self-center">
        <i class="fab fa-youtube-square"></i>
      </li>
      <li class="socials__item align-self-center">
        <i class="fab fa-line"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.bookmarks {
  background-color: #585755;
  .bookmarks__tabs {
    padding: 2px 5%;
    margin: 0;
    .tabs__item {
      color: #40bed5;
      font-size: 22px;
      line-height: 44px;
      margin-right: 1em;
      white-space: nowrap;
      cursor: pointer;
    }
  }
  .bookmarks__socials {
    margin: 0;
  }
  .fab {
    width: 44px;
    font-size: 44px;
    color: white;
    cursor: pointer;
  }
}

@media screen and (min-width: 768px) {
  .bookmarks {
    background-color: #4aa9c4;
    .bookmarks__tabs {
      .tabs__item {
        /*color: #d6ecf1;*/
        color: rgba(255, 255, 255, 0.5);
        &:hover {
          color: white;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
