<!-- 
component
-   displays the team members
-   click on one to show more info about the person
-->
<script setup lang="ts">
import { ref } from "vue";

const team = [
  {
    img: "src/assets/youth-photo-1.JPG",
    nickname: "adi",
    fullname: "john adithya",
    role: "youth director",
    info: "This is some information about the person mentioned here. It’s a good place to give a short bio about who the leader/volunteer is and how they would introduce themselves. Something that gives people a quick brief look into the life and character of this person.",
    food: "shawarmas",
    superpower: "extreme empathy",
    verse: "hebrews 13:8",
    fullVerse: "Jesus Christ is the same yesterday and today and forever.",
  },
  {
    img: "src/assets/youth-photo-1.JPG",
    nickname: "surya",
    fullname: "john surya",
    role: "youth director",
    info: "This is some information about the person mentioned here. It’s a good place to give a short bio about who the leader/volunteer is and how they would introduce themselves. Something that gives people a quick brief look into the life and character of this person.",
    food: "shawarmas",
    superpower: "extreme empathy",
    verse: "hebrews 13:8",
    fullVerse: "Jesus Christ is the same yesterday and today and forever.",
  },
  {
    img: "src/assets/youth-photo-1.JPG",
    nickname: "donna",
    fullname: "pravachana paul",
    role: "youth director",
    info: "This is some information about the person mentioned here. It’s a good place to give a short bio about who the leader/volunteer is and how they would introduce themselves. Something that gives people a quick brief look into the life and character of this person.",
    food: "shawarmas",
    superpower: "extreme empathy",
    verse: "hebrews 13:8",
    fullVerse: "Jesus Christ is the same yesterday and today and forever.",
  },
  {
    img: "src/assets/youth-photo-1.JPG",
    nickname: "rahel",
    fullname: "rahel thomas",
    role: "youth director",
    info: "This is some information about the person mentioned here. It’s a good place to give a short bio about who the leader/volunteer is and how they would introduce themselves. Something that gives people a quick brief look into the life and character of this person.",
    food: "shawarmas",
    superpower: "extreme empathy",
    verse: "hebrews 13:8",
    fullVerse: "Jesus Christ is the same yesterday and today and forever.",
  },
];

const activeMember = ref(0);

function moveActiveMember(value: Boolean) {
  if (!value)
    activeMember.value == 0 ? activeMember.value = team.length - 1 : activeMember.value--;
  else
    activeMember.value == team.length - 1 ? activeMember.value = 0 : activeMember.value++;
}
</script>

<template>
  <div class="h-dvh w-full flex flex-col justify-center items-start gap-8">
    <h1 class="text-2xl lg:text-5xl w-full text-center lg:text-left">
      meet the team
    </h1>
    <div
      class="h-3/4 lg:h-5/9 w-full flex flex-col lg:flex-row justify-center items-center"
    >
      <div
        class="overflow-x-hidden lg:overflow-x-auto w-full lg:w-2/12 h-1/4 lg:h-full flex lg:flex-col flex-row justify-between items-center relative"
      >
        <svg
          width="41"
          height="85"
          viewBox="0 0 41 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute lg:hidden left-0 px-3 z-30 cursor-pointer stroke-2 stroke-black"
          @click="moveActiveMember(false)"
        >
          <path
            d="M38.2248 83L2.58463 41.6778C2.25181 41.292 2.26238 40.7175 2.60918 40.3441L38.2248 2"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
        <div
          v-for="(member, index) in team"
          class="h-full w-full min-w-full lg:w-full not-lg:absolute lg:h-1/5 rounded-tr-xl rounded-tl-xl lg:rounded-tr-none lg:rounded-br-xl overflow-clip relative transition-all cursor-pointer"
          :class="index == activeMember ? 'opacity-100 z-20' : 'opacity-20 z-0'"
          @click="activeMember = index"
        >
          <img
            class="w-full h-full object-center object-cover"
            :src="member.img"
          />
          <p
            class="font-secondary text-3xl absolute -bottom-0.5 right-2 text-right short-width font-bold"
          >
            {{ member.nickname }}
          </p>
        </div>
        <svg
          width="41"
          height="85"
          viewBox="0 0 41 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute lg:hidden right-0 px-3 z-30 cursor-pointer stroke-2 stroke-black"
          @click="moveActiveMember(true)"
        >
          <path
            d="M2.22487 2L37.8651 43.3222C38.1979 43.708 38.1873 44.2825 37.8405 44.6559L2.22488 83"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="w-1/12"></div>
      <div
        class="hidden lg:block w-5/12 2xl:w-6/12 h-full relative rounded-l-xl overflow-clip"
      >
        <img
          class="w-full h-full object-cover object-center transition-all"
          :src="team[activeMember].img"
        />
        <h2
          class="text-9xl font-secondary font-bold absolute bottom-2 right-4 transition-all"
        >
          {{ team[activeMember].nickname }}
        </h2>
      </div>
      <div
        class="w-full lg:w-4/12 2xl:w-3/12 h-3/4 lg:h-full p-6 rounded-bl-xl lg:rounded-bl-none rounded-br-xl lg:rounded-r-xl bg-white flex flex-col gap-3 justify-start xl:justify-center items-start overflow-y-scroll"
      >
        <div>
          <h3
            class="text-lg lg:text-2xl text-black font-primary mb-1 transition-all"
          >
            {{ team[activeMember].fullname.toLowerCase() }}
          </h3>
          <p
            class="text-md lg:text-xl text-black font-secondary italic font-bold transition-all"
          >
            {{ team[activeMember].role }}
          </p>
        </div>
        <p
          class="text-sm lg:text-md text-black font-secondary text-justify transition-all"
        >
          {{ team[activeMember].info }}
        </p>
        <div
          class="grid grid-cols-2 w-full gap-2 justify-items-center content-center"
        >
          <p
            class="text-center text-sm lg:text-md text-black font-secondary p-2 w-full"
          >
            favorite food item
          </p>
          <p
            class="text-center text-sm lg:text-md text-black font-secondary col-span-1 w-full rounded-sm p-2 bg-gray-300 italic transition-all"
          >
            {{ team[activeMember].food }}
          </p>
          <p
            class="text-center text-sm lg:text-md text-black font-secondary p-2 w-full"
          >
            their superpower
          </p>
          <p
            class="text-center text-sm lg:text-md text-black font-secondary w-full rounded-sm p-2 bg-gray-300 italic transition-all"
          >
            {{ team[activeMember].superpower }}
          </p>
          <p
            class="text-center text-sm lg:text-md text-black font-secondary p-2 w-full"
          >
            bible verse
          </p>
          <p
            class="text-center text-sm lg:text-md text-black font-secondary w-full rounded-sm p-2 bg-gray-300 italic transition-all"
          >
            {{ team[activeMember].verse }}
          </p>
        </div>
        <p
          class="text-sm lg:text-md w-full text-black font-secondary italic text-center transition-all"
        >
          "{{ team[activeMember].fullVerse }}"
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  letter-spacing: -6px;
}

.short-width {
  letter-spacing: -2px;
}
</style>
