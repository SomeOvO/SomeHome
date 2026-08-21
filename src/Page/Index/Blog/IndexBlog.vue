<script lang="ts" setup>
import PublicTitle from '@/components/PublicComponenets/PublicTitle.vue'
import MyBlogs from './MyBlogs.vue'
</script>
<template>
  <div class="IndexBlog Model">
    <PublicTitle -desc="一些博客文章" -title="博客动态" -english="Blog" />
    <MyBlogs />
  </div>
</template>

<style scoped>
.IndexBlog {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
