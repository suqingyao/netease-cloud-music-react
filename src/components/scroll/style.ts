import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  display: ${(props: any) =>
    props.direction === 'horizontal' ? 'inline-block' : ''};
  width: ${(props: any) => props.wrapWidth};
  width: ${(props: any) => props.wrapHeight};
  overflow: hidden;
`

export const ScrollContent = styled.div`
  display: ${(props: any) =>
    props.direction === 'horizontal' ? 'inline-block' : ''};
`
