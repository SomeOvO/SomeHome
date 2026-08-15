<script lang="ts" setup>
import AniBox from './AniBox.vue'

const prop = defineProps<{
  Word: string
  Size: number
  Time: number
  Words?: Array<string>
  Display?: boolean
}>()
</script>
<template>
  <div class="rows">
    <div class="group">
      <AniBox
        v-for="(v, i) in prop.Word"
        :-final-word="v"
        :-time="Time"
        :-size="Size"
        :key="i"
        :-pre-words="Words"
        :-dis-play-start-animation="Display"
      />
    </div>
  </div>
</template>

<style scoped>
.rows {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .group {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  padding: 0.5rem;
  box-sizing: border-box;
}
</style>
