<!-- 
component
  - navbar that shows all brand logo, internal links, external link
-->
<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const showSidebar = ref(false);

function revealSidebar() {
  showSidebar.value = !showSidebar.value;
  console.log(showSidebar.value);
}
</script>

<template>
  <Sidebar @close-sidebar="revealSidebar" :show-sidebar="showSidebar"/>
  <div class="w-11/12 h-[10dvh] fixed z-40">
    <div class="flex h-fit justify-between lg:justify-center items-center pt-4 w-full">
      <div class="flex w-1/2 justify-between items-center lg:pr-18">
        <img class="hidden xl:block w-auto h-20" src="../assets/logo-transparent.png" v-on:click="" />
        <img class="xl:hidden mr-1 block h-10 rounded-4xl" src="../assets/favicon-logo.svg" v-on:click="" />
        <div class="lg:flex flex-col justify-center items-center hidden">
          <p class="text-center not-lg:text-sm">fridays @ 6pm | sundays @ 10am</p>
          <a
            target="_blank"
            href="https://maps.app.goo.gl/TTrV3wFPgEdBcix99"
            class="border-b-1 not-lg:text-sm border-b-white link transition-all"
          >
            location pin
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              style="display: inline"
              viewBox="0 0 512 512"
            >
              <path
                d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                fill="none"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                class="transition-all"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="lg:flex hidden w-1/2 lg:pl-16 justify-between items-center">
        <RouterLink to="/" class="border-b-1 not-lg:text-sm border-b-white link transition-all">about</RouterLink>
        <RouterLink to="/blog" class="border-b-1 not-lg:text-sm border-b-white link transition-all">blog</RouterLink>
        <RouterLink to="/gallery" class="border-b-1 not-lg:text-sm border-b-white link transition-all"
          >gallery</RouterLink
        >
        <RouterLink to="/" class="border-b-1 not-lg:text-sm border-b-white link transition-all">contact</RouterLink>
      </div>
      <svg
        width="34"
        height="25"
        viewBox="0 0 34 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="block lg:hidden h-4 cursor-pointer transition-all"
        v-on:click="revealSidebar"
      >
        <line y1="0.5" x2="34" y2="0.5" stroke="white" />
        <line y1="12.5" x2="34" y2="12.5" stroke="white" />
        <line y1="24.5" x2="34" y2="24.5" stroke="white" />
      </svg>
    </div>
    <div class="w-full lg:flex items-center gap-8 hidden">
      <div class="w-1/2 bg-white h-[1px] rounded-sm"></div>
      <svg
        width="32"
        height="40"
        viewBox="0 0 32 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2031 2V9C11.2031 10.1046 10.3076 11 9.20306 11H2.20306C1.65078 11 1.20306 11.4477 1.20306 12V20C1.20306 20.5523 1.65078 21 2.20306 21H9.20306C10.3076 21 11.2031 21.8954 11.2031 23V38.5C11.2031 39.0523 11.6508 39.5 12.2031 39.5H20.2031C20.7553 39.5 21.2031 39.0523 21.2031 38.5V23C21.2031 21.8954 22.0985 21 23.2031 21H30.2031C30.7553 21 31.2031 20.5523 31.2031 20V12C31.2031 11.4477 30.7553 11 30.2031 11H23.2031C22.0985 11 21.2031 10.1046 21.2031 9V2C21.2031 1.44772 20.7553 1 20.2031 1H12.2031C11.6508 1 11.2031 1.44772 11.2031 2Z"
          fill="white"
          stroke="black"
        />
      </svg>

      <div class="w-1/2 bg-white h-[1px] rounded-sm"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link:hover {
  font-weight: 800;
  cursor: pointer;
  color: var(--color-secondary);
  border-bottom-color: var(--color-secondary);

  svg {
    path {
      stroke: var(--color-secondary);
    }
  }
}

svg:hover {
  transform: scale(1.1);
}
</style>
