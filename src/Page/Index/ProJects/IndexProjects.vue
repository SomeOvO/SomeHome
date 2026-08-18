<script lang="ts" setup>
import PublicTitle from '@/components/PublicComponenets/PublicTitle.vue'
import ProjectList from './ProjectList.vue'
</script>

<template>
  <div class="IndexProjects">
    <PublicTitle :-title="'我的项目'" :-desc="'见笑了'" -english="ProJects" />
    <ProjectList />
  </div>
</template>

<style scoped>
.IndexProjects {
  display: flex;
  flex: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  box-shadow: #000 0 0 2px;
}
</style>
