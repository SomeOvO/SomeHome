<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'
const prop = defineProps({ Title: String, Desc: String, English: String })
const EnglishArr = prop.English?.split('')
const dom = useTemplateRef('PublicTitle')
const aniplayed = false

const Entry = (entries: IntersectionObserverEntry[]) => {
  entries.map((v) => v.isIntersecting && Load())
}
onMounted(() => {
  const ob = new IntersectionObserver(Entry, { threshold: 0.5 })
  ob.observe(dom.value!)
})
const DomCover = useTemplateRef('Cover')
const EnglishDom = useTemplateRef('English')

async function Load() {
  if (aniplayed) {
    return
  }
  DomCover.value?.classList.add('CoverAni')
  dom.value?.classList.add('BlackText')
  dom.value?.classList.add('DomAni')
  EnglishDom.value?.classList.add('TextAni')
}
</script>
<template>
  <div class="PublicTitle" ref="PublicTitle" style="color: #fff">
    <div class="cover" ref="Cover" unselectable="off"></div>
    <h1>{{ prop.Title }}</h1>
    <div class="Englist" ref="English">
      <span v-for="(v, i) in EnglishArr" :key="i">{{ v }}</span>
    </div>
    <div class="desc">
      <p>{{ Desc }}</p>
    </div>
  </div>
</template>
<style scoped>
@keyframes size {
  0% {
    margin: 2rem;
  }
  100% {
    margin: 0.5rem;
  }
}
@keyframes load {
  30% {
    height: 1%;
    width: 100%;
  }
  80% {
    height: 1%;
    width: 100%;
  }
  100% {
    height: 1%;
    width: 0;
  }
}
@keyframes gap {
  0% {
    gap: 3rem;
  }
  100% {
    gap: 0.5rem;
  }
}
.DomAni {
  animation: size 1s forwards cubic-bezier(0.8, 0, 0.47, 0.98);
}
.BlackText {
  color: #000 !important;
  transition: 1s;
}
.CoverAni {
  animation: load 1s forwards ease-out;
}
.TextAni {
  animation: gap 2s forwards ease;
}
.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  align-self: center;
  justify-self: center;
  background-color: #000;
  box-sizing: border-box;
  z-index: 0;
}
.PublicTitle {
  gap: 0.1rem;
  margin: 1rem;
  width: fit-content;

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  box-sizing: border-box;
  h1 {
    margin: 0;
    z-index: 1;
  }
  .Englist {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    max-width: 10rem;
    height: 1rem;
    box-sizing: border-box;
    transition: 1s color;
    span {
      z-index: 1;
      font-size: 100%;
      font-weight: bold;
    }
  }
  .desc {
    z-index: 1;
    p {
      margin: 0;
      white-space: normal;
      font-size: 100%;
    }
  }
}
</style>
