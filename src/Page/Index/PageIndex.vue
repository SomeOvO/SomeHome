<script lang="ts" setup>
import IndexBanner from '@/Page/Index/IndexBanner.vue'
import IndexAbout from '@/Page/Index/About/IndexAboutMe.vue'
import TopBar from '@/components/TopBar.vue'
import IndexProjects from './ProJects/IndexProjects.vue'
import { onMounted, useTemplateRef } from 'vue'
import gsap from 'gsap'
import IndexContacts from './Contacts/IndexContacts.vue'
import IndexTapText from './TapText/IndexTapText.vue'
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
    </div>
    <div class="Solo" ref="contact">
      <IndexContacts />
    </div>
  </div>
  <div class="Footer">
    <div class="Content">
      <h1>这里是备案号</h1>
    </div>
  </div>
</template>
<style scoped>
.Footer {
  box-sizing: border-box;
  z-index: 0;
  position: fixed;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  bottom: 2rem;
  left: 0;
  .Content {
    color: #fff;
    margin: 1rem;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #000;
  }
}
.index {
  position: relative;
  z-index: 2;
  background-color: #fff;
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;
}
.More {
  transform: translateY(100px);
  opacity: 0;
  box-sizing: border-box;
  padding: 0 1rem;
  height: fit-content;
  align-items: stretch;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}
.Solo {
  opacity: 0;
  width: 100%;
  transform: translateY(100px);
  box-sizing: border-box;
  padding: 1rem 1rem;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}
</style>
