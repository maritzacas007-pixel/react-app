import { Badge, ImagePlaceholder, SectionCard } from '../../../../shared/components'
import { MapEmbed } from '../MapEmbed/MapEmbed'
import styles from './ProtectedAreaSection.module.css'

import chicamochaImg from '../../../../assets/Chicamocha.jpeg'

const AREA_NAME = 'Distrito de conservación de suelos Umpalá - Cañón Río Chicamocha'

export function ProtectedAreaSection() {
  return (
    <SectionCard>
      <Badge label="Área protegida de Santander" />

      <h2 className={styles.title}>
        Distrito de Conservación de Suelos
        <br />
        Umpalá - Cañón Río Chicamocha
      </h2>

      <p className={styles.description}>
        Descubre el territorio, sus ecosistemas y las especies vegetales que forman parte de su
        diversidad.
      </p>

      {/* IMAGEN PANORÁMICA */}
      <ImagePlaceholder
        src={chicamochaImg}
        alt="Panorámica del Cañón del Chicamocha"
        className={styles.panorama}
        height="var(--panorama-height)"
      />

      <div className={styles.location}>
        <div className={styles.info}>
          <h3 className={styles.locationTitle}>¿Dónde está ubicado?</h3>

          <p className={styles.locationText}>
            El Distrito de Conservación de Suelos Umpalá - Cañón Río Chicamocha abarca 3.927
            hectáreas en Santander. Su ubicación se relaciona con el entorno de Los Santos, Aratoca y
            el sector de Umpalá, en el contexto regional del cañón.
          </p>

          <div className={styles.legend}>
            <span className={styles.pin}>•</span>
            <span className={styles.legendTitle}>{AREA_NAME}</span>
          </div>

          <div className={styles.tag}>
            <span className={styles.tagIcon}>🛰️</span>
            Mapa satelital interactivo
          </div>
        </div>

        <div className={styles.map}>
          <MapEmbed
            title="Mapa satelital interactivo Umpalá - Cañón Río Chicamocha"
            query="Umpala,+Santander,+Colombia"
          />
        </div>
      </div>
    </SectionCard>
  )
}
