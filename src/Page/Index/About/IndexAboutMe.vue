<script lang="ts" setup>
import PublicTitle from '@/components/PublicComponenets/PublicTitle.vue'
import ProFile from './ProFile.vue'
</script>
<template>
  <div class="IndexAbout Model" id="Links">
    <PublicTitle -title="关于我" -english="AboutME" -desc='"U29tZU92T+WIsOatpOS4gOa4uAo="' />
    <ProFile />
  </div>
</template>

<style scoped>
.IndexAbout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
