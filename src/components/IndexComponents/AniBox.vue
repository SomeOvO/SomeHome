<script lang="ts" setup>
import gsap from 'gsap'
import { onMounted, ref, useTemplateRef } from 'vue'
import { memesUrl } from '../constants'
import { useCounterStore } from '@/stores/counter'
const prop = defineProps<{
  FinalWord: string
  Time: number
  Size: number
  PreWords?: Array<string>
  DisPlayStartAnimation?: boolean
}>()

const WordList = prop.PreWords ?? ['S', 'O', 'M', 'E', 'O', 'V']
const Words = ref(['A', 'B', 'C', 'D', 'E', 'F'])
let stop = false
const GetRandWord = () => {
  if (stop) {
    return prop.FinalWord
  }
  return WordList[Math.floor(Math.random() * WordList.length)] ?? 'A'
}

function ChangeWord() {
  for (let i = 0; i < Words.value.length; i++) {
    Words.value[i] = GetRandWord()
  }
  if (aniOver.value) {
    return
  } else {
    setTimeout(() => {
      ChangeWord()
    }, 250)
  }
}

const dom = useTemplateRef('Dom')
const aniOver = ref(false)
const StartAni = () => {
  Suffer()
  if (prop.DisPlayStartAnimation) {
    aniOver.value = true
    Words.value = Words.value.map(() => prop.FinalWord)
    bglist.value = bglist.value.map(() => {
      return 'bg'
    })
    return
  }
  ChangeWord()
  const randStart = Math.random() * 1000
  const RealTime = Number(((prop.Time - randStart) / 8000).toFixed(2))
  const tl = gsap.timeline({ paused: true, repeatDelay: 0, delay: randStart / 1000 })
  tl.add(
    gsap.to(dom.value, {
      duration: RealTime,
      rotateX: 90,
      repeatDelay: 0,
    }),
  )
  tl.add(
    gsap.to(dom.value, {
      rotateY: 90,
      duration: RealTime,
      repeatDelay: 0,
    }),
  )
  tl.add(
    gsap.to(dom.value, {
      rotateX: 180,
      duration: RealTime,
      repeatDelay: 0,
    }),
  )
  tl.add(
    gsap.to(dom.value, {
      rotateY: 180,
      duration: RealTime,
      repeatDelay: 0,
    }),
  )
  tl.add(
    gsap.to(dom.value, {
      rotateX: 270,
      duration: RealTime,
      repeatDelay: 0,
    }),
  )
  tl.add(
    gsap.to(dom.value, {
      rotateY: 270,
      duration: RealTime,
      repeatDelay: 0,
    }),
  )
  tl.add(
    gsap.to(dom.value, {
      rotateX: 360,
      duration: RealTime,
      repeatDelay: 0,
    }),
  )
  tl.add(
    gsap.to(dom.value, {
      rotateY: 360,
      duration: RealTime,
      repeatDelay: 0,
    }),
  )
  tl.play()
  setTimeout(() => {
    tl.kill()
    gsap.set(dom.value, {
      rotateY: 0,
      repeatDelay: 0,
    })
    gsap.set(dom.value, {
      rotateX: 0,
      repeatDelay: 0,
    })

    setTimeout(() => {
      stop = true
      setTimeout(() => {
        bglist.value = bglist.value.map(() => {
          return 'bg'
        })
        aniOver.value = true
      }, 150)
    }, randStart)
  }, prop.Time)
}
onMounted(StartAni)

function BoxMove(v: MouseEvent | TouchEvent | PointerEvent) {
  const top = dom.value?.offsetTop ?? 0
  const left = dom.value?.offsetLeft ?? 0
  const Height = dom.value?.offsetHeight ?? 0
  const Width = dom.value?.offsetWidth ?? 0
  const X = left + Width / 2
  const Y = top + Height / 2
  const ClientX =
    (v as MouseEvent).pageX ??
    (v as TouchEvent).changedTouches[0]?.pageX ??
    (v as PointerEvent).pageX
  const ClientY =
    (v as MouseEvent).pageY ??
    (v as TouchEvent).changedTouches[0]?.pageY ??
    (v as PointerEvent).pageY
  if (aniOver.value) {
    gsap.to(dom.value, {
      delay: 0,
      rotateY: 80 * ((ClientX - X) / Width / 2),
    })
    gsap.to(dom.value, {
      delay: 0,
      rotateX: 80 * ((ClientY - Y) / Height / -2),
    })
  }
}

