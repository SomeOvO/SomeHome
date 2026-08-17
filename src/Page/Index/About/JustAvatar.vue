<script lang="ts" setup>
import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'
const dom = useTemplateRef('Cover')
const domimg = useTemplateRef('Img')
onMounted(() => {
  const ob = new IntersectionObserver(
    (Items) => {
      Items.map((v) => {
        if (v.isIntersecting) {
          Ani()
        }
      })
    },
    { threshold: 0.8 },
  )
  ob.observe(dom.value!)
})

const Ani = () => {
  const tl = gsap.timeline()
  tl.add(
    gsap.to(dom.value, {
      '--width': 0,
      boxShadow: '#000 0 0 0',
    }),
  )
  tl.add(
    gsap.to(domimg.value, {
      translateX: 0,
    }),
    '<+=0.1',
  )
}
</script>

<template>
  <div class="Cover" :style="{ '--width': '100%' }" ref="Cover">
    <img
      src="https://sakurasen.cn/imgs/avat.png"
      alt=""
      ref="Img"
      style="transform: translateX(100%)"
    />
  </div>
</template>

<style scoped>
.Cover {
  width: fit-content;
  position: relative;
  box-shadow: #707070 0 0 3px;
  background-color: #747474;
  height: fit-content;
  display: flex;
  overflow: hidden;
}
.Cover::after {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  height: 100%;
  width: var(--width);
  background-color: #050505;
  box-shadow: #fff 0 0 8px;
}
img {
  width: 20rem;
  position: relative;
}
</style>
