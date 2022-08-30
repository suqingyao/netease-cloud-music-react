import { get } from '@/utils/http'

/**
 * 搜索
 * @param params
 * @returns
 */
export function searchByKeywords(params: { keywords: string; limit?: number }) {
  return get('/cloudsearch', params)
}

/**
 * 默认搜索关键词
 * @returns
 */
export function getSearchDefault() {
  return get('/search/default')
}

/**
 * 热搜列表(简略)
 * @returns
 */
export function getSearchHot() {
  return get('/search/hot')
}

/**
 * 热搜列表(详细)
 * @returns
 */
export function getSearchHotDetail() {
  return get('/search/hot/detail')
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
  return get('/search/suggest', params)
}
