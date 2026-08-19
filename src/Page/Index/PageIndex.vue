<script lang="ts" setup>
import IndexBanner from '@/Page/Index/IndexBanner.vue'
import IndexAbout from '@/Page/Index/About/IndexAboutMe.vue'
import TopBar from '@/components/TopBar.vue'
import IndexProjects from './ProJects/IndexProjects.vue'
import { onMounted, useTemplateRef } from 'vue'
import gsap from 'gsap'
import IndexContacts from './Contacts/IndexContacts.vue'
const moreDom = useTemplateRef('more')
onMounted(() => {
  const ob = new IntersectionObserver(
    (v) => {
      v.forEach((v) => {
        if (v.isIntersecting) {
          gsap.to(moreDom.value, {
            translateY: 0,
            opacity: 1,
          })
          ob.disconnect()
          return
        }
      })
    },
    { threshold: 0.1 },
  )
  ob.observe(moreDom.value!)
})
</script>

<template>
  <TopBar />
  <div class="page index">
    <IndexBanner />
    <div class="More" ref="more">
      <IndexAbout />
      <IndexProjects />
      <IndexContacts />
    </div>
  </div>
</template>
<style scoped>
.index {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.More {
  transform: translateY(100px);
  opacity: 0;
  box-sizing: border-box;
  padding: 1rem;
  height: fit-content;
  align-items: stretch;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}
</style>
