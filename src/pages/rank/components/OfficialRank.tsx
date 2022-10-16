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
    <div>
      <h1>官方榜</h1>
      <div>
        {list.map(item => {
          return (
            <div key={item.id} onClick={() => goDetail(item.id)}>
              <div className="img-wrapper">
                <img src={item.coverImgUrl} alt="rank" />
                <span>{item.updateFrequency}</span>
              </div>
              <div className="list">
                {item.tracks.map((item: any, index: number) => (
                  <div key={index} className="item">
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
