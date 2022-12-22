import Loading from '@/components/loading'
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

  const handleUpdateAlpha = (val: string) => {
    setAlpha(val)
  }

  const handleUpdateCategory = (val: string) => {
    setCategory(val)
  }

  return (
    <div className="px-2 fixed top-10 bottom-20 overflow-hidden bg-white">
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
      {isLoading ? (
        <Loading />
      ) : (
        <Scroll wrapHeight="calc(100vh - 10rem)" direction={'vertical'}>
          <div className="flex flex-col gap-2 overflow-hidden">
            {data?.artists.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-2 pb-1 border-b-1"
                >
                  <div className="w-15 h-15">
                    <img
                      src={`${item.picUrl}?param=300x300`}
                      alt="music"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              )
            })}
          </div>
        </Scroll>
      )}
    </div>
  )
}

export default Singer
