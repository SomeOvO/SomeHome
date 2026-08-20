<script lang="ts" setup>
import type { Project } from '@/types'
import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'

defineProps<{ Data: Project }>()

const dom = useTemplateRef('Cover')
const rootDom = useTemplateRef('root')
function Ani() {
  const tl = gsap.timeline({ delay: 0, repeatDelay: 0 })
  tl.add(
    gsap.to(dom.value, {
      opacity: 0,
      duration: 1,
    }),
  )

  tl.add(
    gsap.to(rootDom.value, {
      duration: 1,
      backgroundColor: '#fdfdfd',
    }),
    '>',
  )
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
    { threshold: 0.9 },
  )
  ob.observe(dom.value!)
})

const tips = () => {
  alert('您的网络似乎无法访问GithubAPI\nhttps://api.github.com\n怎么回事呢')
}
</script>
<template>
  <div class="ProjectCard Project" ref="root">
    <div class="Cover" ref="Cover"></div>
    <h2>{{ Data.name }}</h2>
    <p>{{ Data.desc }}</p>
    <div class="Github">
      <img src="/icon/star.svg" alt="" />
      <i v-if="Data.loaded">{{ Data.star }}</i>
      <img src="/icon/loading.svg" alt="" class="loading" v-if="!Data.loaded" />
      <img src="/icon/fork.svg" alt="" />
      <i v-if="Data.loaded">{{ Data.fork }}</i>
      <img src="/icon/loading.svg" alt="" class="loading" v-if="!Data.loaded" />

      <div class="notload" v-if="Data.star === '--' || Data.fork === '--'" @click="tips">
        <img src="/icon/question-circle.svg" alt="无法连接至Github服务器" class="Notload" />
      </div>
    </div>
    <div class="links">
      <a v-if="Data.url" :href="Data.url" target="_blank">访问链接</a>
      <a v-if="Data.github" :title="Data.github" :href="Data.github" target="_blank">Github</a>
    </div>
    <div class="Gayhub">
      <img src="/icon/github-fill.svg" style="user-select: none" draggable="false" alt="" />
    </div>
  </div>
</template>

<style scoped>
.Cover {
  pointer-events: none;
  z-index: 5;
  background-color: #fdfdfd;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
h2 {
  font-size: 110%;
  margin: 0;
}
p {
  margin: 0;
  position: relative;
  z-index: 2;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
}
.Github {
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  img {
    transform: translateY(1px);
    width: 1rem;
    user-select: none;
  }
  i {
    margin-left: 0.2rem;
    font-weight: bold;
    margin-right: 1rem;
  }
}
.links {
  margin-top: auto;
  display: flex;
  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  gap: 0.5rem;
}
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.notload {
  position: relative;
  z-index: 2;
  cursor: pointer;
  display: flex;
}
.loading {
  animation: loading 1s ease-out infinite;
}
.Gayhub {
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 0.1;
  right: 0;
  overflow: hidden;
  z-index: -1;
  z-index: 0;
  img {
    pointer-events: none;

    height: 100%;
  }
}
.Project {
  border-radius: 4px;
  width: 14rem;
  height: 7rem;
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
}
</style>
