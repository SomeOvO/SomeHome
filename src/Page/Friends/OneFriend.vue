<script lang="ts" setup>
defineEmits(['select'])
</script>

<template>
  <div class="Friend" @click="$emit('select')">
    <img src="https://sakurasen.cn/imgs/avat.png" alt="" />
    <div class="info">
      <h2>SomeOvO</h2>
      <p>#个人博客</p>
    </div>
  </div>
</template>

<style scoped>
.Friend {
  display: flex;
  height: 8rem;
  overflow: hidden;
  width: 16rem;
  img {
    height: 100%;
  }
}
</style>
