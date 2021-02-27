<template>
  <div class="d-flex collunm align-center">
    <div class="px-3 pt-3">
      <div class="logo-form my-3">
        <img :src="logo" />
      </div>
      <div class="display-1">Informações Pessoais</div>
      <div class="text">
        Para começar precisamos dos dados pessoais do proprietário ou
        responsável
      </div>
      <form @submit.prevent="verifyEmail" class="form my-5">
        <div class="group">
          <input v-model="name" type="text" required />
          <label for="name">Nome completo</label>
        </div>
        <div :class="error_mail ? 'error' : 'group'">
          <input v-model="email" type="text" class="error" required />
          <label for="email">Email</label>
          <small class="text-danger" v-text="error_mail"></small>
        </div>
        <div :class="error_phone ? 'error' : 'group'">
          <input
            v-mask="['(##) ####-####', '(##) #####-####']"
            type="text"
            v-model="tel"
            required
          />
          <label for="name">Telefone</label>
          <small class="text-danger" v-text="error_phone"></small>
        </div>
        <div class="group">
          <input
            v-mask="'##/##/####'"
            v-model="birthday"
            type="text"
            required
          />
          <label for="name">Data de nascimento</label>
        </div>
        <button class="btn btn-primary">Continuar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/mixins/global.js'
import { mask } from 'vue-the-mask'
import { required, email } from 'vuelidate/lib/validators'
import logo from '@/assets/index.js'
import { errorMessage } from '../../mixins/global'

export default {
  directives: { mask },
  data() {
    return {
      logo: logo.logo,
      name: 'Jhonatan',
      email: 'Fiscal@j.com',
      tel: '66999378204',
      birthday: '05/12/2000',
      error_phone: null,
      error_mail: null,
      firstImage: require('~/assets/images/register/image-1.png'),
    }
  },
  validations: {
    name: { required },
    email: { required, email },
    tel: { required },
    birthday: { required },
  },
  computed: {
    error() {
      let error = false
      if (this.$store.state.error) {
        error = this.$store.state.error
      }
      return error
    },
  },
  methods: {
    verifyEmail() {
      if (validateEmail(this.email)) {
        this.$store
          .dispatch('request', {
            data: {
              name: this.name,
              email: this.email,
              phone: this.tel,
              birthday: this.birthday,
            },
            url: '/verify-email-phone',
            method: '$post',
            state: 'user',
          })
          .then(() => {
            this.$store.commit('setState', ['slide', 1])
            this.$store.commit('setState', [
              'user',
              {
                name: this.name,
                email: this.email,
                phone: this.tel,
                birthday: this.birthday,
              },
            ])
            this.$router.push('cadastrar/empresa')
          })
          .catch((err) => {
            const error = errorMessage(err)
            if (error.indexOf('e-mail') >= 0) {
              this.error_mail = error
            } else {
              this.error_phone = error
            }
          })
      } else {
        this.error_mail = 'E-mail inválido'
      }
    },
  },
}
</script>

<style></style>
