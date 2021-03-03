<template>
  <div class="accordion">
    <div
      class="accordion-item"
      v-for="(content, i) in contents"
      :class="{ 'accordion-active': content.active }"
    >
      <div class="accordion-header">
        <a @click="expand(i)">
          <div class="accordion-header-div">{{ content.title }}</div>
          <div class="accordion-header-div">
            <div class="accordion-caret"></div>
          </div>
        </a>
      </div>

      <div class="accordion-body" :ref="'accordion-body-' + i">
        <div class="accordion-content">{{ content.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contents'],

  methods: {
    expand(i) {
      let el = this.$refs['accordion-body-' + i][0]
      if (this.contents[i].active === false) {
        this.contents[i].active = true
        console.log(this.$gsap)
        this.$gsap.to(el, 1, {
          height: el.scrollHeight,
          ease: this.$gsap.config(1, 0.3),
        })
      } else {
        this.contents[i].active = false

        this.$gsap.to(el, 0.5, {
          height: 0,
          ease: this.$gsap.easeOut,
        })
      }
    },
  },
}
</script>

<style></style>
