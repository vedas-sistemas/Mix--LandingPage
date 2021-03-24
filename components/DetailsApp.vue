<template>
  <div
    id="about"
    class="row col-xs-12 align-center align-content-center col-md-10 col-lg-10 col-xl-8 mx-auto"
  >
    <div class="row justify-center">
      <div class="col-lg-10 my-5 col-md-12 col-sd-12 col-xs-12">
        <h3
          class="display-3 display-2 display-4 display-5 display-1 text-center text-light"
        >
          Veja por que o <strong class="text-info">mix</strong> é a solução
          certa para o seu negócio
        </h3>
        <div class="text-light text-center">
          <p>
            No mix você tem as ferramentas do dia a dia com a comodidade e
            simplicidade do digital.
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-center py-5">
      <div class="col-md-3 col-xs-12 my-2" v-for="(item, index) in contents">
        <div class="card card-hover hover-feature">
          <div class="pa-5">
            <div>
              <img :src="item.icon" />
            </div>
            <div>
              <div class="font-weight-bold">
                <span v-text="item.title"></span>
              </div>
              <div class="">
                <span v-text="item.description"></span>
              </div>
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
            'Cadastre produtos e complementos e organize sua operação.',
          active: false,
        },
        {
          title: 'Destaques',
          icon: require('@/assets/images/feature/price-label.svg'),
          description:
            'Venda mais! Destaque itens do cardápio em uma aba de promoções',
          active: false,
        },
        {
          title: 'WhatsApp',
          icon: require('@/assets/images/feature/whatsapp.svg'),
          description:
            'O  mix envia o status do pedido para o WhatsApp do seu cliente.',
          active: false,
        },
        {
          title: 'Campanhas',
          icon: require('@/assets/images/feature/smartphone.svg'),
          description:
            'Comunique-se com seus clientes através de mensagens no WhatsApp',
          active: false,
        },
        {
          title: 'Fidelidade',
          icon: require('@/assets/images/feature/smartphone.svg'),
          description:
            'Recompense os seus clientes mais fiéis no programa fidelidade.',
          active: false,
        },
        {
          title: 'Promoções',
          icon: require('@/assets/images/feature/smartphone.svg'),
          description:
            'Atraia mais clientes, ninguém resiste a uma boa promoção.',
          active: false,
        },
        {
          title: 'Influencer',
          icon: require('@/assets/images/feature/smartphone.svg'),
          description:
            'Alcance mais pessoas repassando comissões para influencers.',
          active: false,
        },
        {
          title: 'Cupom',
          icon: require('@/assets/images/feature/smartphone.svg'),
          description:
            'Conquiste e resgate clientes com cupons de desconto personalizados.',
          active: false,
        },
      ],
    }
  },
}
</script>

<style></style>
