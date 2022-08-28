/*
 * @Author: cully fung
 * @Date: 2022-08-21 10:54:11
 * @LastEditTime: 2022-08-28 17:54:29
 * @LastEditors: cully fung
 * @Description:
 */
import Album from '@/components/album'
import { getToplist } from '@/service/playlist'
import { isSuccessResponse } from '@/utils/is'
import { ListItem } from './types'
import { RankContainer } from './style'
import { useEffect, useState } from 'react'
import Loading from '@/components/loading'

function Rank() {
  const [list, setList] = useState<Array<ListItem>>([])
  const [loadingVisible, setLoadingVisible] = useState(false)

  function getTopList() {
    getToplist()
      .then(res => {
        const data = res.parseBody as any
        if (!isSuccessResponse(data)) {
          return
        }
        console.log('🚀 ~ file: index.tsx ~ line 14 ~ getToplist ~ data', data)
        setList(data.list)
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
