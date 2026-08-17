<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
console.log(counter.sound)
</script>
<template>
  <div class="sound">
    <img
      src="/icon/soundclose.svg"
      alt=""
      v-show="!counter.sound"
      @click="counter.SoundControl(true)"
    />
    <img
      src="/icon/soundopen.svg"
      alt=""
      v-show="counter.sound"
      @click="counter.SoundControl(false)"
    />
  </div>
</template>

<style scoped>
.sound {
  display: flex;
  height: 100%;
  img {
    height: 100%;
    overflow: hidden;
  }
}
</style>
