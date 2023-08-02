<template>
  <VueNavbar />
  <router-view />
</template>

<script>
import VueNavbar from "@/components/VueNavbar.vue";

export default {
  name: 'App',
  components: {
    VueNavbar,
  }
}
</script>

<style></style>
