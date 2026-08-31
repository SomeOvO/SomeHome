<script lang="ts" setup>
import type { ViewInfo } from '@/types'
import gsap from 'gsap'
import { onMounted, ref, useTemplateRef } from 'vue'

defineEmits(['select'])
const loadErr = ref(false)
const prop = defineProps<{ data: ViewInfo; Index: number }>()
const Dom = useTemplateRef('Dom')
const root = useTemplateRef('root')
const img = useTemplateRef('img')
const loaded = ref(false)
onMounted(() => {
  gsap
    .fromTo(
      Dom.value,
      {
        translateX: '-100%',
      },
      {
        delay: prop.Index * 0.2,
        translateX: '0',
      },
    )
    .then()
    .then(() => {
      if (!loadErr.value) {
        gsap.to(root.value, {
          boxShadow: 'var(--suces) 0 0 3px',
          direction: 1,
        })
      } else {
        gsap.to(root.value, {
          boxShadow: 'var(--error) 0 0 3px',
          direction: 1,
        })
      }
    })
  img.value!.onload = () => {
    loaded.value = true
  }
})

function LoadErr() {
  loadErr.value = true
  gsap.to(root.value, {
    boxShadow: 'var(--error) 0 0 3px',
    direction: 1,
  })
}
const viewDom = useTemplateRef("view")
function BoxMove(v: MouseEvent | TouchEvent | PointerEvent) {
  const top = viewDom.value?.offsetTop ?? 0
  const left = viewDom.value?.offsetLeft ?? 0
  const Height = viewDom.value?.offsetHeight ?? 0
  const Width = viewDom.value?.offsetWidth ?? 0
  const X = left + Width / 2
  const Y = top + Height / 2
  const ClientX =
    (v as MouseEvent).pageX ??
    (v as TouchEvent).changedTouches[0]?.pageX ??
    (v as PointerEvent).pageX
  const ClientY =
    (v as MouseEvent).pageY ??
    (v as TouchEvent).changedTouches[0]?.pageY ??
    (v as PointerEvent).pageY
  console.log((ClientX - X) / Width / 2)
  gsap.to(root.value, {
    delay: 0,
    rotateY: 60 * ((ClientX - X) / (Width / 2)),
  })
  gsap.to(root.value, {
    delay: 0,
    rotateX: 70 * ((ClientY - Y) / (Height / -2)),
  })
}
function BoxOut() {
  gsap.to(root.value, {
    rotateY: 0,
    rotateX: 0
  })
}
</script>

<template>
  <div class="view" @mousemove="BoxMove" @click="!loadErr ? $emit('select') : ''" ref="view" @mouseleave="BoxOut">
    <div class="Friend" ref="root">
      <img :src="data.avat" v-show="loaded" alt="" v-on:error="LoadErr" ref="img" />
      <div class="info" ref="Dom">
        <h2>{{ data.name }}</h2>
        <p>{{ data.bio }}</p>
        <p v-if="loadErr" class="Err">无法访问</p>
      </div>
    </div>
  </div>
</template>
<style>
:root {
  --suces: #59eb89;
  --error: #ff7b7b;
}
</style>
<style scoped>
.view {
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center center;
  perspective: 500px;
}

.Err {
  color: #ff0101;
}

.info {
  display: flex;
  position: relative;
  z-index: 0;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0.2rem;
}


.Friend {
  transform-origin: center center;
  perspective: 1900px;
  transform-style: preserve-3d;
  box-shadow: #c9c8c8 0 0 0px;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  height: 6.5rem;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  width: 16rem;

  h2 {
    font-size: 90%;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 80%;
  }

  img {
    position: relative;
    z-index: 1;
    background-color: #fff;
    border-radius: 12px;
    height: 100%;
  }
}
</style>
