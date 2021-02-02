<template>
  <div class="section py-5">
    <div class="title text-center grey-text">
      <h3>Flexivel e poderoso</h3>
    </div>
    <div class="subtitle my-3 col-xs-12 col-md-6 col-sm-12 mx-auto text-center">
      <span
        >O suficiente para administrar seus negócios e permanecer dentro do seu
        orçamento. Escolha um de nossos planos e debute imediatamente</span
      >
    </div>
    <div class="row justify-center col-md-12 col-xs-12 col-sm-12">
      <div
        v-for="(item, index) in plans"
        :key="index"
        class="card col-xs-12 col-lg-3 col-md-3"
        :class="index === 1 ? 'card-contrast' : ''"
      >
        <div class="card-image">
          <img :src="item.image" />
        </div>
        <div class="card-body">
          <div class="card-title" v-text="item.title"></div>
          <div class="card-subtitle" v-text="item.description">
            07% sobre as vendas
          </div>
          <div class="card-text">
            <ul class="list">
              <li class="list-item row" v-for="value in item.stack" :key="item">
                <div>
                  <span class="mdi mdi-check"></span>
                  <span v-text="value"> </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-btn my-3 text-center">
          <a href="#" v-text="item.button"></a>
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

.card {
  margin: 15px 0px;
  padding: 30px;
  border: 1px solid #eff2f6;
  text-decoration: none;
  background: #ffffff;
  transition: all 0.35s ease;
  flex-shrink: 0;
  flex-grow: 1;
  border-radius: 20px 20px;
  margin: 0 10px;
}

.card-body {
  margin: 20px 0px;
}
.card .card-body .card-subtitle {
  font-size: 15px;
  line-height: 26px;
  color: #6b6b6b;
  text-align: center;
}
.card .card-text .mdi {
  font-size: 20px;
  padding: 0px 10px;
}
.card .card-body .card-text {
  line-height: 20px;
  color: #6b6b6b;
  text-align: center;
  margin: 30px 0px;
}
.card ul li {
  list-style: none;
}
.card img {
  width: 90px;
}
.card .card-link {
  text-decoration: none;
  text-align: center;
}
.card .card-btn a {
  text-align: center;
  text-decoration: none;
  background: #0b10fd;
  color: #fff;
  box-shadow: none;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  display: block;
  font-weight: 800;
  padding: 18px 42px;
}
.card-btn {
  margin: 15px 0px;
}

.card-title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #0b10fd;
  text-align: center;
}
.list .list-item {
  font-size: 15px;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 15px 0px;
}
.card-contrast {
  border: 0;
  background: linear-gradient(-45deg, #4144e8 20%, #9300dc 70%);
}
.card-contrast .card-body .card-subtitle {
  font-size: 16px;
  line-height: 26px;
  color: #ffff;
  text-align: center;
}
.card-contrast .card-title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #ffff;
  text-align: center;
}
.card-contrast .card-btn a {
  text-align: center;
  text-decoration: none;
  background: #fff;
  color: #0b10fd;
  box-shadow: black;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 800;
  padding: 15px 52px;
  width: 100%;
}
.card-contrast .card-body .card-text {
  line-height: 20px;
  color: #ffff;
  text-align: center;
}
.card-contrast .card-link {
  text-decoration: none;
  color: #0b10fd;
}
.card-footer {
  padding: 20px 0px;
}
.card-image {
  margin: 0 auto;
  width: 90px;
}
</style>
