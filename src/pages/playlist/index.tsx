import Loading from '@/components/loading'
import PlayBar from '@/components/play-bar'
import Rotate from '@/components/transition/rotate'
import Scroll from '@/components/scroll'
import TopBar from '@/layout/components/top-bar'
import { usePlayerActions } from '@/store'
import { getCount } from '@/utils'
import { getSongUrl } from '@/api'
import { useNavigate, useParams } from 'react-router-dom'
import { usePlayListDetail } from '@/hooks'
import { memo, useState } from 'react'
import {
  PlayIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ShareIcon
} from '@heroicons/react/24/solid'

function Playlist() {
  const navigate = useNavigate()
  const param = useParams()
  const [showStatus, setShowStatus] = useState(true)

  const { data: playList, isLoading } = usePlayListDetail({
    id: param.id ?? ''
  })

  const handleClick = () => {
    setShowStatus(false)
  }

  const { play } = usePlayerActions()

  const handlePlay = async (song: any) => {
    const res = await getSongUrl({
      id: song?.id,
      level: 'standard'
    })
    const author = song?.ar.map((item: { name: string }) => item.name).join('/')
    play({
      src: res?.data[0]?.url,
      cover: song?.al?.picUrl,
      name: song?.name,
      author
    })
  }

  return (
    <Rotate visible={showStatus} onExited={() => navigate(-1)}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="py-10 h-screen">
          <TopBar centerSlot={<span className="text-lg">歌单</span>} />
          <div className="w-full h-full px-2">
            <Scroll direction={'vertical'} wrapHeight="calc(100vh - 5rem)">
              <div className="relative">
                <img
                  src={playList?.coverImgUrl}
                  alt="bg"
                  className="object-cover blur-2xl absolute w-full h-full -z-10"
                />
                <div className="flex gap-2 py-2 z-1">
                  <div className="relative w-32 h-32">
                    <img
                      src={playList?.coverImgUrl}
                      alt="cover"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="flex items-center text-xs absolute right-1 top-1 text-white">
                      <PlayIcon />
                      {getCount(playList?.playCount)}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <span className="text-gray-200">{playList?.name}</span>
                    <div className="flex items-center gap-1 text-gray-200 text-sm">
                      <div className="w-10 h-10">
                        <img
                          src={playList?.creator?.avatarUrl}
                          alt="avatar"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <span className="">{playList?.creator?.nickname}</span>
                    </div>
                    <p
                      className="line-clamp-2 text-xs text-gray-300"
                      title={playList?.description}
                    >
                      {playList?.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-800 w-52 rounded-full text-xs text-white px-2 py-2 gap-2 mx-auto my-1">
                  <div className="flex items-center">
                    <HeartIcon className="w-5 h-5" />
                    {getCount(playList?.subscribedCount || 0)}
                  </div>
                  <div className="flex items-center">
                    <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                    {getCount(playList?.commentCount || 0)}
                  </div>
                  <div className="flex items-center">
                    <ShareIcon className="w-5 h-5" />
                    {getCount(playList?.shareCount || 0)}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {playList.tracks &&
                  playList.tracks.map((item: any, index: number) => {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center border-b-[1px]"
                        onClick={() => handlePlay(item)}
                      >
                        <span className="px-3 text-gray-500 w-8 h-8 flex justify-center items-center">
                          {index + 1}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-gray-800 text-sm">
                            {item.name}
                          </span>
                          <span className="text-gray-600 text-xs line-clamp-1">
                            {item?.al?.name}-
                            {item?.ar?.map((v: any) => v.name)?.join('/')}
                          </span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </Scroll>
          </div>
          <div className="fixed bottom-0 w-full">
            <PlayBar />
          </div>
        </div>
      )}
    </Rotate>
  )
}

export default memo(Playlist)
