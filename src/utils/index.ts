export function ObjectToURLParams(params: any) {
  let obj = cleanObject(params)
  return Object.keys(obj).reduce((pre, current) => {
    return pre + `${current}=${obj[current]}`
  }, '')
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
