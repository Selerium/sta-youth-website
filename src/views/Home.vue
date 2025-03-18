<!--
view
  - main home page that appears on landing
  - shows the textScroll hero, the about us, the youth room about, team about, and contact info
-->
<script setup lang="ts">
import Polaroids from "../components/Polaroids.vue";
import TextScroller from "../components/TextScroller.vue";
import { RouterLink } from "vue-router";

</script>

<template>
  <div class="mt-[10dvh] h-[90dvh] w-full flex flex-col justify-center items-center">
    <TextScroller />
    <svg
      viewBox="0 0 47 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="translate-y-4 transition-all w-6 md:w-10 lg:w-12 h-auto"
    >
      <path
        d="M44.2788 2.08065L22.9703 17.7108C22.6076 17.9769 22.112 17.968 21.759 17.6892L2 2.08065"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        class="transition-all"
      />
    </svg>
  </div>
  <div class="h-fit my-4 lg:my-0 lg:h-dvh w-full flex flex-col-reverse lg:flex-row justify-center items-center">
    <div class="w-full lg:w-1/2 p-2 h-1/2 lg:h-full flex justify-center items-center">
      <Polaroids />
    </div>
    <div class="w-full lg:w-1/2 p-2 lg:h-full flex flex-col justify-center items-center gap-12">
      <h1 class="text-2xl lg:text-5xl text-center">a community of teens burning for <span class="text-red-900">jesus</span></h1>
      <p class="font-secondary text-justify font-extralight">That’s the vision we have for young people at St. Andrew’s Church. Teenagers today have opportunities like no other - but also face challenges like none before. We provide a safe space for teens to not just be themselves, but to consistently be better everyday by realising for themselves what God’s designed them for.</p>
      <RouterLink to="/gallery" class="w-fit h-fit p-2 lg:p-4 bg-white text-black rounded-sm ml-auto lg:text-xl">see more -></RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.font-secondary {
  line-height: 35px;
  letter-spacing: 1.25px;

  @media screen and (max-width: 1024px) {
    letter-spacing: normal;
  }
}

svg:hover {
  transform: scale(1.15);
  cursor: pointer;

  path {
    stroke: var(--color-secondary);
  }
}
</style>
