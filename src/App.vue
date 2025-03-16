<script setup lang="ts">
import Nav from "./components/Nav.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col justify-center items-center w-11/12 mx-auto">
    <Nav></Nav>
    <RouterView class="w-11/12" />
  </div>
</template>

<style scoped></style>
