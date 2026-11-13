import styles from './MapEmbed.module.css'

interface MapEmbedProps {
  title: string
  query: string
  zoom?: number
}

export function MapEmbed({ title, query, zoom = 12 }: MapEmbedProps) {
  return (
    <div className={styles.box}>
      <iframe
        title={title}
        src={`https://maps.google.com/maps?q=${query}&t=k&z=${zoom}&output=embed`}
        className={styles.iframe}
        loading="lazy"
      />
      {/* Capa que bloquea la barra superior del mapa embebido */}
      <div className={styles.overlay} />
    </div>
  )
}
