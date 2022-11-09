import { Loading } from '@/components/loading'
import Scroll from '@/components/scroll'
import { useArtist } from '@/hooks'
import { useState } from 'react'
import Tabs from './components/Tabs'
import { alphaTypes, categoryTypes } from './types'
function Singer() {
  let [category, setCategory] = useState('')
  let [alpha, setAlpha] = useState('')
  const [topForm, setTopForm] = useState({})
  const [artistForm, setArtistForm] = useState({})

  const { data, isLoading } = useArtist()

  let handleUpdateAlpha = (val: string) => {
    setAlpha(val)
  }

  let handleUpdateCategory = (val: string) => {
    setCategory(val)
  }

  let content

  if (isLoading) {
    content = <Loading />
  } else {
    content = (
      <Scroll wrapHeight="calc(100vh - 7.5rem)" direction={'vertical'}>
        <div className="flex flex-col gap-2 overflow-hidden">
          {data?.artists.map((item: any) => {
            return (
              <div key={item.id} className="flex items-center gap-2">
                <div className="w-15 h-15">
                  <img
                    src={`${item.picUrl}?param=300x300`}
                    alt="music"
                    className="w-full h-full object-cover rounded-2"
                  />
                </div>
                <span className="text-sm text-gray-2 font-medium">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </Scroll>
    )
  }

  return (
    <div className="px-2 fixed top-10 bottom-20 overflow-hidden">
      <Tabs
        list={categoryTypes}
        title="分类 (默认热门):"
        handleClick={handleUpdateCategory}
        oldVal={category}
      />
      <Tabs
        list={alphaTypes}
        title="首字母:"
        handleClick={(val: string) => handleUpdateAlpha(val)}
        oldVal={alpha}
      />
      {content}
    </div>
  )
}

export default Singer
