<template>
  <div>
    <Navbar />
    <div class="body">
      <Header />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Navbar from '../components/Shared/Navbar.vue'
export default {
  components: { Navbar, Header },
}
</script>

<style>
@media only screen and (min-width: 64.063em) {
  .body {
    max-width: 1490px;
    margin: 0 auto;
    font-family: 'Monda', sans-serif;
  }
  .body > .header {
    margin: 0px !important;
    bottom: 0;
  }
}
* {
  margin: 0;
  padding: 0;
}
</style>
