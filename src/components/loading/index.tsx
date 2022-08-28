/*
 * @Author: cully fung
 * @Date: 2022-08-27 08:33:15
 * @LastEditTime: 2022-08-28 10:23:01
 * @LastEditors: cully fung
 * @Description: 全局loading组件
 */
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
