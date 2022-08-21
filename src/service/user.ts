import { get } from '@/utils/http'

export function userinfo() {
  return get('/userinfo')
}
