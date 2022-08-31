import request from '@/utils/request'

/**
 * 搜索
 * @param params
 * @returns
 */
export function searchByKeywords(params: { keywords: string; limit?: number }) {
  return request.get('/cloudsearch', { params })
}

/**
 * 默认搜索关键词
 * @returns
 */
export function getSearchDefault() {
  return request.get('/search/default')
}

/**
 * 热搜列表(简略)
 * @returns
 */
export function getSearchHot() {
  return request.get('/search/hot')
}

/**
 * 热搜列表(详细)
 * @returns
 */
export function getSearchHotDetail() {
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
}) {
  return request.get('/search/suggest', { params })
}
