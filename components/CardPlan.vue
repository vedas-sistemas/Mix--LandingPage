<template>
  <div id="pricing" class="py-5 my-5">
    <div class="title text-center grey-text">
      <span class="display-3">Flexível e poderoso</span>
    </div>
    <div class="subtitle my-3 col-xs-12 col-md-6 col-sm-12 mx-auto text-center">
      <p>
        O suficiente para administrar seus negócios e permanecer dentro do seu
        orçamento. Escolha um de nossos planos e debute imediatamente
      </p>
    </div>
    <div class="row justify-center col-md-12 col-xs-12 col-sm-12">
      <div
        v-for="(item, index) in plans"
        :key="index"
        class="card my-5 card-hover mx-2 col-xs-12 col-lg-3 col-md-3"
      >
        <div class="card-image">
          <img :src="item.image" />
        </div>
        <div class="card-body">
          <div class="text-primary text-center">
            <h5 class="font-weight-bold" v-text="item.title"></h5>
          </div>
          <div class="card-subtitle" v-text="item.description">
            07% sobre as vendas
          </div>
          <div class="card-text">
            <ul class="list">
              <li
                class="list-item row"
                v-for="(value, index) in item.stack"
                :key="index"
              >
                <div>
                  <span class="mdi mdi-check"></span>
                  <span v-text="value"> </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="my-3 px-3 text-center">
          <button class="btn btn-lg btn-primary" v-text="item.button"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardContrast: true,
      plans: [
        {
          title: 'Plano Iniciante',
          description: 'Sem mensalidade',
          price: 'R$ 0,00',
          button: 'Comece grátis',
          image: require('@/assets/images/plans/light.svg'),
          stack: [
            '200 pedidos mensais',
            'Produtos ilimitados',
            'Limite $2000,00 em vendas',
            '1 promoção ativa',
          ],
        },
        {
          title: 'Plano Turbo',
          description: 'Sem mensalidade',
          price: 'R$ 0,00',
          button: 'Turbinar vendas',
          image: require('@/assets/images/plans/lighting.svg'),
          stack: [
            '500 pedidos mensais',
            'Produtos ilimitados',
            'Limite $8000,00 em vendas',
            '5 promoções ativa',
          ],
        },
        {
          title: 'Plano Comercial',
          description: 'Sem mensalidade',
          price: 'R$ 0,00',
          button: 'Comece agora',
          image: require('@/assets/images/plans/message.svg'),
          stack: [
            'Pedidos ilimitados',
            'Produtos ilimitados',
            'Sem Limite de vendas',
            'Crie promoções ilimitadas',
          ],
        },
      ],
    }
  },
}
</script>

<style>
.plan-section .description {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 39px;
  text-align: center;
  max-width: 800px;
  color: #6b6b6b;
  margin: 10px auto;
}
</style>
