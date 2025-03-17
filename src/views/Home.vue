<script setup lang="ts">
import TextScroller from "../components/TextScroller.vue";
</script>

<template>
  <div class="h-dvh w-full flex flex-col justify-center items-center">
    <TextScroller />
    <svg
      width="47"
      height="20"
      viewBox="0 0 47 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="translate-y-20 transition-all"
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
</template>

<style lang="scss" scoped>
svg:hover {
  transform: scale(1.15);
  cursor: pointer;

  path {
    stroke: var(--color-secondary);
  }
}
</style>
