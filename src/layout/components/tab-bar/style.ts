/*
 * @Author: cully fung
 * @Date: 2022-08-21 18:34:43
 * @LastEditTime: 2022-08-27 11:04:44
 * @LastEditors: cully fung
 * @Description:
 */
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
  background-color: #000;
  padding: 5px;
  .tab-item {
    flex: 1;
    color: #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: all 0.2s;
    i {
      font-size: 25px;
    }
    .label {
      font-size: 12px;
    }
    &-active {
      color: #f00;
      .icon {
        border-radius: 50%;
        background-color: #f00;
        padding: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          color: #fff;
          font-size: 20px;
        }
      }
    }
  }
`
