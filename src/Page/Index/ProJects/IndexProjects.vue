<script lang="ts" setup>
import PublicTitle from '@/components/PublicComponenets/PublicTitle.vue'
import ProjectList from './ProjectList.vue'
</script>

<template>
  <div class="IndexProjects Model">
    <PublicTitle :-title="'我的项目'" :-desc="'没几个因为我很懒不知道写什么'" -english="ProJects" />
    <ProjectList />
  </div>
</template>

<style scoped>
.IndexProjects {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
</style>
