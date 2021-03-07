<template>
  <div class="section py-5">
    <div class="text-center">
      <span class="display-3">
        O <strong>mix</strong> é a plataforma ideal para todos os tipos de
        <br />
        restaurantes: <strong class="text-primary">grandes ou pequenos</strong>
      </span>
    </div>
    <hooper :settings="hooperSettings">
      <slide v-for="(item, index) in categories" :key="index">
        <div class="card card-categorie py-5 mx-2 my-5 card-hover" href="#">
          <div class="pa-5">
            <div class="row justify-center">
              <img class="icon-categorie" :src="item.image" alt="categorie" />
            </div>
            <div class="headline text-center">
              <span class="text-primary" v-text="item.title"></span>
            </div>
          </div>
        </div>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
    <section class="row justify-center"></section>
  </div>
</template>
<script>
import list from '@/assets/index.js'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      categories: null,
      hooperSettings: {
        itemsToShow: 5,
        centerMode: true,
        mouseDrag: true,
        wheelControl: true,
        infiniteScroll: true,
      },
    }
  },
  mounted() {
    this.categories = list.categories
    console.log(this.categories)
  },
}
</script>

<style lang="scss">
.icon-categorie {
  width: 100px;
  height: 100px;
  padding: 15px 15px;
}
.card-categorie {
  /* height: 60vh; */
}
</style>
