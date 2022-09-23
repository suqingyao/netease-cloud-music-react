interface LoadingProps {
  visible: boolean
  text?: string
  activeClass?: string
}

function LoadingV2({ visible, text = '加载中...', activeClass }: LoadingProps) {
  return (
    <div>
      <i className=""></i> {text}
    </div>
  )
}

export default LoadingV2
