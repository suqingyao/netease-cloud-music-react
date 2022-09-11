import { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import style from '@/assets/global-style'
import Scroll from '@/components/scroll'

interface TabsProps {
  list: Array<any>
  oldVal?: string
  title?: string
  handleClick: Function
}

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style['font-size-m']};
  }
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style['font-size-m']};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style['theme-color']};
    border: 1px solid ${style['theme-color']};
    opacity: 0.8;
  }
`

function Tabs(props: TabsProps) {
  const { list, oldVal, title } = props
  const { handleClick } = props

  const categoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let categoryDom = categoryRef.current as HTMLDivElement
    let tagElements = categoryDom.querySelectorAll('span')
    let totalWidth = 0

    Array.from(tagElements).forEach(item => {
      totalWidth += item.offsetWidth
    })
    categoryDom.style.width = `${totalWidth}px`
  }, [])
  return (
    <Scroll direction={'horizontal'} wrapWidth="calc(100vw - 20px)">
      <List ref={categoryRef}>
        <span>{title}</span>
        {list.map(item => {
          return (
            <ListItem
              key={item.key}
              className={`${oldVal === item.key ? 'selected' : ''}`}
              onClick={() => handleClick(item.key)}
            >
              {item.name}
            </ListItem>
          )
        })}
      </List>
    </Scroll>
  )
}

export default memo(Tabs)
