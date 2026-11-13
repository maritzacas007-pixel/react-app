import { Navbar } from '../../shared/components'
import type { NavItem } from '../../shared/components'
import styles from './EspecieTresPage.module.css'

// Imagen horizontal específica para la cabecera de detalle (especie 3)
import plantaHorizontalEjemplo from '../../assets/especies/planta3A.jpg'

// Imágenes específicas para cada característica de la especie 3
import raizEjemplo from '../../assets/especies/planta3-raiz.jpg'
import hojaEjemplo from '../../assets/especies/planta3-hojas.jpg'
import florEjemplo from '../../assets/especies/planta3-flores.jpg'
import frutoEjemplo from '../../assets/especies/planta3-frutos.jpg'
import semillaEjemplo from '../../assets/especies/planta3-semillas.jpg'
import talloEjemplo from '../../assets/especies/planta3-corteza.jpg'
import habitatEjemplo from '../../assets/especies/habitat f.jpg'
import usosEjemplo from '../../assets/especies/usos f.jpg'

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas' },
  { icon: '🌱', label: 'Reconocimiento de especies', href: '/reconocimiento' },
]

export function EspecieTresPage() {
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
            <h1 className={styles.mainTitle}>Guamo / Guamo churimo</h1>
            <p className={styles.scientificName}><em>Inga vera</em></p>
            <div className={styles.familyCapsule}>
              <span>🌿</span>
              <span>Familia: Fabaceae</span>
            </div>
          </header>

          <div className={styles.topGrid}>
            <div className={styles.mainImageContainer}>
              <img src={plantaHorizontalEjemplo} alt="Especie 3 - Vista Horizontal" className={styles.featuredImg} />
            </div>

            <div className={styles.taxonomySection}>
              <div className={styles.cardHeader}>
                <span>🌿</span>
                <h2>Taxonomía</h2>
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Reino:</span> <span className={styles.valuePart}>Plantae</span></li>
                <li><span className={styles.labelPart}>División:</span> <span className={styles.valuePart}>Tracheophyta (Vasculares)</span></li>
                <li><span className={styles.labelPart}>Clase:</span> <span className={styles.valuePart}>Magnoliopsida</span></li>
                <li><span className={styles.labelPart}>Orden:</span> <span className={styles.valuePart}>Fabales</span></li>
                <li><span className={styles.labelPart}>Familia:</span> <span className={styles.valuePart}>Fabaceae</span></li>
                <li><span className={styles.labelPart}>Género:</span> <span className={styles.valuePart}><em>Inga</em></span></li>
                <li><span className={styles.labelPart}>Especie:</span> <span className={styles.valuePart}><em>Inga vera</em></span></li>
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
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Tabular, contrafuerte</span></li>
                <li><span className={styles.labelPart}>Diámetro aprox:</span> <span className={styles.valuePart}>Hasta 15 cm</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Rugosa y lenticelada</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Pardo grisácea</span></li>
                <li><span className={styles.labelPart}>R. secundarias:</span> <span className={styles.valuePart}>Si hay presencia</span></li>
                <li><span className={styles.labelPart}>Número de cotiledones:</span> <span className={styles.valuePart}>Dos</span></li>
                <li><span className={styles.labelPart}>Presencia de endospermo:</span> <span className={styles.valuePart}>No</span></li>
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
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Leñoso</span></li>
                <li><span className={styles.labelPart}>Diámetro aprox:</span> <span className={styles.valuePart}>Hasta 100 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Grisáceo a castaño</span></li>
                <li><span className={styles.labelPart}>Presencia de nudos:</span> <span className={styles.valuePart}>Si</span></li>
                <li><span className={styles.labelPart}>Forma:</span> <span className={styles.valuePart}>Cilíndrica e irregular</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Fisurada y lenticelada</span></li>
                <li><span className={styles.labelPart}>Modificación:</span> <span className={styles.valuePart}>No</span></li>
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
                <li><span className={styles.labelPart}>Forma:</span> <span className={styles.valuePart}>Elíptica</span></li>
                <li><span className={styles.labelPart}>Margen:</span> <span className={styles.valuePart}>Entero</span></li>
                <li><span className={styles.labelPart}>Venación:</span> <span className={styles.valuePart}>Reticulada</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Pubescente</span></li>
                <li><span className={styles.labelPart}>Estípulas:</span> <span className={styles.valuePart}>Si</span></li>
                <li><span className={styles.labelPart}>Tricomas:</span> <span className={styles.valuePart}>Si</span></li>
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
                <li><span className={styles.labelPart}>N° de pétalos:</span> <span className={styles.valuePart}>5</span></li>
                <li><span className={styles.labelPart}>N° de sépalos:</span> <span className={styles.valuePart}>5</span></li>
                <li><span className={styles.labelPart}>N° de estambres:</span> <span className={styles.valuePart}>Más de 60</span></li>
                <li><span className={styles.labelPart}>Tipo de ovario:</span> <span className={styles.valuePart}>Súpero</span></li>
                <li><span className={styles.labelPart}>Color predominante:</span> <span className={styles.valuePart}>Blanco</span></li>
                <li><span className={styles.labelPart}>Fragancia:</span> <span className={styles.valuePart}>Dulce y suave</span></li>
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
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Seco</span></li>
                <li><span className={styles.labelPart}>Clasificación:</span> <span className={styles.valuePart}>Legumbre</span></li>
                <li><span className={styles.labelPart}>Tamaño:</span> <span className={styles.valuePart}>L. 10-30 cm, A. 1,5-3 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Verde con tonos amarillos</span></li>
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
                <li><span className={styles.labelPart}>Tipo de raiz:</span> <span className={styles.valuePart}>Pivotante</span></li>
                <li><span className={styles.labelPart}>Longitud aproximada:</span> <span className={styles.valuePart}>4 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Pardo a castaño</span></li>
                <li><span className={styles.labelPart}>Presencia de raices secundarias:</span> <span className={styles.valuePart}>No</span></li>
                <li><span className={styles.labelPart}>Tipo de germinación:</span> <span className={styles.valuePart}>Epigea</span></li>
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
                <li><span className={styles.labelPart}>Altitud:</span> <span className={styles.valuePart}>0 a 2500 m s.n.m.</span></li>
                <li><span className={styles.labelPart}>Ecosistema:</span> <span className={styles.valuePart}>B. riparios y andinos</span></li>
                <li><span className={styles.labelPart}>Distribución:</span> <span className={styles.valuePart}>Neotropical</span></li>
                <li><span className={styles.labelPart}>Suelo:</span> <span className={styles.valuePart}>Aluviales, francos </span></li>
                <li><span className={styles.labelPart}>Clima:</span> <span className={styles.valuePart}>18-28 °C</span></li>
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
                <li><span className={styles.labelPart}>Medicinal:</span> <span className={styles.valuePart}>Desinflamatoria</span></li>
                <li><span className={styles.labelPart}>Ornamental:</span> <span className={styles.valuePart}>Espacios abiertos</span></li>
                <li><span className={styles.labelPart}>Ecológica:</span> <span className={styles.valuePart}>Protección de riveras</span></li>
                <li><span className={styles.labelPart}>Otros usos:</span> <span className={styles.valuePart}>Alimento y madera</span></li>
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
              Es una especie nativa de América tropical y autóctona de Colombia, frecuente en los corredores riparios y valles interandinos. Alcanza alturas máximas que van de 15 a 25 m, acompañada de un amplio diámetro de follaje que se extiende de 10 a 20 m formando una copa amplia y extendida. 
            </p>
            <p style={{ textAlign: 'justify', color: '#333333', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              A nivel global se encuentra catalogada bajo la categoría de Preocupación Menor (LC) según la UICN, aunque enfrenta presiones locales por la transformación, fragmentación y pérdida progresiva de su hábitat natural en los bosques de galería y corredores riparios 
            </p>
            <p style={{ textAlign: 'justify', color: '#333333', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              <strong>Fenología:</strong> Su estación de floración suele concentrarse durante los periodos de menor precipitación o transición estacional. A diferencia de las especies deciduas, el árbol conserva su follaje verde e intercala la aparición de inflorescencias axilares. Sus flores secretan néctar y se abren facilitando la visita de polinizadores nocturnos y diurnos, dando paso progresivo a la formación de sus característicos frutos en legumbre y a una renovación continua de las hojas. 
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}