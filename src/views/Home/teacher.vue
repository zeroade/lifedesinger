<template>
  <div class="teacher">
    <img class="teacher__portrait teacher__portrait--1" @click="routeToSenior()" src="@/assets/home/unknown1.jpg" />
    <img class="teacher__portrait teacher__portrait--2" @click="routeToSenior()" src="@/assets/home/unknown2.jpg" />
    <div class="teacher__portrait teacher__sandy d-flex">
      <img class="sandy__image" @click="routeToSenior()" src="@/assets/home/sandy.jpg" />
    </div>
    <img class="teacher__portrait teacher__portrait--3-1" @click="routeToSenior()" src="@/assets/home/unknown3-1.jpg" />
    <img class="teacher__portrait teacher__portrait--3-2" @click="routeToSenior()" src="@/assets/home/unknown3-2.jpg" />
    <img class="teacher__portrait teacher__portrait--4-1" @click="routeToSenior()" src="@/assets/home/unknown4-1.jpg" />
    <img class="teacher__portrait teacher__portrait--4-2" @click="routeToSenior()" src="@/assets/home/unknown4-2.jpg" />
    <img class="teacher__portrait teacher__portrait--5" @click="routeToSenior()" src="@/assets/home/unknown5.jpg" />
    <img class="teacher__portrait teacher__portrait--6" @click="routeToSenior()" src="@/assets/home/unknown6.jpg" />
  </div>
</template>
<script>
export default {
  methods: {
    routeToSenior () {
      this.$router.push({
        name: 'senior'
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.teacher {
  // padding: 0 32px;
  display: grid;
  grid-template-areas:
    "one two"
    "sandy sandy"
    "three-one four-one"
    "three-two four-two"
    "five six";
  grid-template-columns: auto auto;
  grid-column-gap: 8px;
  .teacher__portrait {
    width: 100%;
    margin-top: 8px;
    justify-self: center;
    cursor: pointer;
  }
  .teacher__portrait--1 {
    grid-area: one;
  }
  .teacher__portrait--2 {
    grid-area: two;
  }
  .teacher__sandy {
    background-color: #f0f0f2;
    grid-area: sandy;
  }
  .teacher__portrait--3-1 {
    grid-area: three-one;
  }
  .teacher__portrait--3-2 {
    grid-area: three-two;
  }
  .teacher__portrait--4-1 {
    grid-area: four-one;
  }
  .teacher__portrait--4-2 {
    grid-area: four-two;
  }
  .teacher__portrait--5 {
    grid-area: five;
  }
  .teacher__portrait--6 {
    grid-area: six;
  }
}
@media screen and (min-width: 768px) {
  .teacher {
    max-width: 640px;
    margin: auto;
    grid-template-areas:
      "one two three-one"
      "four-one sandy three-two "
      "four-two five six";
    // grid-auto-columns: 1fr;
    // grid-template-rows: minmax(0, 1fr);
    // grid-auto-flow: column;
    .teacher__portrait {
      // max-height: 100%;
      // max-width: 90%;
    }
    .teacher__sandy {
      // max-width: 100%;
      // margin: unset;
      // width: unset;
      .sandy__image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
