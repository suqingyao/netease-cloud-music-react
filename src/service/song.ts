import { get } from '@/utils/http'

/**
 * 获取音乐 url - 新版
 * @param params
 * @returns
 */
export function getSongUrl(params: {
  id: string
  level?: 'standard' | 'exhigh' | 'lossless' | 'hires'
}) {
  return get('/song/url/v1', params)
}

/**
 * 音乐是否可用
 * @param params
 * @returns
 */
export function getCheckMusic(params: { id: string }) {
  return get('/check/music', params)
}
