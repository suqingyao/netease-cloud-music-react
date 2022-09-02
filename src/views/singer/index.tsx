import { useState } from 'react'
import Tabs from './components/Tabs'
import { SingerWrapper } from './style'
import { alphaTypes, categoryTypes } from './types'
function Singer() {
  let [category, setCategory] = useState('')
  let [alpha, setAlpha] = useState('')

  let handleUpdateAlpha = val => {
    setAlpha(val)
  }

  let handleUpdateCategory = val => {
    setCategory(val)
  }
  return (
    <SingerWrapper>
      <Tabs
        list={categoryTypes}
        title="分类 (默认热门):"
        handleClick={handleUpdateCategory}
        oldVal={category}
      ></Tabs>
      <Tabs
        list={alphaTypes}
        title="首字母:"
        handleClick={val => handleUpdateAlpha(val)}
        oldVal={alpha}
      ></Tabs>
    </SingerWrapper>
  )
}

export default Singer
