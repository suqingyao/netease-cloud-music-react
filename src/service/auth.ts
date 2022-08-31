import request from '@/utils/request'

export function login(params: any) {
  return request.post('/login', params)
}

export function logout(params: any) {
  return request.post('/logout', params)
}
