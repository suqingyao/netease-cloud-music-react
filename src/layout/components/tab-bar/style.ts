/*
 * @Author: cully fung
 * @Date: 2022-08-21 18:34:43
 * @LastEditTime: 2022-08-28 11:01:56
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
  background-color: #434343;
  .tab-item {
    flex: 1;
    color: #ddd;
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
    .label {
      font-size: 12px;
    }
    &-active {
      color: #f00;
    }
  }
`
