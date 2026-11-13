import { Navbar } from '../../shared/components'
import type { NavItem } from '../../shared/components'
import styles from './EspecieDosPage.module.css'

// Imagen horizontal específica para la cabecera de detalle (especie 2)
import plantaHorizontalEjemplo from '../../assets/especies/planta2A.jpg'

// Imágenes específicas para cada característica de la especie 2
import raizEjemplo from '../../assets/especies/planta2-raiz.jpg'
import hojaEjemplo from '../../assets/especies/planta2-hojas.jpg'
import florEjemplo from '../../assets/especies/planta2-flores.jpg'
import frutoEjemplo from '../../assets/especies/planta2-frutos.jpg'
import semillaEjemplo from '../../assets/especies/planta2-semillas.jpg'
import talloEjemplo from '../../assets/especies/planta2-corteza.jpg'
import habitatEjemplo from '../../assets/especies/habitat f.jpg'
import usosEjemplo from '../../assets/especies/usos f.jpg'

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas' },
  { icon: '🌱', label: 'Reconocimiento de especies', href: '/reconocimiento' },
]

export function EspecieDosPage() {
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
            <h1 className={styles.mainTitle}>Ceiba barrigona / Barrigón</h1>
            <p className={styles.scientificName}><em>Cavanillesia chicamochae</em></p>
            <div className={styles.familyCapsule}>
              <span>🌿</span>
              <span>Familia: Malvaceae</span>
            </div>
          </header>

          <div className={styles.topGrid}>
            <div className={styles.mainImageContainer}>
              <img src={plantaHorizontalEjemplo} alt="Especie 2 - Vista Horizontal" className={styles.featuredImg} />
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
                <li><span className={styles.labelPart}>Orden:</span> <span className={styles.valuePart}>Malvales</span></li>
                <li><span className={styles.labelPart}>Familia:</span> <span className={styles.valuePart}>Malvaceae</span></li>
                <li><span className={styles.labelPart}>Género:</span> <span className={styles.valuePart}><em>Cavanillesia</em></span></li>
                <li><span className={styles.labelPart}>Especie:</span> <span className={styles.valuePart}><em>Cavanillesia chicamochae</em></span></li>
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
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Superficial, extendida</span></li>
                <li><span className={styles.labelPart}>Diámetro aprox:</span> <span className={styles.valuePart}>Hata 100 cm</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Rugosa</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Marrón grisáceo</span></li>
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
                <li><span className={styles.labelPart}>Diámetro aprox:</span> <span className={styles.valuePart}>Hasta 200 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Grisáceo a verdoso</span></li>
                <li><span className={styles.labelPart}>Presencia de nudos:</span> <span className={styles.valuePart}>No</span></li>
                <li><span className={styles.labelPart}>Forma:</span> <span className={styles.valuePart}>Fusiforme</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Asurcado y lenticelas</span></li>
                <li><span className={styles.labelPart}>Modificación:</span> <span className={styles.valuePart}>Suculencia caulinar</span></li>
              </ul>
            </div>
          </div>

          {/* Hojas */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span>🍃</span>
              <h3>Hojas simples</h3>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureImageContainer}>
                <img src={hojaEjemplo} alt="Hojas" className={styles.featureImg} />
              </div>
              <ul className={styles.infoList}>
                <li><span className={styles.labelPart}>Disposición en el tallo:</span> <span className={styles.valuePart}>Alterna</span></li>
                <li><span className={styles.labelPart}>Forma:</span> <span className={styles.valuePart}>Ovada</span></li>
                <li><span className={styles.labelPart}>Margen:</span> <span className={styles.valuePart}>Entero</span></li>
                <li><span className={styles.labelPart}>Venación:</span> <span className={styles.valuePart}>Reticulada</span></li>
                <li><span className={styles.labelPart}>Superficie:</span> <span className={styles.valuePart}>Lisa</span></li>
                <li><span className={styles.labelPart}>Estípulas:</span> <span className={styles.valuePart}>Si</span></li>
                <li><span className={styles.labelPart}>Tricomas:</span> <span className={styles.valuePart}>No</span></li>
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
                <li><span className={styles.labelPart}>N° de estambres:</span> <span className={styles.valuePart}>Más de 50</span></li>
                <li><span className={styles.labelPart}>Tipo de ovario:</span> <span className={styles.valuePart}>Súpero</span></li>
                <li><span className={styles.labelPart}>Color predominante:</span> <span className={styles.valuePart}>Crema</span></li>
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
                <li><span className={styles.labelPart}>Tipo:</span> <span className={styles.valuePart}>Seco</span></li>
                <li><span className={styles.labelPart}>Clasificación:</span> <span className={styles.valuePart}>Sámara</span></li>
                <li><span className={styles.labelPart}>Tamaño:</span> <span className={styles.valuePart}>L. 8-12 cm, A. 7-10 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Pardo o marrón claro</span></li>
                <li><span className={styles.labelPart}>Presencia de semillas:</span> <span className={styles.valuePart}>Si</span></li>
                <li><span className={styles.labelPart}>Tipo dispersión:</span> <span className={styles.valuePart}>Anemocoria</span></li>
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
                <li><span className={styles.labelPart}>Longitud aproximada:</span> <span className={styles.valuePart}>3 cm</span></li>
                <li><span className={styles.labelPart}>Color:</span> <span className={styles.valuePart}>Pardo o marrón claro</span></li>
                <li><span className={styles.labelPart}>Presencia de raices secundarias:</span> <span className={styles.valuePart}>Si</span></li>
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
                <li><span className={styles.labelPart}>Altitud:</span> <span className={styles.valuePart}>230 a 1100 m s.n.m.</span></li>
                <li><span className={styles.labelPart}>Ecosistema:</span> <span className={styles.valuePart}>Bosque seco tropical</span></li>
                <li><span className={styles.labelPart}>Distribución:</span> <span className={styles.valuePart}>Santander</span></li>
                <li><span className={styles.labelPart}>Suelo:</span> <span className={styles.valuePart}>Rocosos y drenados</span></li>
                <li><span className={styles.labelPart}>Clima:</span> <span className={styles.valuePart}>22-33 °C</span></li>
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
                <li><span className={styles.labelPart}>Ecológica:</span> <span className={styles.valuePart}>Refugio y alimento</span></li>
                <li><span className={styles.labelPart}>Otros usos:</span> <span className={styles.valuePart}>Fibra y madera</span></li>
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
              Es una especie endémica de Santander (Colombia), característica de los bosques secos tropicales, que alcanza alturas de 12 a 25 m con un tronco pachycaul abultado para almacenamiento hídrico y una copa aparasolada de 8 a 15 m de diámetro.
            </p>
            <p style={{ textAlign: 'justify', color: '#333333', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              A nivel regional se encuentra catalogada bajo la categoría de amenaza En Peligro (EN), enfrentando fuertes presiones antrópicas, como la ganadería caprina y la fragmentación, que limitan la regeneración natural y provocan la pérdida progresiva de su hábitat exclusivo en el cañón del Chicamocha.
            </p>
            <p style={{ textAlign: 'justify', color: '#333333', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              <strong>Fenología:</strong> Su estado de floración coincide con la época seca, periodo en el cual el árbol presenta un comportamiento caducifolio estricto y pasa la mayor parte del tiempo sin hojas. Esta defoliación total deja al descubierto sus flores nocturnas adaptadas a la polinización por murciélagos, las cuales caen profusamente para dar paso inmediato a la formación de sus característicos frutos sámaras y al posterior renacimiento del follaje verde con las lluvias.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}