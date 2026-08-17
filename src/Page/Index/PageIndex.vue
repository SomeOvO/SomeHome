<script lang="ts" setup>
import IndexBanner from '@/Page/Index/IndexBanner.vue'
import IndexAbout from '@/Page/Index/About/IndexAboutMe.vue'
import TopBar from '@/components/TopBar.vue'
</script>
<template>
  <TopBar />
  <div class="page index">
    <IndexBanner />
    <IndexAbout />
  </div>
</template>
<style scoped>
.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
