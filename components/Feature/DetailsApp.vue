<template>
  <div class="section-details-app">
    <div class="container">
      <div class="image">
        <img :src="require('~/assets/images/feature/image-app.png')" />
      </div>
      <div class="content">
        <div class="section-details-app-title">
          <span>Comece Agora</span>
        </div>
        <div class="section-details-app-description">
          <span
            >Se você tem seu delivery e gasta muito dinheiro com as plataformas,
            porém você não sabe como começar a economizar, nós vamos te ajudar!
            A venda direta é a sua solução!</span
          >
        </div>
        <div class="section-details-app-btn">
          <a href="#">quero ser parceiro</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.section-details-app {
  display: flex;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.section-details-app .container {
  display: flex;
}
.section-details-app .content {
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
.section-details-app .content .section-details-app-title {
  text-align: left;
  font-style: normal;
  font-size: 48px;
  line-height: 38px;
  color: #f7bd00;
  font-weight: bold;
}
.section-details-app .content .section-details-app-description {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #18191f;
  margin: 40px 0px;
}
.section-details-app .image img {
  max-width: 500px;
}
.section-details-app-btn a {
  float: left;
  text-align: center;
  text-decoration: none;
  background: #f7bd00;
  color: #fff;
  box-shadow: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 800;
  padding: 18px 32px 16px;
}
</style>
