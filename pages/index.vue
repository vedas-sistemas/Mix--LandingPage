<template>
  <div>
    <div class="col-md-12 col-lg-12 mx-auto">
      <Header />
    </div>
    <div class="bg-theme">
      <DetailsApp />
    </div>
    <div class="col-md-12 col-lg-12 mx-auto">
      <Feature />
    </div>
    <div class="col-md-12 col-lg-12 mx-auto">
      <Categorie />
    </div>

    <div class="col-md-12 col-xs-12 col-lg-12 mx-auto">
      <tabs-feature />
    </div>
    <div class="col-md-12 col-lg-12 mx-auto">
      <CardPlan />
    </div>
  </div>
</template>
<script>
import TabsFeature from '../components/TabsFeature.vue'
export default {
  components: { TabsFeature },
}
</script>
<style lang="scss"></style>
