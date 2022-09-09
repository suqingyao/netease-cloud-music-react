import styled from 'styled-components'
import style from '@/assets/global-style'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${style['background-color']};
  transform-origin: right bottom;
  &.fly-enter,
  &.fly-appear {
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    transition: transform 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    transition: transform 0.3s;
    transform: translate3d(100%, 0, 0);
  }
`
