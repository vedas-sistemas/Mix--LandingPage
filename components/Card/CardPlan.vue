<template>
  <div class="plan-section">
    <div class="title">
      <span>Flexivel e poderoso</span>
    </div>
    <div class="description">
      <span
        >O suficiente para administrar seus negócios e permanecer dentro do seu
        orçamento. Escolha um de nossos planos e debute imediatamente</span
      >
    </div>
    <div class="container">
      <div v-for="n in 4" :key="n" class="card">
        <div class="card-image">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3529/3529890.svg"
          />
        </div>
        <div class="card-body">
          <div class="card-title">Plano mensal</div>
          <div class="card-subtitle">07% sobre as vendas</div>
          <div class="card-text">
            <ul class="list">
              <li class="list-item">
                <div>
                  <span class="mdi mdi-check"></span>
                </div>
                <div>
                  <span> Até 200 pedidos mensais </span>
                </div>
              </li>
              <li class="list-item">
                <div>
                  <span class="mdi mdi-check"></span>
                </div>
                <div>
                  <span> Coloque no seu domínio “seunegocio.com.br”</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-btn"><a href="#">quero ser parceiro</a></div>
        <div class="card-footer">
          <div><a href="a" class="card-link"> + informações</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.plan-section {
  background-color: #0e65e5;
  background-repeat: no-repeat;
  padding: 100px 0px;
}
.plan-section .title {
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 38px;
  text-align: center;

  color: #ffffff;
}
.plan-section .description {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 39px;
  text-align: center;
  max-width: 800px;
  color: #ffffff;
  margin: 10px auto;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.card {
  margin: 15px 20px;
  padding: 40px;
  border-radius: 40px;
  border: 1px solid #eff2f6;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-body {
  margin: 30px 0px;
}
.card .card-body .card-subtitle {
  font-size: 16px;
  line-height: 26px;
  color: #6b6b6b;
  text-align: center;
}
.card .card-text .mdi {
  font-size: 22px;
  padding: 0px 10px;
}
.card .card-body .card-text {
  line-height: 20px;
  color: #6b6b6b;
  text-align: center;
}
.card ul li {
  list-style: none;
}
.card img {
  max-width: 50px;
}
.card .card-link {
  text-decoration: none;
}
.card .card-btn a {
  float: left;
  text-align: center;
  text-decoration: none;
  background: #d2448d;
  color: #fff;
  box-shadow: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 800;
  padding: 18px 32px 16px;
}
.card-btn {
  margin: 15px 0px;
}

.card-title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #0e65e5;
  text-align: center;
}
.list .list-item {
  font-size: 15px;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 15px 0px;
}
</style>
