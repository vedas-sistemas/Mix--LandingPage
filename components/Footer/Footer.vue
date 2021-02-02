<template>
  <div class="footer">
    <div class="wrapper banner row space-between align">
      <div class="col-md-3 col-lg-3 col-xs-12">
        <div class="brand">
          <h3 class="title-nav">mix | delivery</h3>
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
              <a href="#"> <span class="mdi mdi-facebook"></span></a>
            </div>
            <div class="col-md-4 pa-0">
              <a href="#"> <span class="mdi mdi-twitter"></span></a>
            </div>

            <div class="col-md-4 pa-0">
              <a href="#"> <span class="mdi mdi-youtube"></span></a>
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
            <a href="#">
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
            <a href="#">Sobre</a>
          </div>
          <div class="footer-item my-1">
            <a href="#">Dúvidas</a>
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
    <div class="bottom-footer">
      <span
        >Desenvolvido por vedassistemas <span class="mdi mdi-copyright"></span
      ></span>
      <span>2021</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  .wrapper {
    padding: 70px 30px;
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
    background: #f7bd00;
    border-radius: 8px;
    color: #ffffff;
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
    border-bottom: 2px solid #f7bd00;
    background-color: transparent;
    color: #f7bd00;
  }

  .bottom-footer {
    text-align: center;
    font-size: 15px;
    padding: 10px 0px;
  }
}
</style>
