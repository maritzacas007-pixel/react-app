import type { ReactNode } from 'react'
import styles from './SectionCard.module.css'

interface SectionCardProps {
  children: ReactNode
  className?: string
}

/** Recuadro en tono crema usado para agrupar secciones */
export function SectionCard({ children, className = '' }: SectionCardProps) {
  return (
    <div className="container">
      <section className={`${styles.card} ${className}`}>{children}</section>
    </div>
  )
}
