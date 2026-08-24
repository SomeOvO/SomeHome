<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import MusicControl from './MusicControl.vue'
const MusicInfo = reactive({
  TotalTime: 0,
  LeftTime: 0,
})

const A = new Audio()
A.addEventListener('timeupdate', () => {
  MusicInfo.LeftTime = A.currentTime
})
function Play(src: string) {
  A.src = src
  A.onloadeddata = () => {
    MusicInfo.TotalTime = A.duration
    console.log(A.duration)
  }
}

//歌词

//控制

//播放

//列表
onMounted(() => {
  Play(
    'https://res01.hycdn.cn/6cb5c94de764f2c2e372c98d72753b7c/6A8B322B/siren/audio/20260728/67f16055aeed1d8281178e8389199f3a.wav',
  )
})
</script>
<template>
  <div class="PublicMuisc">
    <span @click="A.play()">点我Play </span>
    <MusicControl :-total-time="MusicInfo.TotalTime" :-left-time="MusicInfo.LeftTime" />
  </div>
</template>

<style scoped>
.PublicMuisc {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99999;
}
</style>
