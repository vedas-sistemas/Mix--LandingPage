<template>
  <div
    class="row align-center align-content-center section col-md-10 col-lg-10 mx-auto"
  >
    <div class="text-center col-lg-6 col-md-8 col-xs-12 mx-auto">
      <h3 class="display-3 my-5">
        Veja como é molezinha o cliente fazer o pedido na sua
        <strong class="text-primary">loja mix:</strong>
      </h3>
    </div>
    <div class="row justify-center align-center">
      <div
        v-for="(item, index) in icons"
        :key="index"
        href="#"
        class="col-lg-3 col-md-3 col-sm-12 col-xs-6 text-center"
      >
        <div class="card card-hover pa-4">
          <div class="page-section-image">
            <img :src="item.icon" />
          </div>
          <div class="headline">
            <div>
              <span class="text-one" v-text="item.text1"></span>
            </div>
            <div>
              <span class="text-primary" v-text="item.text2"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          text1: 'Acessa o link:',
          text2: 'suaempresa.com.br',
          icon: require('~/assets/images/feature/cart.svg'),
        },
        {
          text1: 'Seleciona',
          text2: 'os produtos',
          icon: require('~/assets/images/feature/checklist.svg'),
        },
        {
          text1: 'Escolhe como',
          text2: 'pagar',
          icon: require('~/assets/images/feature/wallet.svg'),
        },
        {
          text1: 'Recebe o produto',
          text2: 'em casa',

          icon: require('~/assets/images/feature/shopping-bag.svg'),
        },
      ],
    }
  },
}
</script>

<style>
.page-section-image img {
  max-width: 150px;
}
.item-section {
  margin: 10px 20px;
  padding: 20px;
  border-radius: 40px;
  border: 1px solid #eff2f6;
  text-decoration: none;
}

.headline .text-two {
  color: #6628ea;
}
.headline .text-one {
  color: #6b6b6b;
}
</style>
