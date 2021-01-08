<template>
  <div class="plan-section">
    <div class="title text-center">
      <h3>Flexivel e poderoso</h3>
    </div>
    <div class="description">
      <span
        >O suficiente para administrar seus negócios e permanecer dentro do
        <br />
        seu orçamento. Escolha um de nossos planos e debute imediatamente</span
      >
    </div>
    <div class="row justify-center col-md-12">
      <div
        v-for="(n, index) in 4"
        :key="index"
        class="card col-xs-12 col-lg-3 col-md-3"
        :class="index === 2 ? 'card-contrast' : ''"
      >
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
              <li class="list-item row" v-for="item in 8" :key="item">
                <div>
                  <span class="mdi mdi-check"></span>
                  <span> Até 200 pedidos mensais </span>
                </div>
              </li>
              <li class="list-item row">
                <div>
                  <span class="mdi mdi-check"></span>
                  <span> Até 200 pedidos mensais </span>
                </div>
              </li>
              <li class="list-item row">
                <div>
                  <span class="mdi mdi-check"></span>
                  <span> Até 200 pedidos mensais </span>
                </div>
              </li>
              <li class="list-item row">
                <div>
                  <span class="mdi mdi-check"></span>
                  <span> Até 200 pedidos mensais </span>
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
export default {
  data() {
    return {
      cardContrast: true,
    }
  },
}
</script>

<style>
.plan-section {
  padding: 15px 40px;
}
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
}

.card-body {
  margin: 15px 0px;
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
  background: #4d04ea;
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
  color: #4d04ea;
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
  background: #4d04ea;
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
  float: left;
  text-align: center;
  text-decoration: none;
  background: #fff;
  color: #4d04ea;
  box-shadow: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 800;
  padding: 18px 32px 16px;
}
.card-contrast .card-body .card-text {
  line-height: 20px;
  color: #ffff;
  text-align: center;
}
.card-contrast .card-link {
  text-decoration: none;
  color: #4d04ea;
}
</style>
