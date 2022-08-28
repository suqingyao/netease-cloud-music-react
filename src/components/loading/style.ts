/*
 * @Author: cully fung
 * @Date: 2022-08-27 08:40:24
 * @LastEditTime: 2022-08-28 10:28:53
 * @LastEditors: cully fung
 * @Description:
 */
import styled, { keyframes } from 'styled-components'

const TwoBallsPink = keyframes`
  from {
    z-index: 1;
  }
  50% {
    transform: translateX(calc(20px + 3 * 2px));
  }
`
const TwoBallsBlue = keyframes`
  from {
    z-index: 1;
  }
  50% {
    transform: translateX(calc(-20px - 3 * 2px));
  }
`

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f00;
  .two-balls {
    position: relative;
    width: 44px;
    .pink {
      background-color: #ff4a69;
      left: -2px;
    }
    .blue {
      animation-name: ${TwoBallsBlue};
      background-color: #1342ed;
      right: -2px;
    }
  }

  .two-balls div {
    position: absolute;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: ${TwoBallsPink} 1.05s ease-in-out infinite;
  }
`
