<script lang="ts" setup>
import FriendsBanner from './FriendsBanner.vue'
import OneFriend from './OneFriend.vue'
import { ref } from 'vue'
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
    avat: 'https://sakurasen.cn/imgs/avat.png',
    bg: '/Img/Friends/3mua.png',
    bio: '无限进步',
    name: 'SomeOvO',
  },
  {
    avat: 'https://sakurasen.cn/imgs/avat.png',
    bg: '/Img/Friends/32mua.png',
    bio: 'asdasdas',
    name: 'asdasd',
  },
]
</script>
<template>
  <FriendsBanner :view="view" />
  <div class="page friends">
    <OneFriend v-for="(v, i) in FriendsList" @select="Select(v)" :key="i" />
  </div>
</template>

<style scoped></style>
