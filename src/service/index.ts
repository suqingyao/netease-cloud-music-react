import request from '@/utils/request'

export function getBannerList() {
  return request.get('/banner')
}
