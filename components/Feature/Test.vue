<template>
  <div class="test-section">
    <div class="row align-center justify-center">
      <div class="content col-lg-5 col-xs-12 col-sd-12 col-sm-12 col-md-5">
        <div class="title grey-text">
          <h3>Comece agora <strong>gratuitamente</strong></h3>
        </div>
        <div class="description">
          <span
            >Cadastre seus produtos, horários de funcionamento, formas de
            pagamento, consulte avaliações de seus clientes, personalize sua
            loja, insira os valores de entrega, consulte relatórios analíticos
          </span>
        </div>
        <div class="btn">
          <a href="#">Vamos lá!</a>
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
    .btn a {
      text-align: center;
      text-decoration: none;
      background: #0b10fd;
      color: #fff;
      box-shadow: none;
      border-radius: 8px;
      font-size: 16px;
      width: 100%;
      font-weight: 800;
      padding: 18px 42px;
    }

    .description {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      margin: 40px 0px;
    }
  }
}
</style>
