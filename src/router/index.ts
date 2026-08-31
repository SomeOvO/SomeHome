import PageFriends from '@/Page/Friends/PageFriends.vue'
import PageIndex from '@/Page/Index/PageIndex.vue'
import PageNewPage from '@/Page/NewPage/PageNewPage.vue'
import gsap from 'gsap'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: PageIndex },
    { path: '/friends', component: PageFriends },
    { path: '/oopz', component: PageNewPage },
  ],
})
router.beforeEach(async () => {
  await gsap.to('.mainView', {
    opacity: 0,
    duration: 0.3,
  })
  return
})
let title = document.title
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = '别走TAT'
  } else {
    document.title = title
  }
})
router.afterEach(() => {
  title = document.title
  gsap.to('.mainView', {
    opacity: 1,
    duration: 0.2,
  })
})

export default router
