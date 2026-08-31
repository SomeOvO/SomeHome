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
    NowView.value.name = prop.view.name
    NowView.value.bio = prop.view.bio
    NowView.value.url = prop.view.url
    tl.add(
      gsap.to(DomRoot.value, {
        backgroundImage: `url(${NowView.value.avat})`,
      }),
    )
    tl.add(
      gsap.to(DomCover.value, {
        translateX: '100%',
      }),
    )
  })

  tl.then().then(() => {
    counter.FirendsIsPlay = false
    GoTO(NowView.value.url)
  })
}

function GoTO(url: string) {
  if (url.slice(0, 4) != 'http') {
    url = 'https://' + url
  }
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  a.click()
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
    <div class="Cover" ref="Cover">
      <h1>正在前往{{ prop.view.name }}</h1>
    </div>
    <div class="Info" v-if="!isView">
      <h1>友情链接</h1>
      <div class="control">
        <a href="https://blog.sakurasen.cn/post/friendlink/" target="_blank">联系/申请</a>
      </div>
    </div>
    <div class="View" v-if="isView">
      <h1>{{ NowView.name }}</h1>
      <p>{{ NowView.bio }}</p>
    </div>
  </div>
</template>

<style scoped>
.Info {
  h1 {
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    color: #88ffa6;
  }
}

.control {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }
}

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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #252525;
  width: 0%;
  height: 100%;
  overflow: hidden;

  h1 {
    white-space: pre;
  }
}

.FriendsBanner {
  background-color: #353535;
  overflow: hidden;
  position: relative;
  padding-top: 2.5rem;
  display: flex;
  justify-content: center;
  height: 30dvh;
  align-items: center;
  background-size: 20dvw;
  background-repeat: repeat;
  background-position: center center;
  color: #fff;
  flex-direction: column;
  box-shadow: #252525 0 2px 12px;
}
</style>
