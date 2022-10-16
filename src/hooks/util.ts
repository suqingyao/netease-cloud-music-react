import { useAppDispatch, useAppSelector } from '@/store'
import {
  getBannerListData,
  getRecommendListData
} from '@/store/slice/recommend'
import { useMount } from '.'

export const useRecommend = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.recommend)
  useMount(() => {
    dispatch(getBannerListData())
    dispatch(getRecommendListData())
  })

  return {
    banners: selector.banners,
    recommendList: selector.recommendList
  }
}
