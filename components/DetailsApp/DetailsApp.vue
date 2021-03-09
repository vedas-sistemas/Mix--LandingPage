<template>
  <div
    id="about"
    class="row align-center align-content-center section col-ml-12 col-lg-10 col-xl-8 mx-auto"
  >
    <div class="row justify-center">
      <div class="col-lg-6 col-md-6">
        <h3 class="display-3 text-center my-5 text-light">
          Veja por que o <strong class="text-info">mix</strong> é a solução
          certa para o seu negócio
          <strong class="text-primary"></strong>
        </h3>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-md-5 col-lg-6" v-for="(item, index) in contents">
        <div class="pa-5 row align-center justify-center">
          <div class="icon col-md-3 col-lg-3">
            <img height="100%" :src="item.icon" />
          </div>
          <div class="content col-md-9">
            <div class="text-light headline">
              <span v-text="item.title"></span>
            </div>
            <div class="text-light">
              <span v-text="item.description"></span>
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
      contents: [
        {
          title: 'Cardápio digital',
          icon: require('@/assets/images/feature/wireframe.svg'),
          description:
            'O cliente faz o pedido direto de um cardápio em tablet, totem de autoatendimento ou no próprio celular.',
          active: false,
        },
        {
          title: 'Crie promoções e cupons',
          icon: require('@/assets/images/feature/price-label.svg'),
          description:
            'Destaque itens do cardápio em uma aba de promoções, crie cortesias e vouchers de desconto.',
          active: false,
        },
        {
          title: 'Pedidos do WhatsApp',
          icon: require('@/assets/images/feature/whatsapp.svg'),
          description:
            'Recebimento de pedidos no WhatsApp. O  mix envia o status do pedido diretamente para o WhatsApp do seu cliente.',
          active: false,
        },
        {
          title: 'Divulgação Automática',
          icon: require('@/assets/images/feature/smartphone.svg'),
          description:
            'Configure campanhas para serem enviadas via WhatsApp para seus clientes da sua loja.',
          active: false,
        },
      ],
    }
  },
}
</script>

<style></style>
