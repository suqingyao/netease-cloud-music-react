import LoadingV2 from '@/components/loadingv2/LoadingV2'
import Scroll from '@/components/scroll'
import Tabs from './components/Tabs'
import { alphaTypes, categoryTypes } from './types'
import { getArtistList } from '@/api/artist'
import { getTopArtistsData } from '@/store/slice/singer'
import { List, ListItem, SingerWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect, useState } from 'react'
function Singer() {
  let [category, setCategory] = useState('')
  let [alpha, setAlpha] = useState('')
  const [topForm, setTopForm] = useState({})
  const [artistForm, setArtistForm] = useState({})

  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.singer)

  let handleUpdateAlpha = (val: string) => {
    setAlpha(val)
  }

  let handleUpdateCategory = (val: string) => {
    setCategory(val)
  }

  const [singerList, setSingerList] = useState([])

  useEffect(() => {
    !(async () => {
      await dispatch(getTopArtistsData(topForm))
      setSingerList(selector.artists)
    })()
  }, [singerList.length])

  useEffect(() => {
    getArtistList(artistForm).then(res => {})
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
          <LoadingV2 visible={false} />
        </List>
      </Scroll>
    </SingerWrapper>
  )
}

export default Singer
