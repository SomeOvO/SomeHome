<script lang="ts" setup>
import { ref, type Ref } from 'vue'


class MoveUrl {
  Url: URL
  Time: Ref<number, number>
  constructor() {
    this.Url = new URL(window.location.href)
    this.Time = ref(3)
  }
  GetOld() {
    return this.Url.searchParams.get('f') ?? '你到底从哪来？'
  }
  GetNew() {
    return this.GetOld().replace('sakurasen.cn', '3mua.cn')
  }
}

const move = new MoveUrl()

// const timer = setInterval(() => {
//   if (move.Time.value == 0) {
//     clearInterval(timer)
//     window.location.href = move.GetNew()
//   } else {
//     move.Time.value--
//   }
// }, 1000);

</script>
<template>
  <div class="page newpage">
    <div class="mainview">
      <div class="titles">
        <h1>Oopz..</h1>
        <h1>我们正在迁移域名</h1>
      </div>
      <div class="banner">

        <h2>您所访问的</h2>
        <p class="url" href="">{{ move.GetOld() }}</p>
        <h2>将要被迁移至</h2>
        <a class="tourl" href="">{{ move.GetNew() }}</a>
        <p style="margin-top: 1rem;">只是将sakurasen换为3mua</p>
        <p style="margin-bottom: 1rem">{{ move.Time }}秒后将自动跳转</p>

        <button class="jump">现在就去</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.url {
  color: #2b2b2b;
}

.tourl {
  color: #ff3838;
}

.jump {
  outline: none;
  color: #0f0f0f;
  border-radius: 9px;
  font-weight: bold;
  font-size: 100%;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: #65ff7a;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
  transition: 0.3s;
}

.jump:hover {
  background-color: #74f385;
}

.url,
.tourl {
  font-weight: normal;
}

.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  overflow: hidden;

  h2 {
    font-size: 120%;
    margin: 0;
  }

  p,
  a {
    margin: 0;
    word-break: break-all;
    white-space: wrap;
  }
}

.mainview {
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.newpage {
  gap: 1rem;
  display: flex;
  width: 100dvw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
