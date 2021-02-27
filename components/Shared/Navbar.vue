<template>
  <div class="nav">
    <div id="myNav" class="overlay">
      <!-- Button to close the overlay navigation -->
      <a class="closebtn" @click="closeNav()"
        ><span class="mdi mdi-close"></span
      ></a>

      <!-- Overlay content -->
      <div class="overlay-content">
        <a href="#">home</a>
        <a href="#">sobre</a>
        <a href="#">dúvidas</a>
        <a href="#">nossos planos</a>
      </div>
    </div>
    <div class="topnav" id="myTopnav">
      <div class="row space-between align-center responsive">
        <div class="col-md-4 col-lg-5 col-xs-6">
          <div class="row align-center justify-start px-3">
            <div class="logo-menu mr-1">
              <img :src="logo" />
            </div>
            <div class="title-nav"></div>
          </div>
        </div>
        <div class="col-lg-7 col-md-8 col-xs-1 nav-items">
          <a href="#Home" class="nav-item">Home</a>
          <a href="#news" class="nav-item">Sobre</a>
          <a href="#contact" class="nav-item">Dúvidas</a>
          <NuxtLink class="nav-item-btn" to="/cadastrar"
            >Quero ser parceiro</NuxtLink
          >
          <a href="#" class="nav-item-icon">
            <span class="mdi mdi-facebook"></span
          ></a>
          <a href="#" class="nav-item-icon">
            <span class="mdi mdi-twitter"></span
          ></a>
          <a href="#" class="nav-item-icon">
            <span class="mdi mdi-youtube"></span
          ></a>
        </div>
        <div class="col-xs-1 col-sm-1 menu">
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
      logo: logo.logo_menu,
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
.topnav {
  background: linear-gradient(-45deg, #9300dc 20%, #4144e8 70%);
  background-repeat: no-repeat;
  padding: 10px 10px;
  overflow: hidden;
  position: fixed;
  z-index: 3;
  .title-nav {
    font-size: 28px;
    color: #def5f2;
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
    color: #ffffff;
  }
  .nav-item:hover {
    color: #def5f2;
    background-color: #fff !important;
    border-radius: 8px;
  }
  .nav-item-btn {
    text-align: center;
    text-decoration: none;
    background: #ffff;
    color: #0b10fd;
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
    color: white;
    padding: 10px 16px;
  }
  .nav-item-icon:hover {
    color: #def5f2;
    background-color: #fac720 !important;
    border-radius: 8px;
  }

  /* .topnav a.active {
    background-color: #f7bd00;
    color: #ffffff;
  } */
  .menu {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    .topnav a:not(.title-nav) {
      display: none;
    }
    .nav-items {
      display: none;
    }
    .topnav {
      padding: 10px !important;
    }
    .menu {
      float: right;
      display: block;
      color: white;
      font-size: 22px;
      cursor: pointer;
    }
    .responsive {
      display: flex;
      justify-items: flex-end;
    }
  }
}
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background: linear-gradient(-45deg, #0b10fd 20%, #0b10fd 70%);
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 10%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: white;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  top: 20px;
  right: 45px;
  font-size: 40px;
}
.logo-menu {
  width: 120px;
}
/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
