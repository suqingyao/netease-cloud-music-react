import request from '@/utils/request'

export function userinfo(): Promise<any> {
  return request.get('/userinfo')
}
