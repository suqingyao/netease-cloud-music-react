import request from '@/utils/request'

/**
 * 搜索
 * @param params
 * @returns
 */
export function searchByKeywords(params: {
  keywords: string
  limit?: number
}): Promise<any> {
  return request.get('/cloudsearch', { params })
}

/**
 * 默认搜索关键词
 * @returns
 */
export function getSearchDefault(): Promise<any> {
  return request.get('/search/default')
}

/**
 * 热搜列表(简略)
 * @returns
 */
export function getSearchHot(): Promise<any> {
  return request.get('/search/hot')
}

/**
 * 热搜列表(详细)
 * @returns
 */
export function getSearchHotDetail(): Promise<any> {
  return request.get('/search/hot/detail')
}

/**
 * 搜索建议
 * @param params
 * @returns
 */
export function getSearchSuggest(params: {
  keywords: string
  type?: 'mobile'
}): Promise<any> {
  return request.get('/search/suggest', { params })
}
