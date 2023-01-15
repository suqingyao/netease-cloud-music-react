import { useNavigate } from 'react-router-dom'

interface GlobalRankProps {
  list: Array<any>
}

function GlobalRank({ list }: GlobalRankProps) {
  const navigate = useNavigate()

  const goDetail = (id: string) => {
    navigate(`/playlist/${id}`, { replace: false })
  }
  return (
    <div className="px-2">
      <span className="text-lg">全球榜</span>
      <div className="grid grid-cols-4 gap-2">
        {list.map(item => (
          <div
            key={item.id}
            onClick={() => goDetail(item.id)}
            className="flex flex-col gap-1"
          >
            <div>
              <img
                src={item.coverImgUrl}
                alt="cover"
                className="w-full h-full block object-cover rounded-xl"
              />
            </div>
            <span className="text-xs line-clamp-1">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GlobalRank
