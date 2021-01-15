<template>
  <div class="app-details-app">
    <div class="app">
      <div class="row app-container align-center justify-center">
        <div class="col-lg-6 col-xs-12 col-sd-12 col-sm-12 col-md-5 app-child">
          <div class="app-child-text">
            <div class="title text-left col-lg-8">
              <h3>Comece Agora</h3>
            </div>
            <div class="app-child-details col-lg-12">
              <p>
                Se você tem seu delivery e gasta muito dinheiro com as
                plataformas, porém você não sabe como começar a economizar, nós
                vamos te ajudar! A venda direta é a sua solução!
              </p>
            </div>
            <div class="app-child-btn my-5 col-lg-6">
              <a href="#">Quero ser parceiro</a>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-5 col-xs-12 col-sd-12 col-sm-12 app-child-item"
        >
          <div class="app-child-image">
            <img :src="require('~/assets/images/feature/image-app.png')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.app {
  background-color: #f5f5f5;
  background-repeat: no-repeat;
  padding: 20px 0px;
}
.app-child-btn a {
  text-align: center;
  text-decoration: none;
  background: #f7bd00;
  color: #4d04ea;
  box-shadow: none;
  border-radius: 8px;
  font-size: 22px;
  font-weight: 800;
  padding: 20px 32px;
}
.app-child-btn a:hover {
  color: #4d04ea;
  background-color: #fac720 !important;
}
.app-container {
  color: #4d04ea;
  padding: 0px 10px;
}
.app-child > .app-child-text {
  margin: 0px 10px;
}
.app-child-item {
  margin: 0;
  padding: 0;
}

.app-child-details {
  color: #6b6b6b;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
  margin: 20px 0px;
}
</style>