const bglist = ref(['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6'])

function Suffer() {
  for (let i = 0; i < bglist.value.length; i++) {
    const Rand = Math.floor(Math.random() * bglist.value.length)
    const temp = bglist.value[i]
    bglist.value[i] = bglist.value[Rand]!
    bglist.value[Rand] = temp!
  }
}

const counter = useCounterStore()
const play = counter.PublicPlay
const MouseDown = () => {
  if (!aniOver.value) {
    return
  }
  if (counter.sound) {
    const memes = memesUrl
    const RandNum = Math.floor(Math.random() * memes.length)
    play('/Audio/memes/' + (memes[RandNum] ?? 'ciallo.mp3'))
  }
  gsap.to(dom.value, {
    scale: 0.5,
    duration: 0.3,
  })
}

const MouseUp = () => {
  gsap.to(dom.value, {
    duration: 0.3,
    scale: 1,
  })
}
</script>

<template>
  <div
    class="AnimationBox"
    @mousemove="BoxMove"
    @touchmove="BoxMove"
    @mousedown="MouseDown"
    @mouseup="MouseUp"
    @mouseleave="MouseUp"
    :style="{ '--size': prop.Size + 'dvw', '--font': prop.Size - 1 + 'dvw' }"
  >
    <div class="cubeBox" ref="Dom">
      <div class="bottom wall" :class="bglist[0]">
        <span>{{ Words[0] }}</span>
      </div>
      <div class="top wall" :class="bglist[2]">
        <span>{{ Words[1] }}</span>
      </div>
      <div class="back wall" :class="bglist[3]">
        <span>{{ Words[2] }}</span>
      </div>
      <div class="left wall" :class="bglist[4]">
        <span>{{ Words[3] }}</span>
      </div>
      <div class="right wall" :class="bglist[5]">
        <span>{{ Words[4] }}</span>
      </div>
      <div class="front wall" :class="bglist[1]">
        <span>{{ Words[5] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.AnimationBox {
  --solid: 5px;
  background-color: transparent;
}
@media (width <600px) {
  .AnimationBox {
    --solid: 1px !important;
  }
}
.AnimationBox {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  transition: 0.5s;
}
.AnimationBox:hover {
  .wall {
    border: #000000 var(--solid) solid;
  }
}
.cubeBox {
  width: var(--size);
  height: var(--size);
  transform: rotateX(0deg) rotateY(0deg);
  animation: rotateCube 10s infinite linear;
  position: relative;
  transform-style: preserve-3d;
}
@keyframes in {
  0% {
    scale: 0;
  }
  100% {
    scale: 1;
  }
}
.wall {
  transition: 0.5s;
  width: var(--size);
  position: absolute;
  top: 0;
  left: 0;
  height: var(--size);
  border: #000000 1px solid;
  background-color: var(--bg);
  transform-style: preserve-3d;
  transform-origin: center center;
  animation: in 0.5s ease;
  span {
    position: relative;
    left: 50%;
    top: 45%;
    display: block;
    text-align: center;
    user-select: none;
    font-size: var(--font);
  }
}
.bg {
  background-color: #ffffffe8;
}
.bg1 {
  background-color: #b9ffbd;
}
.bg2 {
  background-color: #e9ffc5;
}
.bg3 {
  background-color: #c5dcff;
}
.bg4 {
  background-color: #c5fffa;
}
.bg5 {
  background-color: #c5fdff;
}
.bg6 {
  background-color: #fffbc5;
}
.bottom {
  transform: rotateX(90deg) translateZ(calc(var(--size) / -2));
  span {
    transform: translate(-50%, -50%) scale(1, -1);
  }
}
.top {
  transform: rotateX(90deg) translateZ(calc(var(--size) / 2));
  span {
    transform: scale(1, 1) translate(-50%, -50%);
  }
}
.back {
  transform: translateZ(calc(var(--size) / -2));
  span {
    transform: scale(1, 1) translate(-50%, -50%);
  }
}
.left {
  transform: rotateY(90deg) translateZ(calc(var(--size) / -2));
  span {
    transform: translate(-50%, -50%) scaleX(-1);
  }
}
.right {
  transform: rotateY(90deg) translateZ(calc(var(--size) / 2));
  span {
    transform: scale(1, 1) translate(-50%, -50%);
  }
}
.front {
  transform: translateZ(calc(var(--size) / 2));
  span {
    transform: scale(1, 1) translate(-50%, -50%);
  }
}
</style>
