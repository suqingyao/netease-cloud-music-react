import request from '@/utils/request'
// 歌单分类
export function getPlaylistCatlist() {
  return request.get('/playlist/catlist')
}

// 热门歌单分类
export function getHotPlaylist() {
  return request.get('/playlist/hot')
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
  return request.get('/top/playlist', { params })
}

// 所有榜单
export function getToplist() {
  return request.get('/toplist')
}

/**
 * 获取歌单详情
 * @param id 歌单id
 * @param s 歌单最近收藏者，默认为8
 * @returns
 */
export function getPlaylistDetail(params: { id: string; s?: number }) {
  return request.get('/playlist/detail', { params })
}

/**
 * 获取歌单所有歌曲
 * @param params
 * @returns
 */
export function getPlaylistTrackAll(params: {
  id: string
  limit?: number
  offset?: number
}) {
  return request.get('/playlist/track/all', { params })
}

/**
 * 歌单详情动态
 * @param params
 * @returns
 */
export function getPlaylistDetailDynamic(params: { id: string }) {
  return request.get('/playlist/detail/dynamic', { params })
}
