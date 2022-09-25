import { useEffect } from 'react'

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useAsync = <P>(promise: Promise<P>) => {
  return {}
}
