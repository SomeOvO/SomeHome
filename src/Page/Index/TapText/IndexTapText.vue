<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const List = [
  "Sun's up, another day goes by",
  '還ろう 僕らが 目指した 未来へ',
  "I don't wanna have to wake up from this dream",
  'so, everything that makes me whole...今君に捧げよう',
  'え？うそ？私 天才じゃないの？',
  "Why am I playing with time as it's ticking away?",
  '生活一圈圈日子一年年',
]

const Display = ref('')
function GetRand() {
  return Math.floor(Math.random() * List.length)
}
onMounted(() => {
  const Rand = GetRand()
  Display.value = List[Rand]!
  setTimeout(() => {
    Reduce(Rand)
  }, 3000)
})

function Reduce(RandNum: number) {
  let num = List[RandNum]!.length
  const timer = setInterval(() => {
    if (num > 0) {
      num -= 1
      if (List[RandNum]![num] === ' ') {
        num -= 1
      }
      Display.value = List[RandNum]!.slice(0, num)
    } else {
      clearInterval(timer)
      let rand = 0
      while (true) {
        rand = Math.floor(Math.random() * List.length)
        if (List.length === 1 || !List) {
          break
        }
        if (rand != RandNum) {
          break
        }
      }
      Increase(rand)
    }
  }, 150)
}
function Increase(RandNum: number) {
  let num = 0
  const timer = setInterval(() => {
    if (num < List[RandNum]!.length) {
      if (List[RandNum]![num] === ' ') {
        num += 1
      }
      num += 1
      Display.value = List[RandNum]!.slice(0, num)
    } else {
      clearInterval(timer)
      setTimeout(() => {
        Reduce(RandNum)
      }, 2000)
    }
  }, 100)
}
</script>

<template>
  <div class="IndexTapText Model">
    <h1>{{ Display }}</h1>
  </div>
</template>

<style scoped>
.IndexTapText {
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  h1 {
    font-size: clamp(0.8rem, 5vw, 5rem);
    padding: 1rem;
    box-sizing: border-box;
    color: #fff;
  }
}
</style>
