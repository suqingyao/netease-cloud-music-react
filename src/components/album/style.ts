import styled from 'styled-components'

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  .cover {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    background-color: #fff;
  }
  .title {
    color: #fff;
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .count {
    font-size: 12px;
    position: absolute;
    right: 5px;
    top: 5px;
    display: flex;
    gap: 2px;
  }
`
