import request from '@/utils/request'

export function userinfo() {
  return request.get('/userinfo')
}
