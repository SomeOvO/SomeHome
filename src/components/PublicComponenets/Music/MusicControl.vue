<script lang="ts" setup>
defineProps<{ TotalTime: number; LeftTime: number }>()
</script>

<template>
  <div class="MusicControl">
    <div class="TimeBar"></div>
    <div class="ControlButton">
      <span>Play</span>
      <span>Pause</span>
      <span>After</span>
      <span>Next</span>
    </div>
  </div>
</template>
<style scoped>
.TimeBar {
  width: 100%;
  height: 2px;
  background-color: #585858;
}
.MusicControl {
  display: flex;
  flex-direction: column;
}
</style>
