<template>
  <div class="pa-5">
    <div class="title">
      <span>mix | delivery agora</span>
    </div>
    <div class="subtitle">Informações Pessoais</div>
    <div class="text">
      Para começar precisamos dos dados pessoais do proprietário ou responsável
    </div>
    <form class="row">
      <label for="name"> Digite seu nome </label>
      <input class="input-register" name="name" type="text" />
      <label for="email"> Digite seu e-mail </label>
      <input class="input-register" name="email" type="email" />
      <label for="tel"> Digite seu telefone </label>
      <input class="input-register" name="tel" type="tel" />
      <label for="tel"> Digite a data de nascimento </label>
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
</template>

<script>
export default {}
</script>

<style>
.text {
  font-size: 16px;
  margin: 15px 0;
  width: 85%;
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
</style>
