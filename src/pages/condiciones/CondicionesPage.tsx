import { Navbar } from '../../shared/components'
import type { NavItem } from '../../shared/components'
import styles from './CondicionesPage.module.css'

// Imágenes apuntando a la carpeta especies existente
import canonHeaderImg from '../../assets/especies/eco1.jpg'
import ecosistemaImg from '../../assets/especies/eco.jpg'
import sueloImg from '../../assets/especies/suelo.jpg'

// Imágenes de flora representativa (Guayacán, Cactus, Fique, Verdolaga silvestre)
import flora1 from '../../assets/especies/flora1.jpg'
import flora2 from '../../assets/especies/flora2.jpg'
import flora3 from '../../assets/especies/flora3.jpg'
import flora4 from '../../assets/especies/flora4.jpg'

// Imágenes de fauna representativa (Armadillo, Salamandra, Turpial, Lagarto de zona seca)
import fauna1 from '../../assets/especies/fauna1.jpg'
import fauna2 from '../../assets/especies/fauna2.jpg'
import fauna3 from '../../assets/especies/fauna3.jpg'
import fauna4 from '../../assets/especies/fauna4.jpg'

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas' },
  { icon: '🌱', label: 'Reconocimiento de especies', href: '/reconocimiento' },
]

export function CondicionesPage() {
  return (
    <div className={styles.page}>
      <Navbar brand="Herbario" brandIcon="🌿" items={NAV_ITEMS} />

      <div className={styles.contentWrapper}>
        
        {/* Botón de retorno */}
        <div className={styles.backContainer}>
          <button className={styles.backBtn} onClick={() => window.history.back()}>
            ← Volver atrás
          </button>
        </div>

        {/* SECCIÓN HERO PRINCIPAL */}
        <div className={styles.heroSection}>
          <div className={styles.heroTextContent}>
            
            {/* Título superior */}
            <div className={styles.mainTitleBox}>
              <h1 className={styles.mainTitlePart}>Condiciones</h1>
              <h1 className={styles.mainTitlePart}>Ambientales</h1>
            </div>
            
            {/* Subtítulos */}
            <div className={styles.subTitleBox}>
              <h2 className={styles.districtLine}>Distrito de Conservación de Suelos</h2>
              <p className={styles.canonSubtitle}>
                <strong>Umpalá – Cañón Río Chicamocha</strong>
              </p>
            </div>

            {/* Descripción inferior */}
            <p className={styles.heroDescription}>
              Un territorio diverso, con condiciones únicas que lo hacen un hogar para muchas especies.
            </p>
          </div>

          <div className={styles.heroImageContainer}>
            <img src={canonHeaderImg} alt="Cañón del Río Chicamocha" className={styles.heroImg} />
          </div>
        </div>

        {/* SECCIÓN: DATOS GENERALES DEL TERRITORIO */}
        <div className={styles.sectionHeader}>
          <span className={styles.dividerIcon}>🌿</span>
          <h2>Datos generales del territorio</h2>
        </div>

        <div className={styles.metricsGrid}>
          {/* Altitud */}
          <div className={styles.metricCard}>
            <div className={styles.metricIconBox}>⛰️</div>
            <h3>Altitud</h3>
            <p className={styles.metricValue}>600 a 2.400 <br /><span>m s. n. m.</span></p>
          </div>

          {/* Temperatura */}
          <div className={styles.metricCard}>
            <div className={styles.metricIconBox}>🌡️</div>
            <h3>Temperatura promedio</h3>
            <p className={styles.metricValue}>18 – 24 °C</p>
          </div>

          {/* Precipitación */}
          <div className={styles.metricCard}>
            <div className={styles.metricIconBox}>🌧️</div>
            <h3>Precipitación anual</h3>
            <p className={styles.metricValue}>700 – 900 mm</p>
          </div>

          {/* Humedad */}
          <div className={styles.metricCard}>
            <div className={styles.metricIconBox}>💧</div>
            <h3>Humedad relativa</h3>
            <p className={styles.metricValue}>55 – 82 %</p>
          </div>

          {/* Luminosidad */}
          <div className={styles.metricCard}>
            <div className={styles.metricIconBox}>☀️</div>
            <h3>Luminosidad</h3>
            <p className={styles.metricValue}>6 – 9 <br /><span>horas/día</span></p>
          </div>
        </div>

        {/* SECCIÓN: ECOSISTEMAS Y TIPOS DE SUELO */}
        <div className={styles.dualGrid}>
          
          {/* Ecosistemas */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeaderWithIcon}>
              <span>🌳</span>
              <h2>Ecosistemas predominantes</h2>
            </div>
            <div className={styles.infoCardBody}>
              <div className={styles.cardImgSmallContainer}>
                <img src={ecosistemaImg} alt="Ecosistemas predominantes" />
              </div>
              <p className={styles.justifiedText}>
                Bosque seco tropical y matorrales subxerofíticos, pastizales xerofíticos, bosques subandinos y andinos, bosques riparios (rondas hídricas).
              </p>
            </div>
          </div>

          {/* Tipos de suelo */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeaderWithIcon}>
              <span>🌱</span>
              <h2>Tipos de suelo</h2>
            </div>
            <div className={styles.infoCardBody}>
              <div className={styles.cardImgSmallContainer}>
                <img src={sueloImg} alt="Tipos de suelo" />
              </div>
              <p className={styles.justifiedText}>
                Laderas con pendientes muy pronunciadas, dinámicas de erosión natural, texturas sueltas, arenosas, pedregosas y rocosas, con baja retención de humedad.
              </p>
            </div>
          </div>

        </div>

        {/* SECCIÓN: FLORA Y FAUNA REPRESENTATIVA */}
        <div className={styles.dualGrid}>
          
          {/* Flora */}
          <div className={styles.speciesGroupCard}>
            <div>
              <div className={styles.cardHeaderWithIcon}>
                <span>🌱</span>
                <h2>Flora representativa</h2>
              </div>
              
              <div className={styles.speciesCirclesGrid}>
                <div className={styles.speciesItem}>
                  <img src={flora1} alt="Guayacán amarillo" />
                </div>
                <div className={styles.speciesItem}>
                  <img src={flora2} alt="Cactus" />
                </div>
                <div className={styles.speciesItem}>
                  <img src={flora3} alt="Fique" />
                </div>
                <div className={styles.speciesItem}>
                  <img src={flora4} alt="Verdolaga silvestre" />
                </div>
              </div>
            </div>

            <p className={styles.groupFooterText}>
              Plantas adaptadas al calor, la sequía y suelos pedregosos.
            </p>
          </div>

          {/* Fauna */}
          <div className={styles.speciesGroupCard}>
            <div>
              <div className={styles.cardHeaderWithIcon}>
                <span>🐾</span>
                <h2>Fauna representativa</h2>
              </div>
              
              <div className={styles.speciesCirclesGrid}>
                <div className={styles.speciesItem}>
                  <img src={fauna1} alt="Armadillo" />
                </div>
                <div className={styles.speciesItem}>
                  <img src={fauna2} alt="Salamandra" />
                </div>
                <div className={styles.speciesItem}>
                  <img src={fauna3} alt="Turpial" />
                </div>
                <div className={styles.speciesItem}>
                  <img src={fauna4} alt="Lagarto de zona seca" />
                </div>
              </div>
            </div>

            <p className={styles.groupFooterText}>
              Especies adaptadas a terrenos secos, con alta exposición solar.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}