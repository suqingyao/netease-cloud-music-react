import request from '@/utils/request'

/**
 * 获取音乐 url - 新版
 * @param params
 * @returns
 */
export function getSongUrl(params: {
  id: string
  level: 'standard' | 'exhigh' | 'lossless' | 'hires'
}): Promise<any> {
  return request.get('/song/url/v1', { params })
}

/**
 * 音乐是否可用
 * @param params
 * @returns
 */
export function getCheckMusic(params: { id: string }): Promise<any> {
  return request.get('/check/music', { params })
}
