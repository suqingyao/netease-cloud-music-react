import { memo, useRef } from 'react'
import Scroll from '@/components/scroll'
import classNames from 'classnames'
import { useMount } from 'ahooks'

interface TabsProps {
  list: Array<any>
  oldVal?: string
  title?: string
  handleClick: Function
}

function Tabs(props: TabsProps) {
  const { list, oldVal, title } = props
  const { handleClick } = props

  const categoryRef = useRef<HTMLDivElement>(null)

  // useMount(() => {
  //   let categoryDom = categoryRef.current as HTMLDivElement
  //   let tagElements = categoryDom.querySelectorAll('span')
  //   let totalWidth = 0

  //   Array.from(tagElements).forEach(item => {
  //     totalWidth += item.offsetWidth
  //   })
  //   categoryDom.style.width = `${totalWidth}px`
  // })

  const classes = classNames('text-xs', 'px-2', 'py-1', 'rounded-2')

  return (
    <Scroll direction={'horizontal'} wrapWidth="100%">
      <div ref={categoryRef} className="flex z-10 overflow-hidden">
        <span className="px-1 text-gray-2 text-sm">{title}</span>
        {list.map(item => {
          return (
            <div
              key={item.key}
              onClick={() => handleClick(item.key)}
              className={`${
                oldVal === item.key
                  ? `${classes} text-red-4 opacity-80 border-1`
                  : classes
              }`}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    </Scroll>
  )
}

export default memo(Tabs)
