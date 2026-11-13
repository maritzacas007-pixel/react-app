import { Navbar } from '../../shared/components'
import type { NavItem } from '../../shared/components'
import styles from './EspecieCincoPage.module.css'

// Imagen horizontal específica para la cabecera de detalle (especie 5)
import plantaHorizontalEjemplo from '../../assets/especies/planta5A.jpg'

// Imágenes específicas para cada característica de la especie 5
import raizEjemplo from '../../assets/especies/planta5-raiz.jpg'
import hojaEjemplo from '../../assets/especies/planta5-hojas.jpg'
import florEjemplo from '../../assets/especies/planta5-flores.jpg'
import frutoEjemplo from '../../assets/especies/planta5-frutos.jpg'
import semillaEjemplo from '../../assets/especies/planta5-semillas.jpg'
import talloEjemplo from '../../assets/especies/planta5-corteza.jpg'
import habitatEjemplo from '../../assets/especies/habitat f.jpg'
import usosEjemplo from '../../assets/especies/usos f.jpg'

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas' },
  { icon: '🌱', label: 'Reconocimiento de especies', href: '/reconocimiento' },
]

export function EspecieCincoPage() {
  return (
    <div className={styles.page}>
      <Navbar brand="Herbario" brandIcon="🌿" items={NAV_ITEMS} />

      <div className={styles.contentWrapper}>
        
        {/* Botón de retorno al catálogo */}
        <div className={styles.backContainer}>
          <button className={styles.backBtn} onClick={() => window.history.back()}>
            ← Catálogo de flora
          </button>
        </div>

        {/* CONTENEDOR PRINCIPAL SUPERIOR */}
        <div className={styles.heroCard}>
          <header className={styles.headerSection}>
            <h1 className={styles.mainTitle}>Cacao indio / Zamia de las rocas</h1>
            <p className={styles.scientificName}><em>Zamia encephalartoides</em></p>
            <div className={styles.familyCapsule}>
              <span>🌿</span>
              <span>Familia: Zamiaceae</span>
            </div>
          </header>

          <div className={styles.topGrid}>
            <div className={styles.mainImageContainer}>
              <img src={plantaHorizontalEjemplo} alt="Especie 5 - Vista Horizontal" className={styles.featuredImg} />
            </div>

            <div className={styles.taxonomySection}>
              <div className={styles.cardHeader}>
                <span>🌿</span>
                <h2>Taxonomía</h2>
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Reino:</span> <span className={styles.valuePart}>Plantae</span></li>
                <li><span className={styles.labelPart}>División:</span> <span className={styles.valuePart}>Tracheophyta (Vasculares)</span></li>
                <li><span className={styles.labelPart}>Clase:</span> <span className={styles.valuePart}>Cycadopsida</span></li>
                <li><span className={styles.labelPart}>Orden:</span> <span className={styles.valuePart}>Cycadales</span></li>
                <li><span className={styles.labelPart}>Familia:</span> <span className={styles.valuePart}>Zamiaceae</span></li>
                <li><span className={styles.labelPart}>Género:</span> <span className={styles.valuePart}><em>Zamia</em></span></li>
                <li><span className={styles.labelPart}>Especie:</span> <span className={styles.valuePart}><em>Zamia encephalartoides</em></span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Título de sección de características */}
        <div className={styles.sectionDivider}>
          <span className={styles.dividerIcon}>🌿</span>
          <h2>Características de la planta</h2>
        </div>

        {/* Cuadrícula de Características */}
        <div className={styles.featuresGrid}>
          
          {/* Raíz */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🌱</span>
              <h3>Raíz</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={raizEjemplo} alt="Raíz" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Pivotante coraloides</span></li>
                <li><span className={styles.labelPart}>Diámetro aprox:</span> <span className={styles.valuePart}>Hasta 15 cm</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Rugosa</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Marrón oscuro o pardo</span></li>
                <li><span className={styles.labelPart}>R. secundarias:</span> <span className={styles.valuePart}>Si hay presencia</span></li>
                <li><span className={styles.labelPart}>Número de cotiledones:</span> <span className={styles.valuePart}>Dos</span></li>
                <li><span className={styles.labelPart}>Presencia de endospermo:</span> <span className={styles.valuePart}>Si</span></li>
              </ul>
            </div>
          </div>

          {/* Tallo */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🪵</span>
              <h3>Tallo</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={talloEjemplo} alt="Tallo" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Leñoso subterráneo</span></li>
                <li><span className={styles.labelPart}>Diámetro aprox:</span> <span className={styles.valuePart}>Hasta 60 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Marrón oscuro o grisáceo</span></li>
                <li><span className={styles.labelPart}>Presencia de nudos:</span> <span className={styles.valuePart}>No</span></li>
                <li><span className={styles.labelPart}>Forma:</span> <span className={styles.valuePart}>Cilíndrica</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Rugosa y aspera</span></li>
                <li><span className={styles.labelPart}>Modificación:</span> <span className={styles.valuePart}>Caudex subterráneo</span></li>
              </ul>
            </div>
          </div>

          {/* Hojas */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🍃</span>
              <h3>Hojas compuestas</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={hojaEjemplo} alt="Hojas" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Disposición en el tallo:</span> <span className={styles.valuePart}>Alterna</span></li>
                <li><span className={styles.labelPart}>Forma:</span> <span className={styles.valuePart}>Lanceolada</span></li>
                <li><span className={styles.labelPart}>Margen:</span> <span className={styles.valuePart}>Entero</span></li>
                <li><span className={styles.labelPart}>Venación:</span> <span className={styles.valuePart}>Dicotómica</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Coriácea, glabra</span></li>
                <li><span className={styles.labelPart}>Estípulas:</span> <span className={styles.valuePart}>No</span></li>
                <li><span className={styles.labelPart}>Tricomas:</span> <span className={styles.valuePart}>No</span></li>
              </ul>
            </div>
          </div>

          {/* Flores */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🌸</span>
              <h3>Planta gimnosperma</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={florEjemplo} alt="Flores" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}></span> <span className={styles.valuePart}>No produce flores ni frutos verdaderos como las plantas angiospermas, su reproducción se realiza mediante estructuras llamadas conos o estróbilos.</span></li>
                </ul>
            </div>
          </div>

          {/* Frutos */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🌰</span>
              <h3>Cono o estróbilo</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={frutoEjemplo} alt="Frutos" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Seco</span></li>
                <li><span className={styles.labelPart}>Tamaño:</span> <span className={styles.valuePart}>L. 15-30 cm, A. 10-15 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Verde o amarillento</span></li>
                <li><span className={styles.labelPart}>Presencia de semillas:</span> <span className={styles.valuePart}>Si</span></li>
                <li><span className={styles.labelPart}>Tipo dispersión:</span> <span className={styles.valuePart}>Zoocoria</span></li>
              </ul>
            </div>
          </div>

          {/* Semillas */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🌾</span>
              <h3>Semillas</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={semillaEjemplo} alt="Semillas" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Tipo de raiz:</span> <span className={styles.valuePart}>Primaria pivotante</span></li>
                <li><span className={styles.labelPart}>Longitud aproximada:</span> <span className={styles.valuePart}>3-5 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Blanco amarillento</span></li>
                <li><span className={styles.labelPart}>Tipo de germinación:</span> <span className={styles.valuePart}>Hipogea</span></li>
                <li><span className={styles.labelPart}>Adaptaciones especiales:</span> <span className={styles.valuePart}>No</span></li>
              </ul>
            </div>
          </div>

          {/* Hábitat y distribución */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>📍</span>
              <h3>Hábitat y distribución</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={habitatEjemplo} alt="Hábitat" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Altitud:</span> <span className={styles.valuePart}>800 a 1600 m s.n.m.</span></li>
                <li><span className={styles.labelPart}>Ecosistema:</span> <span className={styles.valuePart}>Bosque seco tropical Matorralpremontano</span></li>
                <li><span className={styles.labelPart}>Distribución:</span> <span className={styles.valuePart}>Santander</span></li>
                <li><span className={styles.labelPart}>Suelo:</span> <span className={styles.valuePart}>Litosuelos rocosos</span></li>
                <li><span className={styles.labelPart}>Clima:</span> <span className={styles.valuePart}>24-30 °C</span></li>
              </ul>
            </div>
          </div>

          {/* Usos e importancia */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🌱</span>
              <h3>Usos e importancia</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={usosEjemplo} alt="Usos" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Medicinal:</span> <span className={styles.valuePart}>No documentado</span></li>
                <li><span className={styles.labelPart}>Ornamental:</span> <span className={styles.valuePart}>Espacios abiertos</span></li>
                <li><span className={styles.labelPart}>Ecológica:</span> <span className={styles.valuePart}>Estructura ecológica</span></li>
                <li><span className={styles.labelPart}>Otros usos:</span> <span className={styles.valuePart}>Investigación</span></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Barra completa inferior para Datos adicionales */}
        <div className={styles.additionalCard}>
          <div className={styles.cardHeader}>
            <span>ℹ️</span>
            <h3>Datos adicionales</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ textAlign: 'justify', color: '#333333', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              Es una especie nativa de América y estrictamente endémica de Colombia (restringida al Cañón del Chicamocha, entre Santander y Boyacá). No es un árbol de gran porte, sino una cícada con un tallo subterráneo o semi-expuesto (caudex) que puede alcanzar masas robustas, acompañado de una corona apical de hojas pinnadas, coriáceas y glabras que se extienden en forma de roseta.
            </p>
            <p style={{ textAlign: 'justify', color: '#333333', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              A nivel regional se encuentra catalogada bajo la categoría de En Peligro (EN) según la UICN, enfrentando fuertes presiones locales por la fragmentación de su hábitat natural, la expansión agropecuaria y la extracción ilegal para comercio ornamental.
            </p>
            <p style={{ textAlign: 'justify', color: '#333333', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              <strong>Fenología:</strong> Al ser una planta gimnosperma, no produce flores ni frutos verdaderos; su ciclo reproductivo implica la aparición de estróbilos (conos masculinos o femeninos) en ejemplares adultos. La polinización es principalmente entomófila (mediante insectos especializados como pequeños gorgojos o trips), y la maduración de las semillas con su característica cubierta de color blanco a blanco-amarillento se extiende de forma lenta a lo largo de varios meses.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}