<script lang="ts" setup>
import { Get_Blog_List } from '@/Requset'
import gsap from 'gsap'
import { onMounted, ref, useTemplateRef } from 'vue'

const parser = new DOMParser()
type Blog = {
  Title: string
  Link: string
  Desc: string
  Time: string
}
const BlogList = ref<Blog[]>([])
const IsErr = ref(false)
const Dom = useTemplateRef('BlogDom')
onMounted(async () => {
  const Blog = await Get_Blog_List().catch((e) => {
    IsErr.value = true
    throw e
  })
  if (!Blog || Blog.status != 200) {
    IsErr.value = true
    return
  }
  const BlogText = await Blog.text()
  const dom = parser.parseFromString(BlogText, 'application/xml')
  const items = dom.querySelectorAll('item')
  items.forEach((v) => {
    const Blog = {} as Blog
    Blog.Title = v.children[0]?.textContent ?? ''
    Blog.Link = v.children[1]?.textContent ?? ''
    Blog.Desc = v.children[3]?.textContent ?? ''
    Blog.Time = v.children[4]?.textContent ?? ''
    BlogList.value!.push(Blog)
  })
  const ob = new IntersectionObserver((v) => {
    v.forEach((v) => {
      if (v.isIntersecting) {
        gsap.to(v.target, {
          opacity: 1,
          duration: 1,
        })
        ob.unobserve(v.target)
      }
    })
  })
  if (BlogList.value.length != 0) {
    setTimeout(() => {
      const doms = Dom.value!.children
      for (let i = 0; i < doms.length; i++) {
        ob.observe(doms.item(i)!)
      }
    }, 10)
  }
})

function Open(h: string) {
  const el = document.createElement('a')
  el.href = h
  el.target = '_blank'
  el.click()
}
</script>

<template>
  <div class="Myblogs" v-if="BlogList && !IsErr" ref="BlogDom">
    <div class="Blog" v-for="(v, i) in BlogList.slice(0, 10)" :key="i" @click="Open(v.Link)">
      <p>{{ v.Title }}</p>
    </div>
  </div>
  <div class="MyblogsErr" v-if="!IsErr && !BlogList">
    <h1>加载中</h1>
  </div>

  <div class="MyblogsErr" v-if="IsErr">
    <p>无法获取到数据</p>
    <p>您可能无法访问至<strong>vercel</strong></p>
    <i
      >数据来源于Vercel镜像站，您可直接访问<a href="https://blog.3mua.cn" target="_blank"
        >主站</a
      ></i
    >
  </div>
</template>

<style scoped>
.MyblogsErr {
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: #373944;
  }
  p {
    margin: 0;
  }
}
.Myblogs {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  box-sizing: border-box;
  gap: 1rem;
  flex: 1;
  justify-content: center;
}

.Blog {
  display: flex;
  flex-wrap: wrap;
  opacity: 0;
  justify-content: center;
  align-items: center;
  h2,
  p {
    margin: 0;
  }
  p {
    white-space: normal;
    word-break: break-all;
  }
}
</style>
