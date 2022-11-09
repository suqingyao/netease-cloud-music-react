import { getBannerList } from '@/api/modules/base'
import { getPersonalized, getToplistDetail } from '@/api/modules/playlist'
import { getTopArtists } from '@/api/modules/artist'

import { useQuery } from '@tanstack/react-query'

export const useRecommend = () => {
  return useQuery(['recommend'], () =>
    Promise.all([getPersonalized(), getBannerList({ type: 2 })])
  )
}

export const useRank = () => {
  return useQuery(['rank'], () => getToplistDetail())
}

export const useArtist = (params?: { limit?: number; offset?: number }) => {
  return useQuery(['artists', params], () => getTopArtists(params))
}
