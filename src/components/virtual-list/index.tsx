import { FC, ReactNode, useRef, useState } from 'react'
import { useMount } from 'react-use'
import './style.scss'

interface VirtualListProps {
  data: any[]
  children?: ReactNode
}

const VirtualList: FC<VirtualListProps> = ({ data, children }) => {
  const [dataList, setDataList] = useState([])
  const [position, setPosition] = useState([0, 0])
  const scroll = useRef(null)
  const box = useRef<HTMLDivElement | null>(null)
  const context = useRef<HTMLDivElement | null>(null)
  const scrollInfo = useRef({
    height: 500,
    bufferCount: 8,
    itemHeight: 60,
    renderCount: 0
  })

  useMount(() => {
    const height = box.current?.offsetHeight ?? 0
    const { itemHeight, bufferCount } = scrollInfo.current
    const renderCount = Math.ceil(height / itemHeight) + bufferCount
    scrollInfo.current = { renderCount, height, bufferCount, itemHeight }
    setDataList(data)
    setPosition([0, renderCount])
  })

  const handleScroll = () => {
    const { scrollTop } = scroll.current
    const { itemHeight, renderCount } = scrollInfo.current
    const currentOffset = scrollTop - (scrollTop % itemHeight)
    const start = Math.floor(scrollTop / itemHeight)
    context.current!.style.transform = `translate3d(0,${currentOffset}px,0)`
    const end = Math.floor(scrollTop / itemHeight + renderCount + 1)
    if (end !== position[1] || start !== position[0]) {
      setPosition([start, end])
    }
  }

  const { itemHeight, height } = scrollInfo.current
  const [start, end] = position
  const renderList = dataList.slice(start, end)

  return (
    <div ref={box} className="list_box">
      <div
        className="scroll_box"
        style={{ height: height + 'px' }}
        ref={scroll}
        onScroll={handleScroll}
      >
        <div
          className="scroll_hold"
          style={{ height: `${dataList.length * itemHeight}px` }}
        />
        <div className="context" ref={context}>
          {renderList.map((item, index) => (
            <div className="list" key={index}>
              {item?.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VirtualList
