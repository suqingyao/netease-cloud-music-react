import { get, post } from '@/utils/http'

export function login(params: any) {
  return post('', params)
}

export function logout(params: any) {
  return post('/logout', params)
}
