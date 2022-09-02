import Scroll from '@/components/scroll'
import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import style from '@/assets/global-style'

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
    vertical-align: middle;
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

  const categoryRef = useRef(null)

  useEffect(() => {
    let categoryDom = categoryRef.current
    let tagElements = categoryDom.querySelectorAll('span')
    let totalWidth = 0

    Array.from(tagElements).forEach(item => {
      totalWidth += item.offsetWidth
    })
    categoryDom.style.width = `${totalWidth}px`
  }, [])
  return (
    <Scroll direction={'horizontal'}>
      <div ref={categoryRef}>
        <List>
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
      </div>
    </Scroll>
  )
}

export default memo(Tabs)
