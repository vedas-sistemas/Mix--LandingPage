<template>
  <div class="d-flex collunm align-center">
    <div class="px-3 pt-3">
      <div class="logo-form">
        <img width="100" height="50px" :src="logo" />
      </div>
      <div class="display-4">Informações sobre a empresa</div>
      <div class="text">Agora precisamos do endereço seu negócio</div>
      <form @submit.prevent="getAddressByString" class="form my-5">
        <div class="row d-flex">
          <div class="col-md-8 px-0">
            <div class="group">
              <input v-model="address.street" type="text" required />
              <label>Rua</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="group">
              <input v-model="address.number" type="number" required />
              <label>Número</label>
            </div>
          </div>
        </div>

        <div class="group">
          <input v-model="address.district" type="text" required />
          <label>Bairro</label>
        </div>
        <div class="group">
          <input v-model="address.city" type="text" required />
          <label>Cidade</label>
        </div>
        <div class="group">
          <input v-model="address.state" type="text" required />
          <label>Estado</label>
        </div>
        <button class="btn btn-primary">Confirmar dados</button>
      </form>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/index.js'
import { characterRemove } from '@/mixins/global.js'

export default {
  data() {
    return {
      firstImage: require('~/assets/images/register/image-1.png'),
      logo: logo.logo,
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
          method: '$post',
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
          this.$root.$emit('slide-next')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
