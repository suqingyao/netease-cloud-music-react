import styled from 'styled-components'
export const CarouselContainer = styled.div`
  padding: 10px 15px;
  position: relative;
  .cover {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .tag {
    color: #fff;
    font-size: 12px;
    border-radius: 10px 0 10px 0;
    padding: 5px 10px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    width: 8px;
    height: 3px;
    border-radius: 2px;
  }
`
