import { defineStore } from 'pinia'
import { ref } from 'vue'
const KillAudio = (Audio: HTMLAudioElement) => {
  Audio.pause()
  Audio.src = ''
  Audio.load()
}

const AudioC: HTMLAudioElement[] = []

export const useCounterStore = defineStore('counter', () => {
  const GetLocalSoundStat = localStorage.getItem('sound')
  const sound = ref<boolean>()
  if (GetLocalSoundStat && GetLocalSoundStat === 'owo') {
    sound.value = true
  } else {
    sound.value = false
  }
  const SoundControl = (Open: boolean) => {
    if (Open) {
      localStorage.setItem('sound', 'owo')
      sound.value = true
    } else {
      localStorage.setItem('sound', 'ovo')
      sound.value = false
      AudioC.map((v) => {
        v.pause()
        v.src = ''
      })
    }
  }

  const CreateAudioPipe = (MaxNum: number, Speed?: number) => {
    const Audios = [] as HTMLAudioElement[]
    return function (Src: string) {
      if (Src === '') {
        Audios.map((v) => KillAudio(v))
        Audios.splice(0, Audios.length)
        return
      }
      if (Audios.length + 1 > MaxNum) {
        if (Audios[0]) {
          const audio = Audios[0]
          KillAudio(audio)
          Audios.shift()
        }
      }
      const NewAudio = new Audio(Src)
      Audios.push(NewAudio)
      NewAudio.volume = 0.5
      if (Speed) {
        NewAudio.playbackRate = Speed
      }
      AudioC.push(NewAudio)
      console.log(Audios)
      NewAudio.play()
    }
  }
  const PublicPlay = CreateAudioPipe(3)

  return { SoundControl, sound, PublicPlay, CreateAudioPipe }
})
