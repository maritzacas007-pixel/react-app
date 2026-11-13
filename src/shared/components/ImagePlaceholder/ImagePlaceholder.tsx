import styles from './ImagePlaceholder.module.css'

interface ImagePlaceholderProps {
  src?: string
  alt: string
  height?: number | string
  objectPosition?: string
  className?: string
}

/** Muestra la imagen si existe; si no, un recuadro de reemplazo */
export function ImagePlaceholder({
  src,
  alt,
  height = 120,
  objectPosition = 'center',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div className={`${styles.wrapper} ${className}`} style={{ height }}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} style={{ objectPosition }} />
      ) : (
        <span className={styles.fallback}>{alt}</span>
      )}
    </div>
  )
}
