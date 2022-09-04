import styled from 'styled-components'

export const RankWrapper = styled.div`
  padding: 15px;
  overflow: hidden;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .img-wrapper {
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  span {
    font-size: 12px;
  }
`
