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
    <div>
      <h1>全球榜</h1>
      <div>
        {list.map(item => (
          <div key={item.id} onClick={() => goDetail(item.id)}>
            <div className="img-wrapper">
              <img src={item.coverImgUrl} alt="cover" />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GlobalRank
