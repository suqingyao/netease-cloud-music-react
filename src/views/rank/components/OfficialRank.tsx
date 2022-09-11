import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface OfficialRankProps {
  list: Array<any>
}

const OfficialRankWrapper = styled.div`
  h1 {
    font-size: 14px;
    margin-bottom: 5px;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ListItem = styled.li`
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;
  .img-wrapper {
    position: relative;
    width: 120px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    span {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 5px;
      color: #fff;
      font-size: 14px;
    }
  }
  .list {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-size: 14px;
    color: #555;
    overflow: hidden;
    .item {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

function OfficialRank({ list }: OfficialRankProps) {
  const navigate = useNavigate()

  const goDetail = (id: string) => {
    navigate(`/playlist/${id}`, { replace: false })
  }
  return (
    <OfficialRankWrapper>
      <h1>官方榜</h1>
      <List>
        {list.map(item => {
          return (
            <ListItem key={item.id} onClick={() => goDetail(item.id)}>
              <div className="img-wrapper">
                <img src={item.coverImgUrl} alt="rank" />
                <span>{item.updateFrequency}</span>
              </div>
              <div className="list">
                {item.tracks.map((item: any) => (
                  <div className="item">
                    {item.first}-{item.second}
                  </div>
                ))}
              </div>
            </ListItem>
          )
        })}
      </List>
    </OfficialRankWrapper>
  )
}

export default OfficialRank
