import GlobalRank from './components/GlobalRank'
import Loading from '@/components/loading'
import OfficialRank from './components/OfficialRank'
import Scroll from '@/components/scroll'
import { getRankListData } from '@/store/slice/rank'
import { RankWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect, useMemo, useState } from 'react'

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
  }, [list.length])

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
