<!-- 
component
  - is just the sidebar nav menu for phones/tablets/smaller width screens
  - displays brand logo, internal hyperlinks, and one external map pin link
-->
<script setup lang='ts'>
const props = defineProps({
    showSidebar: Boolean
})
</script>
 
<template>
    <div @click="$emit('closeSidebar')" :class="props.showSidebar ? 'z-50 opacity-100' : 'opacity-0 -z-50'" class="fixed h-dvh w-dvw lg:hidden bg-primary-80 transition-all top-0 flex flex-col justify-center items-center gap-4 p-12">
        <img class="max-w-60" src="../assets/logo-transparent.png" v-on:click="" />

        <RouterLink to="/" class="border-b-1 border-b-white link transition-all mt-12">about</RouterLink>
        <RouterLink to="/blog" class="border-b-1 border-b-white link transition-all">blog</RouterLink>
        <RouterLink to="/gallery" class="border-b-1 border-b-white link transition-all"
          >gallery</RouterLink
        >
        <RouterLink to="/" class="border-b-1 border-b-white link transition-all">contact</RouterLink>

        <p class="text-center mt-12">fridays @ 6pm | sundays @ 10am</p>
          <a
            target="_blank"
            href="https://maps.app.goo.gl/TTrV3wFPgEdBcix99"
            class="link transition-all border-b-1 border-b-white"
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

</template>
 
<style scoped lang='scss'>
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
</style>