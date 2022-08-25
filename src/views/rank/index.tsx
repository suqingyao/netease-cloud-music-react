import { useEffect, useState } from 'react'
import Card from '@/components/card'
import { getToplist } from '@/service/playlist'
import { isSuccessResponse } from '@/utils/is'
import { RankContainer } from './style'

interface ListItem {
  name: string
}

function Rank() {
  const [list, setList] = useState<Array<ListItem>>([])

  useEffect(() => {
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
  }, [])

  return (
    <RankContainer>
      {list.map(item => (
        <div>{item.name}</div>
      ))}
    </RankContainer>
  )
}

export default Rank
