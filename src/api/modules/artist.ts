import request from '@/utils/request'

/**
 * 获取热门歌手
 * @param params
 * @returns
 */
export function getTopArtists(params?: {
  limit?: number
  offset?: number
}): Promise<any> {
  return request.get('/top/artists', { params })
}
/**
 * 获取歌手分类列表
 * @param params
 * @returns
 */
export function getArtistList(params?: {
  limit?: number
  offset?: number
  initial?: string
  type?: -1 | 1 | 2 | 3
  area?: -1 | 7 | 96 | 8 | 16 | 0
}): Promise<any> {
  return request.get('/artist/list', { params })
}

/**
 * 获取歌手榜
 * @param params
 * @returns
 */
export function getToplistArtist(params: {
  type?: 1 | 2 | 3 | 4
}): Promise<any> {
  return request.get('/toplist/artist', { params })
}
