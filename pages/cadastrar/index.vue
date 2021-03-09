<template>
  <div>
    <main>
      <RegisterStep />
    </main>
  </div>
</template>
<script>
export default {
  layout: 'register',
  transition: '',
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
