<script lang="ts" setup></script>

<template>
  <div class="Myblogs">
    <div class="Blog" v-for="v in 10" :key="v">
      <p>Go RTMP服务器研究</p>
      <p>2026-01-02</p>
    </div>
  </div>
</template>

<style scoped>
.Myblogs {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  box-sizing: border-box;
  gap: 1rem;
  flex: 1;
  justify-content: center;
}

.Blog {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h2,
  p {
    margin: 0;
  }
  p {
    white-space: pre;
  }
}
</style>
