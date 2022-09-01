import styled from 'styled-components'

export const RecommendContainer = styled.div`
  width: 100%;
  overflow: hidden;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`

export const CardItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`
