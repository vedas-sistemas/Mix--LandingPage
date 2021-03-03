<template>
  <div class="section">
    <div class="row align-center justify-center space-around">
      <div class="col-lg-6 col-xs-12 col-sd-12 col-sm-12 col-ml-5">
        <div>
          <div>
            <span class="display-2">
              Uma plataforma de <strong>delivery completa</strong> para seu o
              seu negócio
            </span>
          </div>
          <div class="my-2">
            <p>
              seu cliente não precisa instalar nada. Aumente suas vendas e
              economize com aplicativos marketplaces.
            </p>
          </div>
          <div class="col-ml-5 col-lg-6 my-5 px-0">
            <button href="#" class="btn btn-primary">Quero ser parceiro</button>
          </div>
        </div>
      </div>
      <div
        class="col-lg-6 col-md-5 col-xs-12 col-sd-12 col-sm-12 header-child-item"
      >
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
