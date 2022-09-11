import Loading from '@/components/loading'
import { getToplist, getToplistDetail } from '@/api/playlist'
import { RankWrapper } from './style'
import { useEffect, useMemo, useState } from 'react'
import Scroll from '@/components/scroll'
import OfficialRank from './components/OfficialRank'
import GlobalRank from './components/GlobalRank'

function Rank() {
  const [list, setList] = useState<Array<any>>([])
  const [loadingVisible, setLoadingVisible] = useState(false)

  function getTopList() {
    getToplistDetail()
      .then((res: any) => {
        setList(res.list)
      })
      .catch(err => {
        console.error('🚀 ~ file: index.tsx ~ line 21 ~ useEffect ~ err', err)
      })
      .finally(() => {
        setLoadingVisible(false)
      })
  }

  useEffect(() => {
    setLoadingVisible(true)
    getTopList()
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
