import styled from 'styled-components'

export const PlayBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  height: 50px;
  bottom: ${props => props!.bottom};
  background-color: #434343;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 0 20px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 1px #cfdef3;
  .action {
  }
  .cover {
  }
  .song-info {
    display: flex;
    align-items: center;
    width: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    gap: 3px;
    flex: 1;
    color: #fff;
    &__title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
      font-size: 14px;
    }
    &__singer {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
      font-size: 12px;
    }
  }
  i {
    font-size: 25px;
    color: #eee;
    font-weight: 100;
  }
`
