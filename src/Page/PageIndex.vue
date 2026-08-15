<script lang="ts" setup>
import IndexBanner from '@/components/IndexBanner.vue'
import IndexLinks from '@/components/IndexLinks.vue'
import TopBar from '@/components/TopBar.vue'
</script>
<template>
  <TopBar />
  <div class="page index">
    <IndexBanner />
    <IndexLinks />
  </div>
</template>
<style scoped>
.index {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
