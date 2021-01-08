<template>
  <div class="section">
    <div class="title text-center">
      <h3>
        O mix se adapta a qualquer tipo de <br />
        <strong class="title-contrast">delivery</strong>
      </h3>
    </div>
    <section class="container-categorie row justify-center">
      <a
        v-for="(item, index) in categories"
        :key="index"
        class="card-categorie col-md-2 col-xs-5"
        href="#"
      >
        <div class="content">
          <img class="logo" :src="item.image" alt="categorie" />
          <span class="categorie-title" v-text="item.title"></span>
        </div>
      </a>
    </section>
  </div>
</template>
<script>
import list from '@/assets/index.js'
export default {
  data() {
    return {
      categories: null,
    }
  },
  mounted() {
    this.categories = list.categories
    console.log(this.categories)
  },
}
</script>

<style lang="scss">
.section {
  padding: 30px 0px;
}
.container-categorie {
  height: 100%;

  margin: 50px 0px;
}
.container-categorie a {
  text-decoration: none;
}
.container-categorie a:hover {
  background: #dedbfc;
  -webkit-box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
  color: #6b6b6b, 100%;
}
.card-categorie {
  transition: all 0.35s ease;
  margin: auto 0;
  margin: 10px 15px;
  border-radius: 20px;
  border: 1px solid #eff2f6;
  .content {
    padding: 30px 40px;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .categorie-title {
    font-style: normal;
    font-size: 15px;
    line-height: 26px;
    color: #4d04ea;
    min-width: 100px;
    text-align: center;
  }
  img {
    width: 70px;
    height: 70px;
    padding: 15px 15px;
    color: red;
  }
}
</style>
