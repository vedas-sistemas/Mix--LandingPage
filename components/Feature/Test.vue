<template>
  <div class="test-section">
    <div class="row align-center justify-center">
      <div class="content col-lg-6 col-xs-12 col-sd-12 col-sm-12 col-md-5">
        <div class="title">
          <span
            >Comece agora mesmo com um
            <strong>teste grátis</strong>
          </span>
        </div>
        <div class="description">
          <span
            >Cadastre seus produtos, horários de funcionamento, formas de
            pagamento, consulte avaliações de seus clientes, personalize sua
            loja, insira os valores de entrega, consulte relatórios analíticos
          </span>
        </div>
        <div class="btn col-lg-6">
          <a href="#">Começar agora</a>
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
    color: #4d04ea;
  }
  .content {
    text-align: left;
    padding: 20px;
    margin: 20px 0px;
    .btn a {
      text-align: center;
      text-decoration: none;
      background: #f7bd00;
      color: #fff;
      box-shadow: none;
      border-radius: 8px;
      font-size: 22px;
      font-weight: 800;
      padding: 20px 32px;
    }
    .title {
      text-align: left;
      font-style: normal;
      font-size: 48px;
      line-height: 58px;
    }
    .description {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      color: f7bd00;
      margin: 40px 0px;
    }
  }
}
</style>
