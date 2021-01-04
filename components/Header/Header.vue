<template>
  <div class="header">
    <div class="header-container">
      <div class="header-child">
        <div class="header-child-text">
          <div class="header-child-title">
            <h3>Uma plataforma de delivery completa para seu o seu negócio</h3>
          </div>
          <div class="header-child-details">
            <p>
              seu cliente não precisa instalar nada. Aumente suas vendas e
              economize com aplicativos marketplaces.
            </p>
          </div>
          <div class="header-child-btn">
            <a href="#">quero ser parceiro</a>
          </div>
        </div>
      </div>
      <div class="header-child-item">
        <div class="header-child-image">
          <img :src="imageUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: require('~/assets/images/header/image-1.svg'),
    }
  },
}
</script>

<style>
.header {
  background-color: #4d04ea;
  background-repeat: no-repeat;
}
.header-child-btn a {
  float: left;
  text-align: center;
  text-decoration: none;
  background: #f7bd00;
  color: #4d04ea;
  box-shadow: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 800;
  padding: 18px 32px 16px;
}

@media all and (min-width: 1024px) and (max-width: 1490px) {
  .header-container {
    color: #def5f2;
    padding: 40px 80px;
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    justify-items: center;
  }
  .header-child > .header-child-text {
    margin: 0px 10px;
  }
  .header-child-item {
    margin: 0;
    padding: 0;
  }
  .header-child-item .header-child-image img {
    width: 500px;
  }
  .header-child-title {
    font-size: 48px;
    font-weight: bold;
    line-height: 58px;
  }
  .header-child-details {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 33px;
    margin: 30px 0px;
  }
}

@media all and (min-width: 768px) and (max-width: 1024px) {
}

@media all and (min-width: 480px) and (max-width: 768px) {
}

@media all and (max-width: 480px) {
}
/* min-width 1025px, large screens */
</style>
