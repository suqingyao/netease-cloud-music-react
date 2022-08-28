/*
 * @Author: cully fung
 * @Date: 2022-08-21 10:44:24
 * @LastEditTime: 2022-08-28 17:41:32
 * @LastEditors: cully fung
 * @Description:
 */
import styled from 'styled-components'

export const TopBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #434343;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  h1 {
    font-size: 25px;
    color: #f00;
  }
`
