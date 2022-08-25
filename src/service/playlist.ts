import { get } from '@/utils/http'

// 歌单分类
export function getPlaylistCatlist() {
  return get('/playlist/catlist')
}

// 热门歌单分类
export function getHotPlaylist() {
  return get('/playlist/hot')
}

// 歌单 ( 网友精选碟 )
export function getTopPlaylist(
  params: {
    order?: 'new' | 'hot'
    cat?: '华语' | '古风' | '欧美' | '流行' | '全部'
    limit?: number
    offset?: number
  } = {}
) {
  return get('/top/playlist', params)
}

// 所有榜单
export function getToplist() {
  return get('/toplist')
}
