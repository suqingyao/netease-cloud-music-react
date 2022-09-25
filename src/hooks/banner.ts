import { useEffect, useState } from 'react'

interface Banner {}

const useBanner = () => {
  const [banners, setBanners] = useState([])
  useEffect(() => {
    return () => {}
  }, [])

  return {
    banners
  }
}

export default useBanner
