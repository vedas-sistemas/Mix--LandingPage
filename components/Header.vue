<template>
  <div class="section">
    <div class="row align-center justify-center space-around">
      <div class="col-lg-5 col-sm-6 col-xs-12 col-sd-10 col-md-6">
        <div>
          <span class="display-2 display-4 display-3 display-1">
            Uma plataforma de <strong>delivery completa</strong> para seu o seu
            negócio
          </span>
        </div>
        <div class="my-2">
          <p>
            seu cliente não precisa instalar nada. Aumente suas vendas e
            economize com aplicativos marketplaces.
          </p>
        </div>
        <div class="col-md-6 col-lg-6 px-0">
          <button href="#" class="btn btn-primary">Quero ser parceiro</button>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 col-md-5 col-xs-12 col-sd-10">
        <div class="my-5">
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

<style></style>
