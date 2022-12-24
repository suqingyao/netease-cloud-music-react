import LazyLoad from 'react-lazyload'

interface ImageProps {
  src: string
  defaultSrc: string
  alt?: string
  className?: string
}

const Image = ({ src, defaultSrc, alt, className }: ImageProps) => {
  return (
    <LazyLoad
      placeholder={<img src={defaultSrc} alt={alt} className={className} />}
    >
      <img src={src} alt={alt} className={className} />
    </LazyLoad>
  )
}

export default Image
