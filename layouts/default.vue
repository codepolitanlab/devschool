<template>
  <div>
    <navbar-vue />
    <Nuxt class="mt--3" />
    <footer-vue />
  </div>
</template>

<script>
import footerVue from '../components/footer.vue'
import navbarVue from '../components/navbar.vue'
export default {
  components: {
    navbarVue,
    footerVue
  }
}
</script>

<style>
</style>
