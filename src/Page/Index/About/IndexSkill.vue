<script lang="ts" setup>
import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'

const Dom = useTemplateRef('Sk')

function Ani() {
  Dom.value?.childNodes.forEach((v, i) => {
    setTimeout(() => {
      const tl = gsap.timeline()
      tl.add(
        gsap.to(v, {
          '--op': 1,
        }),
      )
      tl.add(
        gsap.to(v, {
          '--br': 'blur(2px)',
        }),
        '>',
      )
      tl.add(
        gsap.to(v, {
          '--br': 'blur(1px)',
        }),
        '>',
      )
    }, 200 * i)
  })
}
onMounted(() => {
  const ob = new IntersectionObserver(
    (v) => {
      v.forEach((v) => {
        if (v.isIntersecting) {
          Ani()
          ob.disconnect()
          return
        }
      })
    },
    { threshold: 0.5 },
  )
  if (Dom.value) {
    ob.observe(Dom.value)
  }
})
</script>

<template>
  <div class="Skills" ref="Sk">
    <i class="Skill" :style="{ '--color': '#41b883', '--op': 0, '--br': 'blur(0)' }">Vue</i>
    <i class="Skill" :style="{ '--color': '#00ADD8', '--op': 0, '--br': 'blur(0)' }">Go</i>
    <i class="Skill" :style="{ '--color': '#3d95ba', '--op': 0, '--br': 'blur(0)' }">PostgreSQL</i>
    <i class="Skill" :style="{ '--color': '#f55045', '--op': 0, '--br': 'blur(0)' }">Redis</i>
    <i class="Skill" :style="{ '--color': '#e34c26', '--op': 0, '--br': 'blur(0)' }">HTML</i>
    <i class="Skill" :style="{ '--color': '#f1e05a', '--op': 0, '--br': 'blur(0)' }">JavaScript</i>
    <i class="Skill" :style="{ '--color': '#663399', '--op': 0, '--br': 'blur(0)' }">CSS</i>
  </div>
</template>

<style scoped>
.Skills {
  overflow: hidden;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.Skill {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.Skill::before {
  opacity: var(--op);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0.3rem;
  box-shadow: #000 0 0 2px;
  filter: var(--br);
  content: '';
  background-color: var(--color);
}
</style>
