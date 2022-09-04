import Scroll from '@/components/scroll'
import Tabs from './components/Tabs'
import { alphaTypes, categoryTypes } from './types'
import { getArtistList, getTopArtists } from '@/api/artist'
import { List, ListItem, SingerWrapper } from './style'
import { useEffect, useState } from 'react'
function Singer() {
  let [category, setCategory] = useState('')
  let [alpha, setAlpha] = useState('')

  let handleUpdateAlpha = (val: string) => {
    console.log('🚀 ~ file: index.tsx ~ line 12 ~ handleUpdateAlpha ~ val', val)
    setAlpha(val)
  }

  let handleUpdateCategory = (val: string) => {
    console.log(
      '🚀 ~ file: index.tsx ~ line 17 ~ handleUpdateCategory ~ val',
      val
    )
    setCategory(val)
  }

  const [singerList, setSingerList] = useState([])

  useEffect(() => {
    getTopArtists()
      .then((res: any) => {
        console.log('🚀 ~ file: index.tsx ~ line 30 ~ useEffect ~ res', res)
        const artists = res.artists
        setSingerList(artists)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    getArtistList().then(res => {
      console.log('🚀 ~ file: index.tsx ~ line 38 ~ getArtistList ~ res', res)
    })
  }, [])

  return (
    <SingerWrapper>
      <Tabs
        list={categoryTypes}
        title="分类 (默认热门):"
        handleClick={handleUpdateCategory}
        oldVal={category}
      ></Tabs>
      <Tabs
        list={alphaTypes}
        title="首字母:"
        handleClick={(val: string) => handleUpdateAlpha(val)}
        oldVal={alpha}
      ></Tabs>

      {/* <Scroll> */}
      <List>
        {singerList.map((item: any) => {
          return (
            <ListItem key={item.id}>
              <div className="img_wrapper">
                <img
                  src={`${item.picUrl}?param=300x300`}
                  width="100%"
                  height="100%"
                  alt="music"
                />
              </div>
              <span className="name">{item.name}</span>
            </ListItem>
          )
        })}
      </List>
      {/* </Scroll> */}
    </SingerWrapper>
  )
}

export default Singer
