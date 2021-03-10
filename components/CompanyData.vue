<template>
  <div class="d-flex collunm align-center">
    <div class="px-3 pt-3">
      <div class="logo-form my-3">
        <img width="100" height="50px" :src="logo" />
      </div>
      <div class="display-4">Informações sobre a empresa</div>
      <div class="text">Agora precisamos das informações sobre seu negócio</div>
      <form @submit.prevent="setCompany" class="form my-5">
        <div class="group">
          <input v-model="company_name" type="text" required />
          <label for="name">Razão Social</label>
        </div>
        <div :class="error ? 'error' : 'group'">
          <input
            v-mask="'##.###.###/####-##'"
            v-model="document"
            type="text"
            required
          />
          <label for="name">CNPJ</label>
          <small
            class="text-danger"
            v-text="error ? 'CNPJ inválido' : ''"
          ></small>
        </div>
        <div class="group">
          <input type="number" v-model="state_registration" required />
          <label for="name">Inscrição Estadual</label>
        </div>
        <button class="btn btn-primary">Continuar</button>
      </form>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/index.js'
import { validateCNPJ } from '@/mixins/global.js'
import { mask } from 'vue-the-mask'
import { required } from 'vuelidate/lib/validators'

export default {
  directives: { mask },

  data() {
    return {
      next: false,
      logo: logo.logo,
      company_name: 'Massa e Cia',
      document: '06151942000157',
      state_registration: '6110241427',
      error: false,
      firstImage: require('~/assets/images/register/image-1.png'),
    }
  },
  validations: {
    document: { required },
    state_registration: { required },
    company_name: { required },
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    setCompany() {
      if (validateCNPJ(this.document)) {
        const user = {
          ...this.user,
          company_name: this.company_name,
          document: this.document,
          state_registration: this.state_registration,
        }
        this.$root.$emit('slide-next')
        this.$store.commit('setState', ['user', user])
        this.$router.push('/cadastrar/endereco')
        this.error = false
      } else {
        this.error = true
      }
    },
  },
}
</script>

<style></style>
