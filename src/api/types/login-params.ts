export interface LoginParams {
  phone: string
  password: string
  countrycode?: number
  md5_password?: string
  captcha?: string
}

export interface Recommend {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}
