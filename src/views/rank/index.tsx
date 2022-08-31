import Album from '@/components/album'
import Loading from '@/components/loading'
import { getToplist } from '@/service/playlist'
import { isSuccessResponse } from '@/utils/is'
import { ListItem } from './types'
import { RankContainer } from './style'
import { useEffect, useState } from 'react'

function Rank() {
  const [list, setList] = useState<Array<ListItem>>([])
  const [loadingVisible, setLoadingVisible] = useState(false)

  function getTopList() {
    getToplist()
      .then((res: any) => {
        if (!isSuccessResponse(res)) {
          return
        }
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

  return (
    <RankContainer>
      {list.map(item => (
        <Album key={item.id} title={item.name} img={item.coverImgUrl}></Album>
      ))}
      <Loading visible={loadingVisible} />
    </RankContainer>
  )
}

export default Rank
