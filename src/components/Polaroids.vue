<!-- 
component
    - displays images as polaroids
    - view should change depending on screen width
-->
<script setup lang="ts">
const photoList = [
  "youth-photo-2.JPG",
  "youth-photo-1.JPG",
  "youth-photo-3.JPG",
];
</script>

<template>
  <div
    class="w-full h-full flex justify-start gap-4 lg:justify-center items-center overflow-x-scroll lg:overflow-auto"
  >
    <div
      v-for="photo in photoList"
      class="p-2 lg:p-4 pb-14 lg:pb-18 bg-white lg:absolute photo relative"
    >
      <div class="w-full h-full absolute top-0 left-0 z-20 glare"></div>
      <div class="w-full h-full overflow-hidden">
        <img
          v-bind:src="photo"
          class="h-full w-full object-cover object-right"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  --transform-amount: 4.5vw;
}

.glare {
  // border-radius: 100% 0 100% 100%;
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 30%,
    rgba(252, 236, 203, 0) 65%,
    rgba(252, 236, 203, 0.1) 75%,
    rgba(252, 236, 203, 0.5) 90%,
    rgba(255, 238, 203, 0.3) 94%,
    rgba(252, 236, 203, 0) 100%
  );
}

.photo {
  aspect-ratio: 3.5 / 4.2;
  width: 20vw;
  height: auto;

  @media screen and (max-width: 1024px) {
    height: 45vh;
    width: auto;
  }
}

@media screen and (min-width: 1024px) {
  .photo:nth-of-type(1) {
    transform: translate(
        calc(var(--transform-amount) * -1.75),
        calc(var(--transform-amount) * -1.5)
      )
      rotate(-8deg);
    z-index: 1;
  }
  .photo:nth-of-type(2) {
    transform: translate(
        calc(var(--transform-amount) * 0),
        calc(var(--transform-amount) * 1.5)
      )
      rotate(1.98deg);
    z-index: 3;
  }
  .photo:nth-of-type(3) {
    transform: translate(
        calc(var(--transform-amount) * 1.75),
        calc(var(--transform-amount) * -1.25)
      )
      rotate(6.9deg);
    z-index: 2;
  }
}
</style>
