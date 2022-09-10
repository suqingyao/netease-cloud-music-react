import styled from 'styled-components'
import style from '@/assets/global-style'

export const Wrapper = styled.div`
  padding-top: 50px;
  height: 100vh;
  z-index: 1000;
  /* background-color: ${style['background-color']}; */
  background-image: ${style['background-image']};
  &.appear {
    transform-origin: right bottom;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.appear-done {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`

export const Header = styled.div`
  padding: 10px 15px;
  padding-bottom: 40px;
  /* background-color: ${props => props.style?.backgroundColor}; */
  display: flex;
  align-items: center;
  gap: 5px;
  /* overflow: hidden; */
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  .cover {
    flex-shrink: 0;
    overflow: hidden;
    width: 120px;
    height: 120px;
    position: relative;
    border-radius: 5px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    span {
      position: absolute;
      padding: 5px;
      right: 0;
      top: 0;
      color: #fff;
      font-size: 12px;
      border-radius: 10px;
      display: flex;
      align-items: center;
    }
  }
  .info {
    flex-shrink: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    .title {
      color: #fff;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
    }
    .user {
      display: flex;
      align-items: center;
      gap: 5px;
      .avatar {
        width: 35px;
        height: 35px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .nickname {
        color: #fff;
        font-size: 12px;
      }
    }
    .desc {
      font-size: 12px;
      color: #ddd;
      /* width: 200px; */
      /* width: 100%; */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .comment {
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    width: 200px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    span {
      font-size: 12px;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 2px;
      i {
        font-size: 20px;
      }
    }
  }
`
export const List = styled.ol``

export const ListItem = styled.li``
