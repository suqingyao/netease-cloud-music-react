/*
 * @Author: cully fung
 * @Date: 2022-08-27 08:40:24
 * @LastEditTime: 2022-08-27 14:12:18
 * @LastEditors: cully fung
 * @Description:
 */
import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f00;
`
