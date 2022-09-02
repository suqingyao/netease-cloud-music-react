import request from '@/utils/request'

/**
 * 获取轮播图
 * @param params
 * @returns
 */
export function getBannerList(params: { type?: number }) {
  return request.get('/banner', { params })
}
