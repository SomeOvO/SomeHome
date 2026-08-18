<script lang="ts" setup>
import gsap from 'gsap'
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
async function Load() {
  if (aniplayed) {
    return
  }
  Ani1().delay(1).play()
}
const DomCover = useTemplateRef('Cover')
const Ani1 = () => {
  const tl = gsap.timeline({ paused: true })
  tl.add(
    gsap.to(dom.value, {
      '--text': '#000',
    }),
    '<',
  )
  tl.add(
    gsap.to(DomCover.value, {
      height: '1%',
    }),
    '<',
  )
  tl.add(
    gsap.to(DomCover.value, {
      width: 0,
    }),
    '>',
  )
  tl.add(
    gsap.to('.Englist', {
      gap: '0.5rem',
    }),
    '<',
  )

  return tl
}
</script>
<template>
  <div class="PublicTitle" ref="PublicTitle" :style="{ '--text': '#fff' }">
    <div class="cover" ref="Cover" unselectable="off"></div>
    <h1>{{ prop.Title }}</h1>
    <div class="Englist">
      <span v-for="(v, i) in EnglishArr" :key="i">{{ v }}</span>
    </div>
    <div class="desc">
      <p>{{ Desc }}</p>
    </div>
  </div>
</template>
<style scoped>
.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  align-self: center;
  justify-self: center;
  background-color: #000;
  z-index: 0;
}
.PublicTitle {
  gap: 0.1rem;
  width: fit-content;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 0.2rem;
  box-sizing: border-box;
  h1 {
    margin: 0;
    z-index: 1;
    color: var(--text);
  }
  .Englist {
    display: flex;
    z-index: 1;
    gap: 2rem;
    box-sizing: border-box;
    span {
      z-index: 1;
      font-size: 100%;
      font-weight: bold;
      color: var(--text);
    }
  }
  .desc {
    z-index: 1;
    p {
      color: var(--text);
      margin: 0;
      font-size: 60%;
    }
  }
}
</style>
