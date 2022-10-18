import Scroll from '@/components/scroll'
import { useMount } from '@/hooks'
import { useAppDispatch, useAppSelector } from '@/store'
import { getTopArtistsData } from '@/store/slice/singer'
import { useState } from 'react'
import Tabs from './components/Tabs'
import { alphaTypes, categoryTypes } from './types'
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

  useMount(() => {
    dispatch(getTopArtistsData(topForm))
  })

  return (
    <div className="px-10px py-15px fixed top-50px bottom-100px w-full overflow-hidden">
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
        <div className="flex flex-col m-auto overflow-hidden">
          {selector.artists.map((item: any) => {
            return (
              <div
                key={item.id}
                className="flex flex-row my-5px px-5px items-center"
              >
                <div mr-20px>
                  <img
                    src={`${item.picUrl}?param=300x300`}
                    alt="music"
                    className="
                    w-full
                    h-full
                    object-cover
                    rounded-1
                    w50px
                    h50px"
                  />
                </div>
                <span className="text-sm text-gray-4 font-medium">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </Scroll>
    </div>
  )
}

export default Singer
