<template>
  <div class="col-md-12 my-5 col-lg-12 mx-auto">
    <div class="col-md-8 mx-auto text-center my-5">
      <span class="display-3"
        >O painel do mix é perfeito! Sendo o ideal para ajudar o seu delivery
        crescer🚀.
      </span>
    </div>
    <tabs
      class="col-lg-5 col-sm-6 col-xs-12 col-sd-10 col-md-8"
      :tabs="tabs"
      :currentTab="currentTab"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <div class="row align-center justify-center">
          <div
            v-for="(item, index) in functional"
            :key="index"
            class="col-lg-6 my-5 col-sm-6 col-md-3 col-xs-12 col-sd-10"
          >
            <img :src="item.image" />

            <div class="text-left">
              <div class="display-4">
                <span v-text="item.title">
                  Dashboard com autodiagnóstico da sua operação
                </span>
              </div>
            </div>
            <a
              href="https://admin.mixentregas.com.br"
              class="btn btn-secondary my-3"
            >
              <span
                >Ver apresentação <span class="mdi mdi-arrow-right"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab2'">
        <div class="row col-md-10 mx-auto align-center justify-center">
          <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-sd-10">
            <div class="my-5">
              <img :src="require('@/assets/images/feature/fidelity.png')" />
            </div>
          </div>
          <div class="col-lg-5 col-sm-6 col-xs-12 col-sd-10 col-md-5 pa-5">
            <div>
              <span class="display-3">
                Com o mix você cria seu programa de fidelidade
              </span>
            </div>
            <div class="my-2">
              <p>
                Fidelização é a chave para o sucesso: Seu restaurante contará
                com programa de fidelidade, envio promoções e cupons por de
                descontos via WhatsApp.
              </p>
            </div>
            <div class="col-md-10">
              <a
                href="https://admin.mixentregas.com.br"
                class="btn mx-0 btn-secondary my-3"
              >
                <span
                  >Ver apresentação <span class="mdi mdi-arrow-right"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab3'">
        <div class="row col-md-10 mx-auto align-center justify-center">
          <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-sd-10">
            <div class="my-5">
              <img :src="require('@/assets/images/feature/fidelity.png')" />
            </div>
          </div>
          <div class="col-lg-5 col-sm-6 col-xs-12 col-sd-10 col-md-5 pa-5">
            <div>
              <span class="display-3">
                Cadastre produtos com complementos e adicionais
              </span>
            </div>
            <div class="my-2">
              <p>
                Você permite que o cliente escolha acompanhamentos com (ou sem)
                valor adicional? Sem problemas! Nossa plataforma de delivery é
                bem customizável para comportar todos os itens do seu cardápio.
              </p>
            </div>
            <div class="col-md-10">
              <a
                href="https://admin.mixentregas.com.br"
                class="btn mx-0 btn-secondary my-3"
              >
                <span
                  >Ver apresentação <span class="mdi mdi-arrow-right"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from 'vue-tabs-with-active-line'
export default {
  components: {
    Tabs,
  },
  data: () => ({
    tabs: [
      { title: 'Gestão simples', value: 'tab1' },
      { title: 'Clientes satisfeitos', value: 'tab2' },
      { title: 'Opções Personalizados', value: 'tab3' },
    ],
    currentTab: 'tab1',
    functional: [
      {
        title: 'Dashboard com autodiagnóstico da sua operação ',
        image: require('@/assets/images/feature/admin-2.png'),
      },
      {
        title: 'Comunique-se diretamente com seus clientes via WhatsApp',
        image: require('@/assets/images/feature/admin-3.png'),
      },
      {
        title: 'Receba pedidos para entrega ou retirada no local.',
        image: require('@/assets/images/feature/admin.png'),
      },
    ],
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab
    },
  },
}
</script>
