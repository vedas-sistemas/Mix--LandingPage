<template>
  <div class="row justify-center align-center">
    <div class="col-ml-12 col-lg-12">
      <div class="topnav py-3">
        <div class="row space-between align-center responsive">
          <div class="col-md-4 col-ml-2 col-lg-2 col-xs-6">
            <div class="logo-menu">
              <img :src="logo" />
            </div>
          </div>
          <div class="col-lg-8 col-ml-8 col-xs-1 nav-items">
            <NuxtLink to="/" class="nav-item">Home</NuxtLink>
            <a v-scroll-to="'#about'" class="nav-item">Sobre</a>
            <a v-scroll-to="'#pricing'" class="nav-item">Preços</a>
            <NuxtLink class="nav-item-btn" to="/cadastrar"
              >Quero ser parceiro</NuxtLink
            >
            <a
              target="_blank"
              href="https://www.facebook.com/mixappentregas"
              class="nav-item-icon"
            >
              <span class="mdi mdi-facebook"></span
            ></a>
            <a
              target="_blank"
              href="https://twitter.com/mixappentregas"
              class="nav-item-icon"
            >
              <span class="mdi mdi-twitter"></span
            ></a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCqWi6InU4DH0C_YElZpAYCQ/about"
              class="nav-item-icon"
            >
              <span class="mdi mdi-youtube"></span
            ></a>
          </div>
        </div>
      </div>
      <div class="row align-center space-between mobile">
        <div class="logo-mobile col-xs-6">
          <img :src="logo" />
        </div>
        <div class="col-xs-2">
          <span @click="openMenu()">
            <i class="mdi mdi-menu"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from '@/assets/index.js'
export default {
  data() {
    return {
      logo: logo.logo,
    }
  },
  methods: {
    openMenu() {
      document.getElementById('myNav').style.width = '100%'
    },
    closeNav() {
      document.getElementById('myNav').style.width = '0%'
    },
  },
}
</script>
<style lang="scss">
@media screen and (min-width: 1200px) and (max-width: 2500px) {
  .mobile {
    display: none;
  }
  .topnav {
    background-repeat: no-repeat;
    padding: 10px 10px;
    overflow: hidden;
    position: sticky;
    z-index: 3;
    .title-nav {
      font-size: 28px;
      color: #3a3b3b;
      max-width: 180px;
    }
    .logo {
      width: 40px;
      padding: 5px;
    }
    .nav-item {
      margin: 0px 10px;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      padding: 10px 20px;
      letter-spacing: 0;
      font-weight: 500;
      color: #3a3b3b;
      cursor: pointer;
    }
    .nav-item:hover {
      background: #ffff;
      color: #5530e5;
      border-radius: 8px;
    }
    .nav-item-btn {
      text-align: center;
      text-decoration: none;
      background: #ffff;
      color: #5530e5;
      box-shadow: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 800;
      padding: 10px 32px;
    }

    .nav-item-btn:hover::before {
      opacity: 1;
      transition-duration: 0.85s;
      transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
    }

    .nav-item-icon {
      font-size: 16px;
      margin: 0px 10px;
      color: #5530e5;
      padding: 10px 16px;
    }
    .nav-item-icon:hover {
      background: #ffff;
      color: #5530e5;
      border-radius: 8px;
    }

    /* .topnav a.active {
    background-color: #f7bd00;
    color: #ffffff;
  } */
    .menu {
      display: none;
    }
  }
}
/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-width: 450px) {
  .logo-mobile {
    width: 150px;
    height: 80px;
  }
  .topnav {
    display: none;
  }
  .mobile {
    padding: 20px 0px;
  }
  .mobile i {
    font-size: 40px;
    color: #30333c;
  }
}
</style>
