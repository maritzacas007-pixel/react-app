import { SectionCard } from '../../../../shared/components'
import { ExploreCard } from '../ExploreCard/ExploreCard'
import type { ExploreCardProps } from '../ExploreCard/ExploreCard'
import styles from './ExploreSection.module.css'
import ecosistemasImg from '../../../../assets/ecosistemas.jpeg'
import ceibaImg from '../../../../assets/ceiba.jpg'
import amenazasImg from '../../../../assets/amenazas.jpeg'
import normatividadImg from '../../../../assets/normatividad.jpeg'

const CARDS: ExploreCardProps[] = [
  {
    icon: '🌱',
    title: '¿Qué es?',
    description:
      'Conoce el distrito, sus objetivos de conservación y su importancia para la región.',
    buttonText: 'Ver más →',
    image: ecosistemasImg,
  },
  {
    icon: '🍃',
    title: 'Catálogo de flora',
    description: 'Explora las especies vegetales registradas, su morfología y taxonomía.',
    buttonText: 'Ver especies →',
    imagePosition: 'top center',
    image: ceibaImg,
  },
  {
    icon: '⚠️',
    title: 'Amenazas',
    description: 'Conoce los principales riesgos que afectan las especies en los ecosistemas.',
    buttonText: 'Ver amenazas →',
    imagePosition: 'top center',
    image: amenazasImg,
  },
  {
    icon: '📊',
    title: 'Condiciones ambientales',
    description:
      'Altitud, temperatura, precipitación, humedad y otros factores ambientales del territorio.',
    buttonText: 'Ver información →',
    image: normatividadImg,
  },
]

export function ExploreSection() {
  return (
    <SectionCard>
      <div className={styles.header}>
        <span className={styles.icon}>🔍</span>
        <h2 className={styles.title}>Explora</h2>
        <span className={styles.line} />
      </div>

      <div className={styles.grid}>
        {CARDS.map((card) => (
          <ExploreCard key={card.title} {...card} />
        ))}
      </div>
    </SectionCard>
  )
}
