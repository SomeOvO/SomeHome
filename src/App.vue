<script setup lang="ts">
// import PublicMuisc from './components/PublicComponenets/Music/PublicMuisc.vue'
import TopBar from './components/TopBar.vue'
</script>

<template>
  <TopBar />

  <!-- <PublicMuisc /> -->
  <div class="mainView">
    <RouterView />
  </div>
</template>

<style>
body {
  background-color: rgb(253, 253, 253);
  margin: 0;
}
.page {
  overflow: hidden;
  width: 100%;
}
.Model {
  flex: 1;
  background-color: rgb(255, 255, 255);
  box-shadow: #f0f0f0 0 0 5px;
  outline: #f5f5f5 1px solid;
  border-radius: 7px;
}
</style>
