<template>
  <div>
    <div class="row colunm fill-height">
      <div class="col-md-5 col-lg-5 page">
        <NuxtChild />
      </div>
      <hooper
        ref="carousel"
        :settings="hooperSettings"
        class="bg-theme row justify-center align-flex-end col-md-7 col-lg-7"
      >
        <slide>
          <div class="slide-content">
            <div class="image-step-1">
              <img lazy :src="firstImage" />
            </div>
            <div class="text item-title">
              <span>Crie promoções</span>
            </div>
            <div class="text item-text">
              <span>
                O Delivery App foi pensado exclusivamente para que o delivery do
                seu estabelecimento cresça, gerando mais vendas e economia.
              </span>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slide-content">
            <div class="image-step-1">
              <img lazy :src="firstImage" />
            </div>
            <div class="text item-title">
              <span>Crie promoções</span>
            </div>
            <div class="text item-text">
              <span>
                O Delivery App foi pensado exclusivamente para que o delivery do
                seu estabelecimento cresça, gerando mais vendas e economia.
              </span>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slide-content">
            <div class="image-step-1">
              <img lazy :src="firstImage" />
            </div>
            <div class="text item-title">
              <span>Crie promoções</span>
            </div>
            <div class="text item-text">
              <span>
                O Delivery App foi pensado exclusivamente para que o delivery do
                seu estabelecimento cresça, gerando mais vendas e economia.
              </span>
            </div>
          </div>
        </slide>
        <slide class="slide-content">
          <div
            class="plan-details col-md-7 col-lg-7 pa-5 animate__animated animate__bounceInDown"
            v-if="planSelected"
          >
            <div class="row align-center my-3 pa-5">
              <div class="col-ml-3">
                <img
                  alt="Plano 1 - Mix APP"
                  width="50px"
                  :src="planSelected.image"
                />
              </div>
              <div class="col-ml-9">
                <div class="text-left">
                  <span v-text="planSelected.title">Plano inciante</span>
                </div>
                <div
                  class="card-subtitle"
                  v-text="planSelected.description"
                ></div>
              </div>
            </div>
            <div class="card-text px-5">
              <div>
                <span class="display-2 text-light"
                  >Todas as funcionalidades do pacote:</span
                >
              </div>
              <ul class="list">
                <li
                  class="list-item row"
                  v-for="item in planSelected.stack"
                  :key="item"
                >
                  <div>
                    <span class="mdi mdi-check"></span>
                    <span v-text="item"> </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  transition: {},
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  mounted() {
    this.whatchRoute()
  },
  data() {
    return {
      firstImage: require('~/assets/images/register/image-1.png'),
      hooperSettings: {
        itemsToShow: 1,
        centerMode: false,
        mouseDrag: false,
        wheelControl: false,
      },
    }
  },
  watch: {
    $route(value) {
      this.whatchRoute(value.name)
    },
  },
  computed: {
    myCarouselData() {
      return this.$store.state.slide
    },
    planSelected() {
      return this.$store.state.planSelected
    },
  },
  methods: {
    next() {
      console.log('next')
      this.$router.push({ path: '/' })
    },
    whatchRoute(value) {
      if (!value) {
        value = this.$route.name
      }
      switch (value) {
        case 'cadastrar':
          this.$refs.carousel.slideTo(0)

          break
        case 'cadastrar-empresa':
          this.$refs.carousel.slideTo(1)
          break
        case 'cadastrar-endereco':
          this.$refs.carousel.slideTo(2)
          break
        case 'cadastrar-plano':
          this.$refs.carousel.slideTo(3)
          break
        default:
          break
      }
    },
  },
}
</script>
<style>
.info-container {
  width: 100%;
  padding-top: 60px;
  color: #d7e9ff;
  display: flex;
  justify-content: center;
}

.info-content {
  width: 80%;
}

.info-title {
  font-size: 120%;
  width: 70%;
}

.info-text {
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 18px;
}
</style>
