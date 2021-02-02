<template>
  <div class="register">
    <div class="row colunm align-center">
      <div class="col-md-6 col-lg-6"><Step1 /></div>
      <div class="info-container col-md-6 col-lg-6">
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
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style>
.register {
  height: 100vh;
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
