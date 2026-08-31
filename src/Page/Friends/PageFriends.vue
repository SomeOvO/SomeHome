<script lang="ts" setup>
import FriendsBanner from './FriendsBanner.vue'
import OneFriend from './OneFriend.vue'
import { onMounted, ref } from 'vue'
import type { ViewInfo } from '@/types.ts'
import { useCounterStore } from '@/stores/counter.ts'
const counter = useCounterStore()
const view = ref({} as ViewInfo)

function Select(v: ViewInfo) {
  if (counter.FirendsIsPlay) {
    return
  }
  view.value = v
}
const FriendsList = [
  {
    avat: 'https://plankbevelen.cn/img/avatar.webp',
    bio: '一个热爱技术的开发者，专注于有趣且实用的产品。在这里分享我的项目、想法和学习笔记',
    name: 'plankbevelen',
    url: 'https://plankbevelen.cn',
  },
  {
    name: 'Refactored',
    url: 'www.refact.cc',
    avat: 'https://www.refact.cc/avatar.png',
    bio: '「形体虽简单纯粹，却各自指向复杂性，并最终由复杂性相连。」',
  },
  {
    name: 'LYEy_isine个人博客',
    url: 'caiyifeng.top',
    avat: 'https://caiyifeng.top/assets/images/avatar.webp',
    bio: '花海无一日，少年踏自来',
  },
  {
    name: '紫血小站',
    url: 'blog.ziyibbs.com',
    avat: 'https://blog.ziyibbs.com/favicon/logo.png',
    bio: '人山人海人来人往,自尊自爱自由自在',
  },
  {
    name: '咖啡豆子coffee的小站',
    url: 'blog.kfdzcoffee.cn',
    avat: 'https://images.kfdzcoffee.cn/i/1/avatar.png',
    bio: '所有奇迹的始发点',
  },
  {
    name: '旺东自留地',
    url: 'wang618.cn',
    avat: 'https://wang618.cn/logo.gif',
    bio: '爱生活、爱摸鱼',
  },
]

const ViewList = ref([] as ViewInfo[])

onMounted(() => {
  const NewList = [] as ViewInfo[]
  NewList.push(...FriendsList)
  for (let i = 0; i < NewList.length; i++) {
    const j = Math.floor(Math.random() * NewList.length)
      ;[NewList[i], NewList[j]] = [NewList[j]!, NewList[i]!]
  }
  ViewList.value = NewList
})
</script>
<template>
  <FriendsBanner :view="view" />
  <div class="page friends">
    <OneFriend v-for="(v, i) in ViewList" @select="Select(v)" :key="i" :data="v" :-index="i" />
  </div>
</template>

<style scoped>
.friends {
  margin-top: 1rem;
  display: flex;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
</style>
