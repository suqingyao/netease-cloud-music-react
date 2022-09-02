import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  .nowrap {
    white-space: nowrap;
  }
`

export const ScrollContent = styled.div`
  display: block;
  .horizontal {
    display: inline-block;
  }
`
