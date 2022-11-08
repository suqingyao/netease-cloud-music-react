import { getBannerList } from '@/api'
import { getPersonalized } from '@/api/playlist'
import { Recommend } from '@/api/types/login-params'
import { useQuery } from 'react-query'

export const useRecommendQueryKey = () => 'recommend'
export const useBannersQueryKey = () => 'banners'

export const useRecommend = () => {
  return useQuery('recommend', getPersonalized)
}

export const useBanners = () => {
  return useQuery('banners', () => {
    getBannerList()
  })
}
