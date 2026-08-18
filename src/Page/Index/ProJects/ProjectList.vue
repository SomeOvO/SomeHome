<script lang="ts" setup>
import { onMounted, reactive } from 'vue'

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
    const data = await fetch('https://api.github.com/repos/' + v.repo).catch((e) => {
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

const Tip = () => {
  alert('无法连接至Github服务器，请检查您的网络链接')
}
</script>
<template>
  <div class="ProjectList">
    <div class="Project" v-for="(v, i) in Projects" :key="i">
      <h2>{{ v.name }}</h2>
      <p>{{ v.desc }}</p>
      <div class="Github">
        <img src="/icon/star.svg" alt="" />
        <i v-if="v.loaded">{{ v.star }}</i>
        <img src="/icon/loading.svg" alt="" class="loading" v-if="!v.loaded" />
        <img src="/icon/fork.svg" alt="" />
        <i v-if="v.loaded">{{ v.fork }}</i>
        <img src="/icon/loading.svg" alt="" class="loading" v-if="!v.loaded" />

        <div class="notload" @click="Tip()" v-if="v.star === '--' || v.fork === '--'">
          <img src="/icon/question-circle.svg" alt="无法连接至Github服务器" class="Notload" />
        </div>
      </div>
      <div class="links">
        <a v-if="v.url" :href="v.url" target="_blank">访问链接</a>
        <a v-if="v.github" :title="v.github" :href="v.github" target="_blank">Github</a>
      </div>
      <div class="Gayhub">
        <img src="/icon/github-fill.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.notload {
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
  img {
    height: 100%;
  }
}
.Project {
  outline: #686868 solid 1px;
  box-shadow: #686868 0 0 4px;
  border-radius: 4px;
  width: 15rem;
  height: 8rem;
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
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
.Github {
  display: flex;
  align-items: center;
  img {
    transform: translateY(1px);
    width: 1rem;
  }
  i {
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
</style>
