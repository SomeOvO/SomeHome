<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import gsap from 'gsap'
import { useTemplateRef } from 'vue'
import IndexSkill from './IndexSkill.vue'

const counter = useCounterStore()

const play = counter.CreateAudioPipe(1, 1.5)
const Dom = useTemplateRef('China')
const Click = () => {
  gsap.set(Dom.value, {
    '--view': 'unset',
  })
  const tl = gsap.timeline()
  tl.add(
    gsap.to(Dom.value, {
      translateY: '-100dvh',
      yoyo: true,
      repeat: -1,
      duration: 1,
    }),
  )
  tl.add(
    gsap.to(Dom.value, {
      translateX: '-50dvw',
      yoyo: true,
      repeat: -1,
      duration: 10,
    }),
    '<',
  )

  play('/Audio/music/Chinese.mp3')
}

const time = new Date()
</script>

<template>
  <div class="IndexIntroduction">
    <h1>SomeOvO</h1>
    <div class="speical">
      <span class="Chinese" @click="Click" ref="China" :style="{ '--view': 'none' }">中国人</span
      ><span>一枚哦</span>
    </div>
    <div class="Text">
      <div class="infos">
        <span>{{ time.getFullYear() - 2007 }}</span> <span>苏州</span> <span>学生</span>
      </div>
      <p>总要说些什么吧，毕竟这是我自己的地方.</p>
    </div>
    <IndexSkill />
  </div>
</template>

<style scoped>
.speical {
  display: flex;
}
.IndexIntroduction {
  padding: 0.5rem;
  align-self: flex-start;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 21rem;
  h1 {
    opacity: 0.8;
    margin: 0;
  }
}
.Chinese {
  display: block;
  position: relative;
  transition: 5s ease transform;
  transform: translateY(0px);
  width: fit-content;
}
.Text {
  margin: 1rem 0;
  flex-direction: column;
  display: flex;
  p {
    font-weight: bold;
    margin: 0;
    white-space: normal;
  }
}
.Chinese::after {
  display: var(--view);
  position: absolute;
  right: -1.8rem;
  top: -0.5rem;
  width: 2rem;
  height: 2rem;
  content: '';
  background-position: center;
  background-size: contain;
  background-image: url(/icon/flywingR.svg);
}
.Chinese::before {
  display: var(--view);
  position: absolute;
  left: -2rem;
  top: -0.5rem;
  width: 2rem;
  height: 2rem;
  content: '';
  background-position: center;
  background-size: contain;
  background-image: url(/icon/flywingL.svg);
}
</style>
