<script lang="ts" setup>
import { RandomWords } from './constants.ts'
import AniTitle from './IndexComponents/AniTitle.vue'

const words = RandomWords
</script>
<template>
  <div class="IndexBanner">
    <AniTitle -word="SomeOvO" :-size="10" :-time="3000" :-words="words" />
    <AniTitle -word="康神开播了" :-size="6" :-time="3000" :-display="true" />
  </div>
</template>

<style scoped>
.IndexBanner {
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
</style>
