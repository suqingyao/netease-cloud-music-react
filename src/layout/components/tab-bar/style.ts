import styled from 'styled-components'

export const Tabs = styled.div`
  position: fixed;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #434343;
  .active {
    color: #f00;
  }
`

export const TabItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  transition: all 0.2s;
  text-decoration: none;
  i {
    font-size: 25px;
  }
  span {
    font-size: 12px;
  }
`
