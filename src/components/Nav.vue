<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="w-11/12 fixed">
    <div class="flex h-fit justify-center items-center pt-4 w-full">
      <div class="flex w-1/2 justify-between items-center pr-18">
        <img src="../assets/logo-transparent.png" v-on:click="" />
        <div class="flex flex-col justify-center items-center">
          <p>fridays @ 6pm | sundays @ 10am</p>
          <a target="_blank" href="https://maps.app.goo.gl/TTrV3wFPgEdBcix99" class="link transition-all">
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
      <div class="flex w-1/2 pl-16 justify-between items-center">
        <RouterLink to="/" class="link transition-all">about</RouterLink>
        <RouterLink to="/blog" class="link transition-all">blog</RouterLink>
        <RouterLink to="/gallery" class="link transition-all">gallery</RouterLink>
        <RouterLink to="/" class="link transition-all">contact</RouterLink>
      </div>
    </div>
    <div class="w-full flex items-center gap-8">
      <div class="w-1/2 bg-white h-1 rounded-sm"></div>
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

      <div class="w-1/2 bg-white h-1 rounded-sm"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 75px;
  width: auto;
}

.link:hover {
  font-weight: 800;
  cursor: pointer;
  color: var(--color-secondary);

  svg {
    path {
      stroke: var(--color-secondary);
    }
  }
}
</style>
