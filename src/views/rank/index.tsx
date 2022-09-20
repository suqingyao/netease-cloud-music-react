import Loading from '@/components/loading'
import { getToplistDetail } from '@/api/playlist'
import { RankWrapper } from './style'
import { useEffect, useMemo, useState } from 'react'
import Scroll from '@/components/scroll'
import OfficialRank from './components/OfficialRank'
import GlobalRank from './components/GlobalRank'
import { useAppDispatch, useAppSelector } from '@/store'
import { getRankListData } from '@/store/slice/rank'

function Rank() {
  const [list, setList] = useState<Array<any>>([])
  const [loadingVisible, setLoadingVisible] = useState(false)

  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.rank)
  useEffect(() => {
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
  }, [])

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
