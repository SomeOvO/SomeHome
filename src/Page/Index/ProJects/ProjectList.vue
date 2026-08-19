<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import ProjectCard from '@/Page/Index/ProJects/PojectCard.vue'
const Projects = reactive([
  {
    name: 'SenHome',
    desc: '您目前所见的页面',
    repo: 'SomeOvO/SomeHome',
    url: '',
    star: '0',
    loaded: false,
    fork: '0',
    github: '',
  },
  {
    name: 'xhhRobot',
    desc: '一款类Grok的小黑盒机器人项目',
    repo: 'SomeOvO/xhhRobot',
    url: '',
    star: '0',
    fork: '0',
    loaded: false,
    github: '',
  },
  {
    name: 'Bmoji',
    desc: 'Bilibili 表情收集工具+网页',
    repo: 'SomeOvO/Bmoji',
    url: 'https://bmoji.3mua.cn',
    star: '0',
    fork: '0',
    loaded: false,
    github: '',
  },
])

onMounted(() => {
  Projects.forEach(async (v) => {
    const data = await fetch('https://api.github.scom/repos/' + v.repo).catch((e) => {
      return e
    })
    if (data.status != 200) {
      v.loaded = true
      v.star = '--'
      v.fork = '--'
      return
    }
    const resp = await data.json()
    v.star = resp.stargazers_count
    v.fork = resp.forks_count
    v.github = resp.html_url
    v.loaded = true
  })
})

// const Tip = () => {
//   alert('无法连接至Github服务器，请检查您的网络链接')
// }

//单个Project可以拆分为一个组件，下一次再做吧
</script>
<template>
  <div class="ProjectList">
    <!-- <div class="Project" v-for="(v, i) in Projects" :key="i">

    </div> -->
    <ProjectCard v-for="(v, i) in Projects" :-data="v" :key="i" />
  </div>
</template>

<style scoped>
.ProjectList {
  padding: 0.3rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  flex: 1;
  justify-content: space-around;
  flex-wrap: wrap;
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
}
</style>
