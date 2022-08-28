/*
 * @Author: cully fung
 * @Date: 2022-08-26 08:20:33
 * @LastEditTime: 2022-08-27 15:01:44
 * @LastEditors: cully fung
 * @Description:
 */
import styled from 'styled-components'

export const PlayBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  height: 50px;
  bottom: 50px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 0 20px;
  .action {
  }
  .cover {
    i {
      font-size: 30px;
    }
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
      color: #ddd;
      font-size: 12px;
    }
  }
  i {
    font-size: 25px;
    color: #eee;
    font-weight: 100;
  }
`
