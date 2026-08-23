<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import type { ViewInfo } from '@/types'
import gsap from 'gsap'
import { ref, useTemplateRef, watch } from 'vue'
const isView = ref(false)
const prop = defineProps<{ view: ViewInfo }>()
const DomCover = useTemplateRef('Cover')
const DomRoot = useTemplateRef('Root')
const NowView = ref({} as ViewInfo)
const counter = useCounterStore()
async function View() {
  counter.FirendsIsPlay = true
  const tl = gsap.timeline()
  if (isView.value) {
    gsap.set(DomCover.value, {
      translateX: 0,
      width: 0,
    })
  }
  tl.add(
    gsap.to(DomCover.value, {
      width: '100%',
    }),
  ).call(() => {
    isView.value = true
    NowView.value.avat = prop.view.avat
    NowView.value.bg = prop.view.bg
    NowView.value.name = prop.view.name
    NowView.value.bio = prop.view.bio
    tl.add(
      gsap.to(DomRoot.value, {
        backgroundImage: `url(${NowView.value.bg})`,
      }),
    )
    tl.add(
      gsap.to(DomCover.value, {
        translateX: '100%',
      }),
    )
  })

  tl.then().then(() => (counter.FirendsIsPlay = false))
}

watch(prop, () => {
  if (counter.FirendsIsPlay) {
    return
  } else {
    View()
  }
})
</script>

<template>
  <div class="FriendsBanner" ref="Root">
    <div class="Cover" ref="Cover"></div>
    <div class="Info" v-if="!isView">
      <h1>友情链接</h1>
    </div>
    <div class="View" v-if="isView">
      <h1>{{ NowView.name }}</h1>
      <p>{{ NowView.bio }}</p>
    </div>
  </div>
</template>

<style scoped>
.View {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background-color: #00000038;
  backdrop-filter: blur(6px);
}

.Cover {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #252525;
  width: 0%;
  height: 100%;
}
.FriendsBanner {
  background-color: #7e7e7e;
  overflow: hidden;
  position: relative;
  padding-top: 2.5rem;
  display: flex;
  justify-content: center;
  height: 30dvh;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center center;
  color: #fff;
  flex-direction: column;
}
</style>
