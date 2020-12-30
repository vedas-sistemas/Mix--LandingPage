<template>
  <div class="page-section">
    <div class="title">
      <h3>
        Veja como é molezinha o cliente fazer o pedido na sua
        <strong class="title-contrast">loja online:</strong>
      </h3>
    </div>
    <div class="page-section-items">
      <a
        v-for="(item, index) in icons"
        :key="index"
        href="#"
        class="item-section"
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
.page-section {
  padding: 100px 0px;
}
.page-section-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 2;
  margin: 50px 30px;
}
.page-section-items a:hover {
  background: #dedbfc;
  -webkit-box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
  color: #6b6b6b, 100%;
}

.page-section-image img {
  max-width: 150px;
}
.item-section {
  margin: 15px 20px;
  padding: 40px;
  border-radius: 40px;
  border: 1px solid #eff2f6;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  text-align: center;
  font-style: normal;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: #6b6b6b;
  max-width: 605px;
  margin: 0 auto;
}
.title-contrast {
  font-weight: bold;
  color: #d2448d;
}
.headline {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}
.headline .text-two {
  color: #d2448d;
}
.headline .text-one {
  color: #6b6b6b;
}
</style>
