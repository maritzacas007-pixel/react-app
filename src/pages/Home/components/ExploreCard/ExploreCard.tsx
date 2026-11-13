import { useNavigate } from 'react-router-dom';
import { Button, ImagePlaceholder } from '../../../../shared/components'
import styles from './ExploreCard.module.css'

export interface ExploreCardProps {
  icon: string
  title: string
  description: string
  buttonText: string
  image?: string
  imagePosition?: string
  onClick?: () => void
}

export function ExploreCard({
  icon,
  title,
  description,
  buttonText,
  image,
  imagePosition,
}: ExploreCardProps) {
  const navigate = useNavigate();

  // Función para determinar a qué ruta debe ir cada tarjeta según su título
  const handleNavigate = () => {
    if (title === 'Catálogo de flora') {
      navigate('/catalogo');
    } else if (title.toLowerCase().includes('qué es') || title === 'QueEs') {
      navigate('/que-es');
    } else if (title.toLowerCase().includes('amenaza')) {
      navigate('/amenazas');
    } else if (title.toLowerCase().includes('condición') || title.toLowerCase().includes('condiciones')) {
      navigate('/condiciones');
    }
  };

  return (
    <article className={styles.card}>
      <ImagePlaceholder
        src={image}
        alt={title}
        objectPosition={imagePosition}
        className={styles.image}
      />

      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.icon}>{icon}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Botón unificado que navega según el título de la tarjeta */}
      <Button onClick={handleNavigate}>{buttonText}</Button>
    </article>
  )
}