import { memo, useEffect, useRef } from 'react'
import Scroll from '@/components/scroll'
import classNames from 'classnames'

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

  useEffect(() => {
    let categoryDom = categoryRef.current as HTMLDivElement
    let tagElements = categoryDom.querySelectorAll('span')
    let totalWidth = 0

    Array.from(tagElements).forEach(item => {
      totalWidth += item.offsetWidth
    })
    categoryDom.style.width = `${totalWidth}px`
  }, [])

  const classes = classNames('text-lg', 'px-5px', 'py-8px', 'rounded-10px')

  return (
    <Scroll direction={'horizontal'} wrapWidth="100%">
      <div
        ref={categoryRef}
        className="flex items-center h30px overflow-hidden"
      >
        <span className="first-of-type:block flex-initial px-5px text-gray-4 text-lg">
          {title}
        </span>
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
