import styled from 'styled-components'

export const TabBarContainer = styled.div`
  position: fixed;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px 5px 0 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  .tab-item {
    flex: 1;
    text-align: center;
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    &-active {
      color: rgba(255, 0, 0, 0.8);
    }
  }
`
