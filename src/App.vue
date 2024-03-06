<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
}
</script>

<template>
  <AppHeader/>
  <router-view/>
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables' as *;
</style>