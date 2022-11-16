import request from '@/utils/request'
import { LoginParams } from '@/api/types'

/**
 * 手机登录
 * @param params
 * @returns
 */
export function login(params: LoginParams) {
  return request.get('/login/cellphone', { params, withCredentials: true })
}

/**
 * 退出登录
 * @returns
 */
export function logout() {
  return request.get('/logout')
}

/**
 * 发送验证码
 * @param params
 * @returns
 */
export function sendCaptcha(params: { phone: string; ctcode?: string }) {
  return request.get('/captcha/sent', { params })
}

/**
 * 验证验证码
 * @param params
 * @returns
 */
export function verifyCaptcha(params: {
  phone: string
  captcha: string
  ctcode?: string
}) {
  return request.get('/captcha/verify', { params })
}
