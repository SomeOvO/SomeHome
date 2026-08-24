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
          boxShadow: '#59eb89 0 0 7px',
          direction: 1,
        })
      } else {
        gsap.to(root.value, {
          boxShadow: '#ff7b7b 0 0 7px',
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
    boxShadow: '#ff7b7b 0 0 7px',
    direction: 1,
  })
}
</script>

<template>
  <div class="Friend" @click="!loadErr ? $emit('select') : ''" ref="root">
    <img :src="data.avat" v-show="loaded" alt="" v-on:error="LoadErr" ref="img" />
    <div class="info" ref="Dom">
      <h2>{{ data.name }}</h2>
      <p>{{ data.bio }}</p>
      <p v-if="loadErr" class="Err">无法访问</p>
    </div>
  </div>
</template>

<style scoped>
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
  padding: 0 0.2rem;
}
.Friend {
  box-shadow: #c9c8c8 0 0 0px;
  border-radius: 12px;
  display: flex;
  height: 6rem;
  overflow: hidden;
  width: 16rem;
  h2 {
    font-size: 90%;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 85%;
  }
  img {
    position: relative;
    z-index: 1;
    border-radius: 12px;
    height: 100%;
  }
}
</style>
