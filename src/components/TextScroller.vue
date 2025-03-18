<!--
component
  - is a vertical marquee of the Nicene Creed running in backgroun
-->
<script setup lang="ts">
import { ref } from "vue";

const sampleText =
  "I believe in God, the Father almighty, creator of heaven and earth. I believe in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate,was crucified, died, and was buried; he descended to the dead. On the third day he rose again; he ascended into heaven, he is seated at the right hand of the Father, and he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen. I believe in God, the Father almighty, creator of heaven and earth. I believe in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate,was crucified, died, and was buried; he descended to the dead. On the third day he rose again; he ascended into heaven, he is seated at the right hand of the Father, and he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen. I believe in God, the Father almighty, creator of heaven and earth. I believe in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate,was crucified, died, and was buried; he descended to the dead. On the third day he rose again; he ascended into heaven, he is seated at the right hand of the Father, and he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen. I believe in God, the Father almighty, creator of heaven and earth. I believe in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate,was crucified, died, and was buried; he descended to the dead. On the third day he rose again; he ascended into heaven, he is seated at the right hand of the Father, and he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen. I believe in God, the Father almighty, creator of heaven and earth. I believe in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate,was crucified, died, and was buried; he descended to the dead. On the third day he rose again; he ascended into heaven, he is seated at the right hand of the Father, and he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen. ";
const words = ["grace", "love", "peace", "joy"];

let index = 0;
const textChanger = ref<string>(words[index]);

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(async () => {
  for (let i = words[index].length; i > 0; i--) {
    textChanger.value = words[index].substring(0, i);
    await sleep(100);
  }

  index++;
  index %= words.length;

  for (let i = 0; i < words[index].length; i++) {
    textChanger.value = words[index].substring(0, i + 1);
    await sleep(100);
  }
}, 3000);
</script>

<template>
  <div
    class="overflow-hidden flex flex-wrap justify-center items-center w-full h-8/9 md:h-2/3 xl:h-7/9 relative"
  >
    <div class="absolute h-full w-full z-20 gradient"></div>
    <p
      class="scroll-text inline lowercase text-justify text-lg lg:text-2xl relative opacity-15"
    >
      {{ sampleText }}
    </p>
    <p
      class="scroll-text inline lowercase text-justify text-lg lg:text-2xl relative opacity-15"
    >
      {{ sampleText }}
    </p>
    <p class="text-2xl lg:text-5xl absolute z-10 w-[500px] text-center -translate-y-3.5 lg:-translate-y-6">
      <span>{{ textChanger }}</span> for the
    </p>
    <p class="text-2xl lg:text-5xl absolute z-10 w-[500px] text-center translate-y-3.5 lg:translate-y-6">
      new generation
    </p>
  </div>
</template>

<style scoped lang="scss">
* {
  --duration: 20s;

  @media screen and (max-width: 1024px) {
    --duration: 45s;
  }
}

@keyframes moveUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

.scroll-text {
  animation: moveUp var(--duration) linear infinite;
  text-align-last: justify;
}

.gradient {
  background-image: linear-gradient(var(--color-primary) 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, var(--color-primary) 100%);
}
</style>
