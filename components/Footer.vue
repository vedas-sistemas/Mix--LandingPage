<template>
  <div class="footer col-ml-12 col-lg-12 mx-auto bg-theme">
    <div class="wrapper banner row space-between align">
      <div class="col-md-3 col-lg-4 col-xs-12">
        <div class="brand">
          <div class="logo-menu">
            <img :src="logo" />
          </div>
          <div>
            <span
              >Aumente suas vendas e economize com aplicativos
              marketplaces.</span
            >
          </div>
        </div>
        <div class="social-icons col-md-8 col-lg-8 col-xs-12 my-2">
          <div class="footer-item-title mb-1">
            <span>Siga nossas redes</span>
          </div>
          <div class="row justify-start">
            <div class="col-md-4 pa-0">
              <a target="_blank" href="https://www.facebook.com/mixappentregas">
                <span class="mdi mdi-facebook"></span
              ></a>
            </div>
            <div class="col-md-4 pa-0">
              <a target="_blank" href="https://twitter.com/mixappentregas">
                <span class="mdi mdi-twitter"></span
              ></a>
            </div>

            <div class="col-md-4 pa-0">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCqWi6InU4DH0C_YElZpAYCQ/about"
              >
                <span class="mdi mdi-youtube"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12">
        <div class="footer-items my-3">
          <div class="footer-item-title mb-1">
            <span>Precisando de ajuda?</span>
          </div>
          <div class="footer-item my-1">
            <a href="#">
              <span class="mdi mdi-help icon"></span>Dúvidas frequentes</a
            >
          </div>
          <div class="footer-item my-1">
            <a href="#">
              <span class="mdi mdi-email icon"></span>suportemix@gmail.com</a
            >
          </div>
          <div class="footer-item my-1">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=556696389809"
            >
              <span class="mdi mdi-whatsapp icon"></span>+55 66 99638 9809</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-1 col-lg-2 col-xs-12">
        <div class="footer-items my-3">
          <div class="footer-item-title mb-1">
            <span>Mix</span>
          </div>
          <div class="footer-item my-1">
            <a href="#">Inicio</a>
          </div>
          <div class="footer-item my-1">
            <a href="#" v-scroll-to="'#about'">Sobre</a>
          </div>
          <div class="footer-item my-1">
            <a href="#" v-scroll-to="'#pricing'">Preços</a>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-lg-3 col-xs-12 my-2">
        <div class="footer-items">
          <div class="footer-item-title mb-1">
            <span>Legal</span>
          </div>
          <div class="footer-item my-1">
            <a href="#">Politicas de privacidade</a>
          </div>
          <div class="footer-item my-1">
            <a href="#">Termos de uso</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-footer text-light">
      <span
        >Desenvolvido por vedassistemas <span class="mdi mdi-copyright"></span
      ></span>
      <span>2021</span>
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
}
</script>

<style lang="scss">
.footer {
  .wrapper {
    padding: 20px 30px;
    color: white;
    margin-top: 50px;
  }
  .brand {
    border-bottom: 3px solid #fff;
    padding-bottom: 15px;
  }
  .social-icons {
    margin: 15px 5px;
  }

  .social-icons a:hover {
    background: #fff;
    border-radius: 8px;
    color: #6628ea;
    padding: 5px 15px;
  }

  .social-icons a {
    color: #ffffff;
    padding: 5px 15px;
    font-size: 22px;
    margin-right: 5px;
  }
  .footer-items .footer-item {
    color: #fff;
  }
  .footer-item-title {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  .footer-items a:hover {
    border-bottom: 2px solid #fff;
    background-color: transparent;
    color: #fff;
  }

  .bottom-footer {
    text-align: center;
    font-size: 15px;
    padding: 10px 0px;
  }
}
</style>
