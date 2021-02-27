<template>
  <div class="test-section">
    <div class="row align-center justify-center">
      <div class="content col-lg-5 col-xs-12 col-sd-12 col-sm-12 col-md-5">
        <div class="title grey-text">
          <h4>Comece agora <strong>gratuitamente</strong></h4>
        </div>
        <div class="description">
          <span
            >Cadastre seus produtos, horários de funcionamento, formas de
            pagamento, consulte avaliações de seus clientes, personalize sua
            loja, insira os valores de entrega, consulte relatórios analíticos
          </span>
        </div>
        <div class="col-lg-6">
          <button class="btn btn-primary" href="#">Vamos lá!</button>
        </div>
      </div>
      <div
        class="image-animate col-lg-4 col-md-5 col-xs-12 col-sd-12 col-sm-12"
      >
        <img :src="gifDelivery" />
      </div>
    </div>
  </div>
</template>

<script>
import animation from '@/assets/index.js'

export default {
  data() {
    return {
      gifDelivery: animation.animations[0].image,
    }
  },
}
</script>

<style lang="scss">
.test-section {
  background-color: #ffffff;
  background-repeat: no-repeat;
  padding: 20px 0px;
  .image-animate {
    object-fit: cover;
  }
  .image-animate img {
    max-width: 500px;
  }
  strong {
    color: #0b10fd;
  }
  .content {
    text-align: left;
    margin: 0px 0px;
  }
}
</style>
