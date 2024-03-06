<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";


export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<template>
  <AppHeader/>
  <router-view/>
  <AppFooter/>
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables' as *;
</style>