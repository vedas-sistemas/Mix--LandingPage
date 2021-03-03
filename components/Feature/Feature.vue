<template>
  <div class="page-section my-5">
    <div class="text-center my-5 col-lg-6 col-md-6 col-xs-12 mx-auto">
      <h3 class="display-3">
        Veja como é molezinha o cliente fazer o pedido na sua
        <strong class="text-primary">loja mix:</strong>
      </h3>
    </div>
    <div class="row justify-center">
      <a
        v-for="(item, index) in icons"
        :key="index"
        href="#"
        class="card mx-2 pa-5 col-lg-2 col-md-2 col-sm-12 col-xs-6 text-center"
      >
        <div class="pa-2 py-3">
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
  padding: 20px;
  border-radius: 40px;
  border: 1px solid #eff2f6;
  text-decoration: none;
}

.title-contrast {
  font-weight: bold;
  color: #6628ea;
}

.headline .text-two {
  color: #6628ea;
}
.headline .text-one {
  color: #6b6b6b;
}
</style>
