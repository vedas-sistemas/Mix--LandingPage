<template>
  <div class="row colunm fill-height"></div>
</template>

<script>
import { AtomSpinner } from 'epic-spinners'

export default {
  layout: 'loading',
  components: {
    AtomSpinner,
  },
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
  font-size: 120%;
  width: 70%;
}

.info-text {
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 18px;
}
</style>
