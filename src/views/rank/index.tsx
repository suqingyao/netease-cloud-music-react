import Loading from '@/components/loading'
import { getToplist } from '@/api/playlist'
import { isSuccessResponse } from '@/utils/is'
import { List, ListItem, RankWrapper } from './style'
import { useEffect, useState } from 'react'
import Album from '../recommend/components/Album'
import Scroll from '@/components/scroll'

function Rank() {
  const [list, setList] = useState<Array<any>>([])
  const [loadingVisible, setLoadingVisible] = useState(false)

  function getTopList() {
    getToplist()
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

  return (
    <RankWrapper>
      <Scroll wrapHeight="calc(100vh - 180px)" direction={'vertical'}>
        <List>
          {list.map(item => (
            <ListItem key={item.id}>
              <div className="img-wrapper">
                <img src={item.coverImgUrl} alt="cover" />
              </div>
              <span>{item.name}</span>
            </ListItem>
          ))}
        </List>
      </Scroll>
      <Loading visible={loadingVisible} />
    </RankWrapper>
  )
}

export default Rank
