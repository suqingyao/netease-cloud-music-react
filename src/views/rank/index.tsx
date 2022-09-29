import Loading from '@/components/loading'
import Scroll from '@/components/scroll'
import { useMount } from '@/hooks'
import { useAppDispatch, useAppSelector } from '@/store'
import { getRankListData } from '@/store/slice/rank'
import { useMemo, useState } from 'react'
import GlobalRank from './components/GlobalRank'
import OfficialRank from './components/OfficialRank'
import { RankWrapper } from './style'

function Rank() {
  const [list, setList] = useState<Array<any>>([])
  const [loadingVisible, setLoadingVisible] = useState(false)

  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.rank)

  useMount(() => {
    setLoadingVisible(true)
    !(async () => {
      try {
        await dispatch(getRankListData())
        setList(selector.list)
      } catch (err) {
        console.log(err)
      } finally {
        setLoadingVisible(false)
      }
    })()
  })

  const officialList = useMemo(
    () => list.filter(item => item.ToplistType),
    [list]
  )

  const globalList = useMemo(
    () => list.filter(item => !item.ToplistType),
    [list]
  )

  return (
    <RankWrapper>
      <Scroll wrapHeight="calc(100vh - 180px)" direction={'vertical'}>
        <OfficialRank list={officialList} />
        <GlobalRank list={globalList} />
      </Scroll>
      <Loading visible={loadingVisible} />
    </RankWrapper>
  )
}

export default Rank
