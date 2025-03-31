<!--
view
  - main home page that appears on landing
  - shows the textScroll hero, the about us, the youth room about, team about, and contact info
-->
<script setup lang="ts">
import { ref } from "vue";
import Polaroids from "../components/Polaroids.vue";
import Slideshow from "../components/Slideshow.vue";
import TextScroller from "../components/TextScroller.vue";
import { RouterLink } from "vue-router";
import Team from "../components/Team.vue";
import ContactForm from "../components/ContactForm.vue";

const imageText = [
    'info about 1 image',
    'info about 2 image',
    'info about 3 image',
]
const activeImageText = ref(imageText[0]);
function changeText(value: number) {
  activeImageText.value = imageText[value];
}
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
      <p class="font-secondary text-sm lg:text-md text-justify font-extralight">That’s the vision we have for young people at St. Andrew’s Church. Teenagers today have opportunities like no other - but also face challenges like none before. We provide a safe space for teens to not just be themselves, but to consistently be better everyday by realising for themselves what God’s designed them for.</p>
      <RouterLink to="/gallery" class="w-fit h-fit p-2 lg:p-4 bg-white text-black rounded-sm ml-auto lg:text-xl">see more -></RouterLink>
    </div>
  </div>
  <div class="h-dvh w-full flex flex-col justify-center items-center gap-8">
    <h1 class="text-2xl lg:text-5xl text-center">the youth room</h1>
    <p class="w-10/12 font-secondary text-sm lg:text-md text-justify font-extralight">Every community requires a safe space to exist together in. Our dedicated Youth Room is our “upper room”, where we have our Sunday 10AM Bible Analysis & Study mornings and our Friday 6PM Refuge Youth nights. Other ministries borrow the room for different occasions, turning the room into a house that’s been saturated in prayers over the years. Worship is not limited to just a  room - but it’s nice to have a place we call our own.</p>
    <Slideshow @changeText="changeText" />
    <p class="font-secondary text-white">fig: {{ activeImageText }}</p>
  </div>
  <Team />
  <ContactForm />
</template>

<style lang="scss" scoped>
.font-secondary {
  line-height: 35px;
  letter-spacing: 1.25px;

  @media screen and (max-width: 1024px) {
    letter-spacing: normal;
    line-height: 25px;
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
