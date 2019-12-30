<template>
  <nav id="navigation" class="navbar navbar-expand-md navbar-dark">
    <router-link class="navbar__head d-flex" :to="{name:'Home'}">
      <img class="navbar__logo" src="@/assets/navigation/logo.png" />
      <div class="navbar__header d-flex">
        <span class="header__text header__text--chinese">生涯設計師</span>
        <span class="header__text header__text--english d-none d-md-block">LIFE DESIGNER</span>
      </div>
    </router-link>
    <div class="d-md-none">
      <img class="navbar__portrait" src="@/assets/navigation/portrait.png" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'designer'}">生涯設計師</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" :to="{name:'theme'}">主題</router-link>
        </li> -->
        <!-- <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Login'}">登入</router-link>
        </li> -->
        <!-- <li class="nav-item">
          <router-link class="nav-link" :to="{name:'senior'}">高年實習生</router-link>
        </li> -->
      </ul>
    </div>
    <img class="navbar__portrait d-none d-md-block" src="@/assets/navigation/portrait.png" />
  </nav>
</template>
<script>
import $ from "jquery";
// import bookmarks from './bookmarks.vue'
export default {
  components: {
    // bookmarks
  },
  data: () => ({
    routeNames: ["Login"]
  }),
  mounted () {
    document.addEventListener("click", this.detectClickOutside);
  },
  destroyed () {
    document.removeEventListener("click", this.detectClickOutside);
  },
  methods: {
    switchItem (event, index) {
      const navItems = this.$refs["nav-item"];
      navItems.forEach(item => {
        item.classList.remove("active");
      });
      navItems[index].classList.add("active");
      this.closeMenu();
    },
    detectClickOutside (event) {
      const navigation = document.querySelector("#navigation");
      const isClickInside = navigation.contains(event.target);
      if (!isClickInside) {
        this.closeMenu();
      }
    },
    closeMenu () {
      $(".navbar-collapse").collapse("hide");
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  background-color: #4aa9c4;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  .navbar__logo {
    width: 44px;
    height: 44px;
  }
  .navbar__head {
    text-decoration: none;
  }
  .navbar__header {
    color: #d6ecf1;
    font-size: 20px;
    align-self: center;
    margin-left: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    .header__text {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        text-decoration-color: white;
      }
      .header__text--english {
        display: none;
      }
    }
  }
  .navbar-nav {
    .nav-link {
      &:hover {
        border-bottom: 1px solid white;
      }
    }
  }
  .navbar__portrait {
    width: 44px;
  }
  .navbar-toggler {
    margin-left: 5px;
  }
}
@media screen and (min-width: 768px) {
  .header__text--english {
    margin-left: 8px;
  }
  .collapse {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
