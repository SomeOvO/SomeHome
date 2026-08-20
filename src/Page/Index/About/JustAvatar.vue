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
  width: 15rem;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  height: fit-content;
  background-color: #dadada;
  display: flex;
}
.Cover::after {
  position: absolute;
  content: '';
  background-color: #fff;
  left: 0;
  width: var(--width);
  top: 0;
  height: 100%;
  box-shadow: #fff 0 0 8px;
}
img {
  width: 100%;
  position: relative;
}
</style>
