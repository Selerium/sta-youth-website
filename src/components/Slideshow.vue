<!-- 
component
- displays pictures left and right that you can go back and forth
- should have arrows left and right to display the images
-->
<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';

const images = [
  "/src/assets/youth-photo-1.JPG",
  "/src/assets/youth-photo-1.JPG",
  "/src/assets/youth-photo-1.JPG",
];

const activeImage = ref(0);
const imageRefs = useTemplateRef('imgs');

function changeImage() {
    if (!imageRefs.value)
        return ;

    let left = activeImage.value - 1 < 0 ? images.length - 1 : activeImage.value - 1;
    let right = activeImage.value + 1 == images.length ? 0 : activeImage.value + 1;

    imageRefs.value[activeImage.value].classList.add('middle');
    imageRefs.value[left].classList.add('left');
    imageRefs.value[right].classList.add('right');
}

function removeImage() {
    if (!imageRefs.value)
        return ;

    let left = activeImage.value - 1 < 0 ? images.length - 1 : activeImage.value - 1;
    let right = activeImage.value + 1 == images.length ? 0 : activeImage.value + 1;

    imageRefs.value[activeImage.value].classList.remove('middle');
    imageRefs.value[left].classList.remove('left');
    imageRefs.value[right].classList.remove('right');
}

function clickLeft() {
    removeImage();
    activeImage.value--;
    if (activeImage.value < 0)
        activeImage.value = images.length - 1;
    changeImage();
}

function clickRight() {
    removeImage();
    activeImage.value++;
    if (activeImage.value == images.length)
        activeImage.value = 0;
    changeImage();
}

onMounted(() => {
    changeImage();
})
</script>

<template>
  <div
    @click="$emit('change-text', activeImage)"
    class="overflow-hidden min-w-72 w-2/3 h-1/5 lg:h-2/5 flex relative justify-center lg:justify-between items-center"
  >
    <svg
      width="41"
      height="85"
      viewBox="0 0 41 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="clickLeft"
      class="absolute md:relative left-1/12 md:left-0 px-4 z-30 cursor-pointer"
    >
      <path
        d="M38.2248 83L2.58463 41.6778C2.25181 41.292 2.26238 40.7175 2.60918 40.3441L38.2248 2"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
    <div class="w-10/12 h-full flex overflow-hidden relative justify-center items-center">
        <img v-for="image, key in images" v-bind:src="image" :key="key" ref="imgs" class="w-full h-full object-cover absolute transition-all" />
    </div>
    <svg
      width="41"
      height="85"
      viewBox="0 0 41 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="clickRight"
      class="absolute md:relative right-1/12 md:right-0 px-4 z-30 cursor-pointer"
    >
      <path
        d="M2.22487 2L37.8651 43.3222C38.1979 43.708 38.1873 44.2825 37.8405 44.6559L2.22488 83"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
</div>
</template>

<style scoped lang="scss">
svg {
  height: 64px;
  width: auto;

  @media screen and (max-width: 1024px) {
    height: 32px;
  }
}

.left {
    opacity: 0;
    transform: translateX(-50%);
}

.middle {
    opacity: 1;
    transform: translateX(0);
}

.right {
    opacity: 0;
    transform: translateX(+50%);
}
</style>
