import Scroll from '@/components/scroll'
import { useAppDispatch, useAppSelector } from '@/store'
import { getRankListData } from '@/store/slice/rank'
import { useMount } from 'ahooks'
import { useMemo } from 'react'
import GlobalRank from './components/GlobalRank'
import OfficialRank from './components/OfficialRank'

function Rank() {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.rank)

  useMount(() => {
    dispatch(getRankListData())
  })

  const officialList = useMemo(
    () => selector.list.filter((item: any) => item.ToplistType),
    [selector.list]
  )

  const globalList = useMemo(
    () => selector.list.filter((item: any) => !item.ToplistType),
    [selector.list]
  )

  return (
    <div>
      <Scroll wrapHeight="calc(100vh - 7.5rem)" direction={'vertical'}>
        <OfficialRank list={officialList} />
        <GlobalRank list={globalList} />
      </Scroll>
    </div>
  )
}

export default Rank
