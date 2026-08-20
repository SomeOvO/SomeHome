<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'
import ContactCard from './ContactCard.vue'

const List = [
  {
    icon: '/icon/contact/steam.png',
    name: 'Steam',
    info: '1211290823',
    bc: '#5079f2',
    url: 'https://steamcommunity.com/id/SakuraSenQwQ/',
  },
  {
    icon: '/icon/contact/qq.png',
    name: 'QQ群',
    info: '629616100',
    bc: '#ed5645',
    url: 'https://jq.qq.com/?_wv=1027&k=G2D7IA7x',
  },
  {
    icon: '/icon/contact/wechat.png',
    name: 'Wechat',
    info: 'SomeOwO',
    bc: '#43d177',
    url: 'SomeOwO',
  },
  {
    icon: '/icon/contact/net.png',
    name: '网易云',
    info: '叁睦Some',
    bc: '#d14543',
    url: 'https://music.163.com/#/user/home?id=2031695727',
  },
  {
    icon: '/icon/contact/bili.png',
    name: 'BiliBIli',
    info: '叁睦Some',
    bc: '#f56c89',
    url: 'https://space.bilibili.com/2141698114',
  },
]

const dom = useTemplateRef('ContactList')

const Ani = () => {
  setTimeout(() => {
    dom.value?.scrollTo({
      left: dom.value!.scrollWidth,
      behavior: 'smooth',
    })
  }, 1000)

  setTimeout(() => {
    dom.value?.scrollTo({
      left: dom.value!.scrollWidth / 3,
      behavior: 'smooth',
    })
  }, 2000)
}

onMounted(() => {
  const ob = new IntersectionObserver(
    (v) => {
      v.forEach((v) => {
        if (v.isIntersecting) {
          Ani()
          ob.disconnect()
        }
      })
    },
    { threshold: 0.5 },
  )
  ob.observe(dom.value!)
})
</script>
<template>
  <div class="ContactList" ref="ContactList">
    <ContactCard v-for="(v, i) in List" :key="i" :info="v" />
  </div>
</template>

<style scoped>
.ContactList {
  width: 100%;
  gap: 1rem;
  align-items: center;
  box-sizing: border-box;
  height: 7rem;
  overflow-x: scroll;
  scrollbar-width: none;
  justify-content: space-around;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  display: flex;
}
</style>
