<script lang="ts" setup>
import IndexBanner from '@/Page/Index/IndexBanner.vue'
import IndexAbout from '@/Page/Index/About/IndexAboutMe.vue'
import TopBar from '@/components/TopBar.vue'
import IndexProjects from './ProJects/IndexProjects.vue'
</script>
<template>
  <TopBar />
  <div class="page index">
    <IndexBanner />
    <div class="More">
      <IndexAbout />
      <IndexProjects />
    </div>
  </div>
</template>
<style scoped>
.index {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.More {
  box-sizing: border-box;
  padding: 1rem;
  height: fit-content;
  align-items: stretch;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}
</style>
