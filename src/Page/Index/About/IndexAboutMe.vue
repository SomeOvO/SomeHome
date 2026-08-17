<script lang="ts" setup>
import PublicTitle from '@/components/PublicComponenets/PublicTitle.vue'
import ProFile from './ProFile.vue'
</script>
<template>
  <PublicTitle -title="关于我" -english="AboutME" -desc='"U29tZU92T+WIsOatpOS4gOa4uAo="' />
  <div class="IndexAbout" id="Links">
    <ProFile />
  </div>
</template>

<style scoped>
.IndexAbout {
  display: flex;
  width: 100%;
  flex-direction: column;
}
</style>
