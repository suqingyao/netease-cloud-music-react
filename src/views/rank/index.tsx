/*
 * @Author: cully fung
 * @Date: 2022-08-21 10:54:11
 * @LastEditTime: 2022-08-26 16:22:06
 * @LastEditors: cully fung
 * @Description:
 */
import Album from '@/components/album'
import { getToplist } from '@/service/playlist'
import { isSuccessResponse } from '@/utils/is'
import { ListItem } from './types'
import { RankContainer } from './style'
import { useEffect, useState } from 'react'

function Rank() {
  const [list, setList] = useState<Array<ListItem>>([])

  function getTopList() {
    getToplist()
      .then(res => {
        const data = res.parseBody as any
        if (!isSuccessResponse(data)) {
          console.log(
            '🚀 ~ file: index.tsx ~ line 11 ~ getToplist ~ data',
            data
          )
          return
        }
        console.log('🚀 ~ file: index.tsx ~ line 14 ~ getToplist ~ data', data)
        setList(data.list)
      })
      .catch(err => {
        console.error('🚀 ~ file: index.tsx ~ line 21 ~ useEffect ~ err', err)
      })
  }

  useEffect(() => {
    getTopList()
  }, [])

  return (
    <RankContainer>
      {list.map(item => (
        <Album key={item.id} title={item.name} img={item.coverImgUrl}></Album>
      ))}
    </RankContainer>
  )
}

export default Rank
