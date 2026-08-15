<script lang="ts" setup>
import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'
import SoundControl from './SoundControl.vue'

const Dom = useTemplateRef('TopBar')
const DomCover = useTemplateRef('TopBarCover')
const Ani = () => {
  const tl = gsap.timeline()
  tl.add(
    gsap.to(DomCover.value, {
      width: '100%',
    }),
  )
  tl.add(
    gsap.to(Dom.value, {
      width: '100%',
    }),
  )
  tl.add(
    gsap.to(Dom.value, {
      backgroundColor: '#fff',
      padding: '0.5rem',
      height: '2.5rem',
    }),
  )
  tl.add(
    gsap.to(DomCover.value, {
      height: 0,
    }),
  )
  tl.add(
    gsap.to(Dom.value?.getElementsByClassName('Contents')[0]!, {
      opacity: 1,
    }),
  )
}
onMounted(() => {
  Ani()
})
</script>
<template>
  <div class="IndexTopbar">
    <div class="cover" ref="TopBarCover"></div>

    <div class="Topbar" ref="TopBar">
      <div class="Contents">
        <h1>SomeOvO</h1>
        <div class="Buttons">
          <span><SoundControl /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  --height: 3rem;
}
.IndexTopbar {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: var(--height);
  z-index: 9999;
}

.cover {
  width: 0;
  height: var(--height);
  right: 0;
  top: 0;
  background-color: #020202;
  z-index: 1;
  position: relative;
}
.Topbar {
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #bdbdbd;
  width: 0;
  height: var(--height);
  box-sizing: border-box;
  position: absolute;
  .Contents {
    height: 100%;
    opacity: 0;
    display: flex;
    width: 100%;
    h1 {
      margin: 0;
      font-size: 100%;
    }
    .Buttons {
      display: flex;
      gap: 1rem;
      margin-left: auto;
      margin-right: 0.5rem;
    }
  }
}
</style>
