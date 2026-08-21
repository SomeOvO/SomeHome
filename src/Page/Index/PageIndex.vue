<script lang="ts" setup>
import IndexBanner from '@/Page/Index/IndexBanner.vue'
import IndexAbout from '@/Page/Index/About/IndexAboutMe.vue'
import TopBar from '@/components/TopBar.vue'
import IndexProjects from './ProJects/IndexProjects.vue'
import { onMounted, useTemplateRef } from 'vue'
import gsap from 'gsap'
import IndexContacts from './Contacts/IndexContacts.vue'
import IndexTapText from './TapText/IndexTapText.vue'
import IndexFooter from './Footer/IndexFooter.vue'
import IndexBlog from './Blog/IndexBlog.vue'
const moreDom = useTemplateRef('more')
const contactDOm = useTemplateRef('contact')
const TapTextDom = useTemplateRef('TapText')
onMounted(() => {
  const ob = new IntersectionObserver(
    (v) => {
      v.forEach((v) => {
        if (v.isIntersecting) {
          gsap.to(v.target, {
            translateY: 0,
            opacity: 1,
          })
          ob.unobserve(v.target)
          return
        }
      })
    },
    { threshold: 0.1 },
  )
  ob.observe(moreDom.value!)
  ob.observe(TapTextDom.value!)
  ob.observe(contactDOm.value!)
})
</script>

<template>
  <TopBar />
  <div class="page index">
    <IndexBanner />
    <div class="Solo" ref="TapText">
      <IndexTapText />
    </div>
    <div class="More" ref="more">
      <IndexAbout />
      <IndexProjects />
      <IndexMusic />
      <IndexBlog />
    </div>
    <div class="Solo" ref="contact" style="opacity: 1">
      <IndexContacts />
    </div>
  </div>
  <IndexFooter />
</template>
<style scoped>
.index {
  position: relative;
  z-index: 2;
  padding: 0 1rem;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;
}
.More {
  padding: 0.5rem 0;
  transform: translateY(100px);
  opacity: 0;
  box-sizing: border-box;
  height: fit-content;
  align-items: stretch;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}
.Solo {
  opacity: 0;
  padding: 0.5rem 0;
  width: 100%;
  transform: translateY(100px);
  box-sizing: border-box;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}
</style>
