<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import gsap from 'gsap'
import { useTemplateRef } from 'vue'

const counter = useCounterStore()

const play = counter.CreateAudioPipe(1, 1.5)
const Dom = useTemplateRef('China')
const Click = () => {
  gsap.to(Dom.value, {
    translateY: '-1000dvh',
    duration: 100,
  })
  gsap.set(Dom.value, {
    '--view': 'unset',
  })
  play('/Audio/music/Chinese.mp3')
}
</script>

<template>
  <div class="IndexIntroduction">
    <h1>SomeOvO</h1>
    <div class="Text">
      <span class="Chinese" @click="Click" ref="China" :style="{ '--view': 'none' }">中国人</span>
      <p>一枚哦</p>
    </div>
  </div>
</template>

<style scoped>
.Chinese {
  display: block;
  position: relative;
  transition: 5s ease transform;
  transform: translateY(0px);
  width: fit-content;
}
.Text {
  display: flex;
  p {
    margin: 0;
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
