<template>
  <div class="section my-5">
    <div
      class="title text-center grey-text col-lg-6 col-md-6 col-xs-12 mx-auto"
    ></div>
    <div class="row align-center justify-center">
      <div class="col-lg-5 col-xs-12 col-sd-12 col-sm-12 col-ml-5">
        <h3 class="display-2">
          O <strong class="text-primary">mix</strong> vai turbinar a suas vendas
          <strong class="text-primary"></strong>
        </h3>
        <div ref="accordion">
          <Accordion :contents="contents" />
        </div>
      </div>
      <div
        class="col-lg-6 col-md-5 col-xs-12 col-sd-12 col-sm-12 header-child-item"
      >
        <div>
          <img
            width="80%"
            :src="require('~/assets/images/feature/image-app.svg')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '../Accordion/Accordion.vue'
export default {
  components: { Accordion },
  data() {
    return {
      contents: [
        {
          title: 'Cardápio digital',
          description:
            'O cliente faz o pedido direto de um cardápio em tablet, totem de autoatendimento ou no próprio celular.',
          active: false,
        },
        {
          title: 'Escolha de opcionais',
          description:
            'Seleciona rapidamente os opcionais e adicionais os que desejar.',
          active: false,
        },
        {
          title: 'Enviamos para a cozinha',
          description:
            'O pedido é enviado para uma tela de pedidos ou direto para o sistema de gestão (PDV).',
          active: false,
        },
        {
          title: 'Receba seu pedido',
          description:
            'O pedido é entregue ao cliente com muito mais agilidade e economia de funcionários.',
          active: false,
        },
      ],
    }
  },
  methods: {
    openAccordion() {
      console.log(this.$refs)
      var acc = this.$refs.accordion
      console.log(this.$refs.accordion)
      var i
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
          this.classList.toggle('active')
          var panel = this.nextElementSibling
          if (panel.style.display === 'block') {
            panel.style.display = 'none'
          } else {
            panel.style.display = 'block'
          }
        })
      }
    },
  },
}
</script>

<style></style>
