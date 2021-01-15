<template>
  <div class="page-section my-5">
    <div class="title text-center mb-2 grey-text col-md-8 col-xs-12 mx-auto">
      <h3>
        Veja como é molezinha o cliente fazer o pedido na sua
        <strong class="title-contrast">loja online:</strong>
      </h3>
    </div>
    <div class="row justify-center">
      <a
        v-for="(item, index) in icons"
        :key="index"
        href="#"
        class="item-section col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center"
      >
        <div class="page-section-image">
          <img :src="item.icon" />
        </div>
        <div class="headline">
          <h4 class="text-one" v-text="item.text1"></h4>
          <h4 class="text-two" v-text="item.text2"></h4>
        </div>
      </a>
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
.row a:hover {
  background: #dedbfc;
  -webkit-box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
  color: #6b6b6b, 100%;
}

.page-section-image img {
  max-width: 150px;
}
.item-section {
  margin: 10px 20px;
  padding: 30px;
  border-radius: 40px;
  border: 1px solid #eff2f6;
  text-decoration: none;
}

.title-contrast {
  font-weight: bold;
  color: #4d04ea;
}
.headline {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.headline .text-two {
  color: #4d04ea;
}
.headline .text-one {
  color: #6b6b6b;
}
</style>
