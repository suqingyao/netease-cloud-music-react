/**
 * 将obj对象转换为URL参数
 * {name:'a',age:18} => ?name=a&age=18
 * @param params
 * @returns
 */
export function ObjectToURLParams(params: any) {
  let obj = cleanObject(params)
  return (
    '?' +
    Object.keys(obj).reduce((pre, current) => {
      return pre + `${current}=${obj[current]}`
    }, '')
  )
}

export function cleanObject(obj: any) {
  let result = {} as any
  Object.keys(obj).forEach(key => {
    if (obj[key] !== null && obj[key] !== undefined && obj !== '') {
      result[key] = obj[key]
    }
  })
  return result
}

export const getCount = (count: number) => {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

export function debounce(
  func: Function,
  wait: number,
  immediate: boolean = false
): Function {
  let timer: any = null
  return function (this: unknown, ...args: any) {
    if (immediate) {
      func.apply(this, args)
      immediate = false
      return
    }
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
