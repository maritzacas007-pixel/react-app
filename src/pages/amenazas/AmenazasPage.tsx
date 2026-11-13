import { Navbar } from '../../shared/components'
import type { NavItem } from '../../shared/components'
import styles from './AmenazasPage.module.css'

// Imagen de fondo unificada del proyecto y de especies prioritarias
import ceibaBarrigonaImg from '../../assets/especies/planta2.jpg'
import cacaoIndioImg from '../../assets/especies/planta5.jpg'

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas' },
  { icon: '🌱', label: 'Reconocimiento de especies', href: '/reconocimiento' },
]

export function AmenazasPage() {
  return (
    <div className={styles.page}>
      <Navbar brand="Herbario" brandIcon="🌿" items={NAV_ITEMS} />

      <div className={styles.contentWrapper}>
        
        {/* Botón Volver */}
        <div className={styles.topBarSection}>
          <button className={styles.backBtn} onClick={() => window.history.back()}>
            ← Volver atrás
          </button>
        </div>

        {/* Cabecera Principal */}
        <header className={styles.headerSection}>
          <h1 className={styles.mainTitle}>Amenazas de la Flora</h1>
          <p className={styles.subTitle}>
            Distrito de Conservación de Suelos Umpalá – Cañón río Chicamocha
          </p>
        </header>

        {/* Sección Superior: Introducción y Presiones */}
        <div className={styles.topGrid}>
          <div className={styles.introCard}>
            <h2>¿Qué está amenazando nuestra flora?</h2>
            <p>
              Diversas presiones afectan la vegetación nativa y los objetos de conservación del distrito.
            </p>
          </div>

          <div className={styles.threatsGrid}>
            <div className={styles.threatCard}>
              <span className={styles.threatIcon}>🐐</span>
              <div>
                <h3>Ganadería incompatible</h3>
                <p>Pisoteo y ramoneo de plántulas.</p>
              </div>
            </div>

            <div className={styles.threatCard}>
              <span className={styles.threatIcon}>🚜</span>
              <div>
                <h3>Agricultura incompatible</h3>
                <p>Transformación de coberturas naturales.</p>
              </div>
            </div>

            <div className={styles.threatCard}>
              <span className={styles.threatIcon}>🪵</span>
              <div>
                <h3>Minería</h3>
                <p>Exploración y explotación minera.</p>
              </div>
            </div>

            <div className={styles.threatCard}>
              <span className={styles.threatIcon}>🚰</span>
              <div>
                <h3>Captaciones de agua</h3>
                <p>Captaciones inadecuadas y sin regulación.</p>
              </div>
            </div>

            <div className={styles.threatCard}>
              <span className={styles.threatIcon}>🗑️</span>
              <div>
                <h3>Contaminación y residuos</h3>
                <p>Contaminación puntual y difusa; desechos sólidos.</p>
              </div>
            </div>

            <div className={styles.threatCard}>
              <span className={styles.threatIcon}>🔥</span>
              <div>
                <h3>Incendios</h3>
                <p>Afectación de la cobertura vegetal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Diagrama de Impactos */}
        <div className={styles.sectionHeaderUnderlineContainer}>
          <h2 className={styles.sectionTitleUnderline}>
            <span className={styles.titleIcon}>🌿</span> Impacto en los ecosistema
          </h2>
        </div>

        <div className={styles.impactDiagramSection}>
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <span className={styles.impactIcon}>🌱</span>
              <h3>Suelo</h3>
              <p>Erosión y degradación en áreas intervenidas.</p>
            </div>

            <div className={styles.impactCard}>
              <span className={styles.impactIcon}>🐦</span>
              <h3>Fauna</h3>
              <p>Pérdida y fragmentación de hábitats; dispersión de fauna.</p>
            </div>

            <div className={styles.impactCard}>
              <span className={styles.impactIcon}>🏔️</span>
              <h3>Ecosistemas</h3>
              <p>Fragmentación, pérdida de áreas boscosas y disminución de biodiversidad.</p>
            </div>

            <div className={styles.impactCard}>
              <span className={styles.impactIcon}>💧</span>
              <h3>Fuentes hídricas</h3>
              <p>Disminución de la oferta hídrica y alteración del ciclo hidrológico.</p>
            </div>
          </div>
        </div>

        {/* Título único superior con línea continua */}
        <div className={styles.sectionHeaderUnderlineContainer}>
          <h2 className={styles.sectionTitleUnderline}>
            <span className={styles.titleIcon}>🌿</span> Flora de conservación prioritaria
          </h2>
        </div>

        {/* Sección Inferior: Fila Principal Alineada */}
        <div className={styles.bottomSection}>
          
          {/* Columna Izquierda: Flora prioritaria */}
          <div className={styles.priorityBlock}>
            <div className={styles.speciesRowStacked}>
              <div className={styles.speciesCardStacked}>
                <img src={ceibaBarrigonaImg} alt="Ceiba barrigona" />
                <div className={styles.speciesInfoStacked}>
                  <strong>Ceiba barrigona</strong>
                  <span><em>Cavanillesia chicamochae</em></span>
                </div>
              </div>

              <div className={styles.speciesCardStacked}>
                <img src={cacaoIndioImg} alt="Cacao indio" />
                <div className={styles.speciesInfoStacked}>
                  <strong>Cacao indio</strong>
                  <span><em>Zamia encephalartoides</em></span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Caso documentado (alineado en altura con la izquierda) + Mensaje institucional abajo */}
          <div className={styles.rightColumnBlock}>
            <div className={styles.priorityBlock}>
              <div className={styles.caseContentClean}>
                <p className={styles.caseHeaderTitle}>
                  ⚠️ <strong>Caso documentado:</strong>
                </p>
                <p className={styles.caseParagraph}>
                  El pisoteo y ramoneo constante de cabras disminuye considerablemente la germinación y el establecimiento exitoso de la ceiba barrigona en la zona.
                </p>
              </div>
            </div>

            <div className={styles.messageBlock}>
              <div className={styles.messageBadge}>
                Proteger la flora es cuidar todo el ecosistema.
              </div>
              <p className={styles.messageBody}>
                La conservación de la vegetación nativa contribuye a mantener el suelo, el agua, los hábitats y la biodiversidad del Cañón del Chicamocha.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}