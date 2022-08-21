import { get } from '@/utils/http'

// 歌单分类
export function getPlaylistCatlist(params: any) {
  return get('/playlist/catlist', params)
}
