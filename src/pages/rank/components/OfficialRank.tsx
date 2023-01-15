import { useNavigate } from 'react-router-dom'

interface OfficialRankProps {
  list: Array<any>
}

function OfficialRank({ list }: OfficialRankProps) {
  const navigate = useNavigate()

  const goDetail = (id: string) => {
    navigate(`/playlist/${id}`, { replace: false })
  }
  return (
    <div className="px-2">
      <span className="text-lg">官方榜</span>
      <div className="flex flex-col gap-2">
        {list.map(item => {
          return (
            <div
              key={item.id}
              onClick={() => goDetail(item.id)}
              className="flex gap-1"
            >
              <div className="w-28 h-28 relative">
                <img
                  src={item.coverImgUrl}
                  alt="rank"
                  className="w-full h-full rounded-xl"
                />
                <span className="absolute left-1 top-1 text-sm text-white">
                  {item.updateFrequency}
                </span>
              </div>
              <div className="flex flex-col">
                {item.tracks.map((item: any, index: number) => (
                  <div key={index} className="text-sm">
                    {item.first}-{item.second}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OfficialRank
