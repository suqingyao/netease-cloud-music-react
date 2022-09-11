import { getSongDetail } from '@/api/playlist'
import React, { useEffect, useState } from 'react'
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
  justify-content: space-between;
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
      font-size: 12px;
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-size: 12px;
    color: #555;
  }
`

function OfficialRank({ list }: OfficialRankProps) {
  const [songList, setSongList] = useState([])

  useEffect(() => {
    getSongDetail({
      ids: list.map(item => item.id).join(',')
    }).then((res: any) => {
      setSongList(res.songlists)
    })
  }, [list])

  return (
    <OfficialRankWrapper>
      <h1>官方榜</h1>
      <List>
        {list.map(item => {
          return (
            <ListItem key={item.id}>
              <div className="img-wrapper">
                <img src={item.coverImgUrl} alt="rank" />
                <span>{item.updateFrequency}</span>
              </div>
              <div className="list"></div>
            </ListItem>
          )
        })}
      </List>
    </OfficialRankWrapper>
  )
}

export default OfficialRank
