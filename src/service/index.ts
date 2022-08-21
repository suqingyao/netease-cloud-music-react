import { get } from '@/utils/http'

export function getBannerList(params?: any) {
  return get('/banner', params)
}
