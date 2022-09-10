import styled from 'styled-components'
import style from '@/assets/global-style'

export const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 50px 0;
  /* background-color: ${style['background-color']}; */
  background-image: ${style['background-image']};
  overflow: hidden;
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
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.img});
    background-size: cover;
    filter: blur(5px);
  }
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
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    position: relative;
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
      white-space: nowrap;
      gap: 2px;
      i {
        font-size: 20px;
      }
    }
  }
`
export const List = styled.ol`
  background-color: #000;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 30px 10px 0;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  overflow: hidden;
  .no {
    color: #777;
    font-size: 14px;
  }
  .song-info {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3px;
    .name {
      font-size: 14px;
    }
    .creator {
      color: #888;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
