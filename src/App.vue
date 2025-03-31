<script setup lang="ts">
import Nav from "./components/Nav.vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col justify-start items-center w-11/12 mx-auto">
    <Nav />
    <RouterView class="w-11/12" />
    <Footer />
  </div>
</template>

<style scoped></style>
