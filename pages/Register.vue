<template>
  <div class="register">
    <div class="form">
      <div class="title">
        <span>mix | delivery agora</span>
      </div>

      <div class="subtitle">Informações Pessoais</div>
      <div class="text">
        Para começar precisamos dos dados pessoais do proprietário ou
        responsável
      </div>

      <form class="register-form">
        <label for="name"> Digite seu nome </label>
        <input class="input-register" name="name" type="text" />

        <label for="email"> Digite seu e-mail </label>
        <input class="input-register" name="email" type="email" />

        <label for="tel"> Digite seu telefone </label>
        <input class="input-register" name="tel" type="tel" />

        <button
          id="button-next-register"
          class="button-next-register"
          @click.prevent="next"
        >
          Próxima etapa
        </button>
      </form>
    </div>
    <div class="info-container">
      <div class="info-content">
        <div class="info-title">Impulsione seus negócios com o Mix</div>
        <div class="info-text">
          O Delivery App foi pensado exclusivamente para que o delivery do seu
          estabelecimento cresça, gerando mais vendas e economia.
        </div>
        <div class="image-regist">
          <img :src="firstImage" alt="image-register" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstImage: require('~/assets/images/register/first.svg'),
    }
  },
  methods: {
    next() {
      console.log('next')
    },
  },
}
</script>

<style>
* {
  font-family: 'Monda', sans-serif;
  margin: 0;
  padding: 0;
}

.register {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  height: 100vh;
}

.form {
  width: 70%;
}

.text {
  font-size: 16px;
  margin: 15px 0;
  width: 85%;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.input-register {
  border-radius: 5px;
  border: 1px solid #cad9fc;
  height: 44px;
  margin-bottom: 16px;
  width: 80%;
  font-size: 18px;
  padding: 0 10px;
}

.input-register:focus {
  outline: none !important;
  border: 2px solid #428dff !important;
}

.button-next-register {
  margin-top: 20px;
  width: 80%;
  height: 50px;
  background: #6628ea;
  border-radius: 38.5px;
  border: none;
  color: #d7e9ff;
  font-size: 16px;
  outline: none;
}

.button-next-register:hover {
  border: 2px solid #428dff !important;
  cursor: pointer;
}

.button-next-register:active {
  background: #4312ad;
}

.info-container {
  background: #6628ea;
  width: 100%;
  padding-top: 60px;
  color: #d7e9ff;
  display: flex;
  justify-content: center;
}

.info-content {
  width: 70%;
}

.info-title {
  font-size: 24px;
  width: 70%;
}

.info-text {
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 18px;
}
</style>
