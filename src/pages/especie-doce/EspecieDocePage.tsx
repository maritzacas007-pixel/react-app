import { Navbar } from '../../shared/components'
import type { NavItem } from '../../shared/components'
import styles from './EspecieDocePage.module.css'

// Imagen horizontal específica para la cabecera de detalle (especie 12)
import plantaHorizontalEjemplo from '../../assets/especies/planta12A.jpg'

// Imágenes específicas para cada característica de la especie 12
import raizEjemplo from '../../assets/especies/planta12-raiz.jpg'
import hojaEjemplo from '../../assets/especies/planta12-hojas.jpg'
import florEjemplo from '../../assets/especies/planta12-flores.jpg'
import frutoEjemplo from '../../assets/especies/planta12-frutos.jpg'
import semillaEjemplo from '../../assets/especies/planta12-semillas.jpg'
import talloEjemplo from '../../assets/especies/planta12-corteza.jpg'
import habitatEjemplo from '../../assets/especies/habitat f.jpg'
import usosEjemplo from '../../assets/especies/usos f.jpg'

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas' },
  { icon: '🌱', label: 'Reconocimiento de especies', href: '/reconocimiento' },
]

export function EspecieDocePage() {
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
            <h1 className={styles.mainTitle}>Cabecinegro de Pescadero</h1>
            <p className={styles.scientificName}><em>Melocactus pescaderensis</em></p>
            <div className={styles.familyCapsule}>
              <span>🌿</span>
              <span>Familia: Cactaceae</span>
            </div>
          </header>

          <div className={styles.topGrid}>
            <div className={styles.mainImageContainer}>
              <img src={plantaHorizontalEjemplo} alt="Especie 12 - Vista Horizontal" className={styles.featuredImg} />
            </div>

            <div className={styles.taxonomySection}>
              <div className={styles.cardHeader}>
                <span>🌿</span>
                <h2>Taxonomía</h2>
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Reino:</span> <span className={styles.valuePart}>Plantae</span></li>
                <li><span className={styles.labelPart}>División:</span> <span className={styles.valuePart}>Tracheophyta (Vasculares)</span></li>
                <li><span className={styles.labelPart}>Clase:</span> <span className={styles.valuePart}>Equisetopsida</span></li>
                <li><span className={styles.labelPart}>Orden:</span> <span className={styles.valuePart}>Caryophyllales</span></li>
                <li><span className={styles.labelPart}>Familia:</span> <span className={styles.valuePart}>Cactaceae</span></li>
                <li><span className={styles.labelPart}>Género:</span> <span className={styles.valuePart}><em>Melocactus</em></span></li>
                <li><span className={styles.labelPart}>Especie:</span> <span className={styles.valuePart}><em>Melocactus pescaderensis</em></span></li>
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
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Superficial y extentida</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Suberosa (D. 2 cm)</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Pardo claro</span></li>
                <li><span className={styles.labelPart}>R. secundarias:</span> <span className={styles.valuePart}>Si hay presencia</span></li>
                <li><span className={styles.labelPart}>Número de cotiledones:</span> <span className={styles.valuePart}>Dos</span></li>
                <li><span className={styles.labelPart}>Presencia de endospermo:</span> <span className={styles.valuePart}>Si</span></li>
                <li><span className={styles.labelPart}></span> <span className={styles.valuePart}>Imagen representativa de la morfología del género</span></li>
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
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Suculento</span></li>
                <li><span className={styles.labelPart}>Diámetro aprox:</span> <span className={styles.valuePart}>Hasta 18 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Verde glauco a oscuro</span></li>
                <li><span className={styles.labelPart}>Presencia de nudos:</span> <span className={styles.valuePart}>No</span></li>
                <li><span className={styles.labelPart}>Forma:</span> <span className={styles.valuePart}>Globosa poco deprimida</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Costillada glabra</span></li>
                <li><span className={styles.labelPart}>Modificación:</span> <span className={styles.valuePart}>Cefalio rojizo</span></li>
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
                <li><span className={styles.labelPart}>Disposición en el tallo:</span> <span className={styles.valuePart}>Areolar</span></li>
                <li><span className={styles.labelPart}>Forma:</span> <span className={styles.valuePart}>Acicular fuerte, curva</span></li>
                <li><span className={styles.labelPart}>Margen:</span> <span className={styles.valuePart}>Entero</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Glabra estriada</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Pardo-rojiza oscura sen jóvenes, grisácea a negruzca en adultos</span></li>
              </ul>
            </div>
          </div>

          {/* Flores */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🌸</span>
              <h3>Flores</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={florEjemplo} alt="Flores" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Simetría floral:</span> <span className={styles.valuePart}>Actinomorfa</span></li>
                <li><span className={styles.labelPart}>N° de sépalos:</span> <span className={styles.valuePart}>Hasta 25</span></li>
                <li><span className={styles.labelPart}>N° de estambres:</span> <span className={styles.valuePart}>Hasta 45</span></li>
                <li><span className={styles.labelPart}>Tipo de ovario:</span> <span className={styles.valuePart}>Ínfero</span></li>
                <li><span className={styles.labelPart}>Color predominante:</span> <span className={styles.valuePart}>Magenta</span></li>
                <li><span className={styles.labelPart}>Fragancia:</span> <span className={styles.valuePart}>No</span></li>
              </ul>
            </div>
          </div>

          {/* Frutos */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🌰</span>
              <h3>Frutos</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={frutoEjemplo} alt="Frutos" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Carnoso</span></li>
                <li><span className={styles.labelPart}>Clasificación:</span> <span className={styles.valuePart}>Baya</span></li>
                <li><span className={styles.labelPart}>Tamaño:</span> <span className={styles.valuePart}>L. 1,5-2,2, A. 0,4-0,7 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Magenta con tonos rosa</span></li>
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
                <li><span className={styles.labelPart}>Tipo de raiz:</span> <span className={styles.valuePart}>Radícula primaria</span></li>
                <li><span className={styles.labelPart}>Longitud aproximada:</span> <span className={styles.valuePart}>Hasta 1,5mm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Pardo negruzco</span></li>
                <li><span className={styles.labelPart}>Presencia de raices secundarias:</span> <span className={styles.valuePart}>No</span></li>
                <li><span className={styles.labelPart}>Tipo de germinación:</span> <span className={styles.valuePart}>Epigea</span></li>
                <li><span className={styles.labelPart}></span> <span className={styles.valuePart}>
Imagen representativa de la morfología del género</span></li>
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
                <li><span className={styles.labelPart}>Altitud:</span> <span className={styles.valuePart}>500 a 1500 m s.n.m.</span></li>
                <li><span className={styles.labelPart}>Ecosistema:</span> <span className={styles.valuePart}>Bosque seco tropical, Zonas áridas, rocosas</span></li>
                <li><span className={styles.labelPart}>Distribución:</span> <span className={styles.valuePart}>Santander</span></li>
                <li><span className={styles.labelPart}>Suelo:</span> <span className={styles.valuePart}>Pedregoso,arenoso, con alto drenaje</span></li>
                <li><span className={styles.labelPart}>Clima:</span> <span className={styles.valuePart}>24-32°C</span></li>
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
                <li><span className={styles.labelPart}>Ornamental:</span> <span className={styles.valuePart}>Xeropaisajismos</span></li>
                <li><span className={styles.labelPart}>Ecológica:</span> <span className={styles.valuePart}>Previene la erosión</span></li>
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
              Es una especie nativa de Colombia y endémica del Cañón del Chicamocha (sector de Pescadero), que alcanza una altura entre 15 y 22 cm, acompañada de un cuerpo globular a deprimido-globoso con un diámetro de 12 a 18 cm, costillas glabras provistas de espinas pardo-rojizas a grisáceas y un cefalio apical rojizo característico compuesto de lana blanca y cerdas de tonalidad roja prominente.
            </p>
            <p style={{ textAlign: 'justify', color: '#333333', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              A nivel regional, se encuentra catalogada bajo la categoría de En Peligro (EN) según los criterios de la UICN, enfrentando fuertes presiones locales por la transformación, fragmentación y pérdida de su hábitat natural en el cañón seco del Chicamocha.
            </p>
            <p style={{ textAlign: 'justify', color: '#333333', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              <strong>Fenología:</strong> Su estación de floración coincide principalmente con los periodos de mayor luminosidad o inicio de lluvias estacionales en el Cañón del Chicamocha, sin presentar defoliación al carecer de hojas verdaderas; sus robustas espinas perennes pardo-rojizas permanecen firmes durante todo el año, protegiendo continuamente el cuerpo suculento de la planta. Las diminutas flores rosado-magenta brotan de forma recurrente y discreta desde el cefalio rojizo. Estas flores se abren brevemente durante el día para ser polinizadas por insectos o colibríes especializados, marchitándose internamente sin caer al suelo en masa. Posteriormente, los frutos cilíndricos y rosados emergen silenciosamente desde la lana y las cerdas del cefalio, mientras este continúa su crecimiento vertical perenne, acumulando restos secos con el paso de los años. 
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}