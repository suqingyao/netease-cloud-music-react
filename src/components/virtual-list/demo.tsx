import VirtualList from '.'

const VirtualListDemo = () => {
  const data = new Array(200).fill(1).map((item, index) => ({
    id: index,
    title: 'title' + index
  }))

  return (
    <div>
      <VirtualList data={data} />
    </div>
  )
}

export default VirtualListDemo
