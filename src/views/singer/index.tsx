import Tabs from './components/Tabs'
import { alphaTypes, categoryTypes } from './types'
import { getArtistList, getTopArtists } from '@/api/artist'
import { List, ListItem, SingerWrapper } from './style'
import { useEffect, useState } from 'react'
import Scroll from '@/components/scroll'
import LoadingV2 from '@/components/loadingv2'
function Singer() {
  let [category, setCategory] = useState('')
  let [alpha, setAlpha] = useState('')
  const [topForm, setTopForm] = useState({})
  const [artistForm, setArtistForm] = useState({})

  let handleUpdateAlpha = (val: string) => {
    setAlpha(val)
  }

  let handleUpdateCategory = (val: string) => {
    setCategory(val)
  }

  const [singerList, setSingerList] = useState([])

  useEffect(() => {
    getTopArtists(topForm)
      .then((res: any) => {
        const artists = res.artists
        setSingerList(artists)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    getArtistList(artistForm).then(res => {
      console.log('🚀 ~ file: index.tsx ~ line 38 ~ getArtistList ~ res', res)
    })
  }, [artistForm])

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

      <Scroll wrapHeight="calc(100vh - 240px)" direction={'vertical'}>
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
          <LoadingV2 />
        </List>
      </Scroll>
    </SingerWrapper>
  )
}

export default Singer
