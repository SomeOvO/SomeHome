export const Get_Music_List = async () => {
  const data = fetch('https://b.sakurasen.cn/api/myapi/v1/sairen/list')
  return (await data).json()
}

export const Get_Music_Data = async (id: string) => {
  const data = fetch('https://b.sakurasen.cn/api/myapi/v1/sairen/song?id=' + id)
  return (await data).json()
}

export const Get_Music_album = async (id: string) => {
  const data = fetch('https://b.sakurasen.cn/api/myapi/v1/sairen/album?id=' + id)
  return (await data).json()
}
