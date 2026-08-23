export interface Project {
  name: string
  desc: string
  repo: string
  url: string
  star: string | number
  loaded: boolean
  fork: string | number
  github: string
}
export interface Contact {
  icon: string
  name: string
  info: string
  bc: string
  url: string
}
export interface SaiRenMusic {
  cid: string
  name: string
  albumCid: string
  sourceUrl: string
  lyricUrl: string
  mvUrl: string
  mvCoverUrl: string
  artists: string[]
}

export interface SaiRenalbum {
  cid: string
  name: string
  intro: string
  belong: string
  coverUrl: string
  coverDeUrl: string
  songs: {
    cid: string
    name: string
    artistes: string[]
  }[]
}

export type ViewInfo = {
  name: string
  bio: string
  avat: string
  bg: string
}
