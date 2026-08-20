<script lang="ts" setup>
import { type Contact } from '@/types'

defineProps<{ info: Contact }>()
function Open(url: string) {
  if (url.slice(0, 4) === 'http') {
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.click()
  } else {
    navigator.clipboard.writeText(url)
    alert('已复制\n' + url)
  }
}
</script>
<template>
  <div class="ContactCard" :style="{ '--color': info.bc }" @click="Open(info.url)">
    <h1 class="title">{{ info.info }}</h1>
    <h1 class="name">{{ info.name }}</h1>
    <img :src="info.icon" alt="" />
  </div>
</template>

<style scoped>
.ContactCard {
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 7rem;
  min-width: 15rem;
  scroll-snap-align: center;
  background-color: var(--color);
  position: relative;
  .title {
    margin: 0;
    font-size: 2.3rem;
    color: #fff;
    text-shadow: #000000 0 0 3px;
    z-index: 2;
  }
  .name {
    transform: skew(10deg, 0deg);
    color: #494949;
    margin: 0;
    right: 0.2rem;
    bottom: 0;
    font-size: 1.6rem;
    position: absolute;
    z-index: 0;
  }
  img {
    z-index: 1;
    opacity: 0.3;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>
