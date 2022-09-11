import React from 'react'
import styled from 'styled-components'

const GlobalRankWrapper = styled.div`
  h1 {
    font-size: 14px;
    color: #fff;
    margin: 5px 0;
  }
`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .img-wrapper {
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  span {
    font-size: 12px;
  }
`

interface GlobalRankProps {
  list: Array<any>
}

function GlobalRank({ list }: GlobalRankProps) {
  return (
    <GlobalRankWrapper>
      <h1>全球榜</h1>
      <List>
        {list.map(item => (
          <ListItem>
            <div className="img-wrapper">
              <img src={item.coverImgUrl} alt="cover" />
            </div>
            <span>{item.name}</span>
          </ListItem>
        ))}
      </List>
    </GlobalRankWrapper>
  )
}

export default GlobalRank
