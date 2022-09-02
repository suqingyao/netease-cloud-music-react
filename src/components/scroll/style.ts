import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  width: 100%;
  height: fit-content;
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
