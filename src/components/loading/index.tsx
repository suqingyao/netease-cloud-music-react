import React from 'react'
import { LoadingWrapper } from './style'
import { LoadingProps } from './types'

function Loading({
  visible = false,
  content = '加载中',
  children
}: LoadingProps) {
  return visible ? (
    <LoadingWrapper>
      <div className="two-balls">
        <div className="pink"></div>
        <div className="blue"></div>
      </div>
    </LoadingWrapper>
  ) : null
}

export default Loading
