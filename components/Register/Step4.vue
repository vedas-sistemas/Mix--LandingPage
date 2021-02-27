<template>
  <div class="pa-5 row align-center">
    <div class="logo-form">
      <img width="100" height="50px" :src="logo" />
    </div>
    <div class="display-1">Escolha um plano</div>
    <div class="text">Para finalizar escolha um de nossos planos:</div>
    <div
      v-for="(item, index) in plans"
      :key="index"
      class="card-hover card pa-2 my-2"
      :class="select_id === item.id ? 'selected-plan' : ''"
      @click="setPlan(item)"
    >
      <div class="row align-center">
        <div class="col-ml-3">
          <img width="40px" :src="item.image" />
        </div>
        <div class="col-ml-6">
          <div class="text-left">
            <span v-text="item.title">Plano inciante</span>
          </div>
          <div class="card-subtitle" v-text="item.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/index.js'
import { characterRemove } from '@/mixins/global.js'

export default {
  mounted() {},
  data() {
    return {
      logo: logo.logo,
      select_id: 2,
      address: {
        title: 'Minha Empresa',
        state: 'Mato Grosso',
        city: 'Sinop',
        district: 'Setor Comercial',
        street: 'Rua amendoeiras',
        number: '49',
        cep: '',
        country: 'Brasil',
        complement: 'm',
      },
      plans: [
        {
          id: 1,
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
          id: 2,
          title: 'Plano Turbo',
          description: 'R$ 150,00 mensal',
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
          id: 3,
          title: 'Plano Comercial',
          description: '7% das vendas pela plataforma',
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
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    getAddressByString() {
      this.loading = true
      this.$store
        .dispatch('request', {
          method: 'post',
          url: '/coord-address',
          data: {
            address: `${characterRemove(this.address.street)}, ${
              this.address.number
            },${characterRemove(this.address.district)}`,
          },
        })
        .then((resp) => {
          const user = {
            ...this.user,
            address: resp,
            user_cpanel: true,
            adm: 'S',
          }
          this.$store.commit('setState', ['user', user])
          this.$router.push('/cadastrar/plano')
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setPlan(item) {
      this.$store.commit('setState', ['planSelected', item])
      this.select_id = item.id
    },
  },
}
</script>

<style>
.display-flex {
  width: 50px;
}
.plan-details {
  background-color: #6628ea;
  color: white;
}
</style>
