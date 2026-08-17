<script lang="ts" setup>
import IndexIntroduction from './IndexIntroduction.vue'
import JustAvatar from './JustAvatar.vue'
</script>
<template>
  <div class="Profile">
    <JustAvatar />
    <IndexIntroduction />
  </div>
</template>

<style scoped>
.Profile {
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 1rem;
}
</style>
