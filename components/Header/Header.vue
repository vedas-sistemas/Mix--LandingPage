<template>
  <div class="section banner">
    <div class="row header-container align-center justify-center space-around">
      <div class="col-lg-6 col-xs-12 col-sd-12 col-sm-12 col-md-6">
        <div class="header-child-text">
          <div class="title white-text">
            <h3>Uma plataforma de delivery completa para seu o seu negócio</h3>
          </div>
          <div class="header-child-details">
            <p>
              seu cliente não precisa instalar nada. Aumente suas vendas e
              economize com aplicativos marketplaces.
            </p>
          </div>
          <div class="header-child-btn col-lg-8">
            <a href="#">Quero ser parceiro</a>
          </div>
        </div>
      </div>
      <div
        class="col-lg-6 col-md-5 col-xs-12 col-sd-12 col-sm-12 header-child-item"
      >
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
.header-child-btn a {
  text-align: center;
  text-decoration: none;
  background: #f7bd00;
  color: #4d04ea;
  box-shadow: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 800;
  padding: 18px 30px;
}

.header-child-btn a:hover {
  color: #def5f2;
  background-color: #fac720 !important;
}
.header-container {
  color: #def5f2;
  padding: 10px 0px;
}
.header-child > .header-child-text {
  margin: 0px 10px;
}
.header-child-item {
  margin: 0;
  padding: 0;
}
.header-child-image {
  padding: 30px;
}
.header-child-details {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
  margin: 30px 0px;
}
</style>
