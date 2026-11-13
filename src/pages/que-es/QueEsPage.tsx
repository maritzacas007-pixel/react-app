import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../shared/components';
import type { NavItem } from '../../shared/components';
import mapaImg from '../../assets/mapa.jpg';
import styles from './QueEsPage.module.css';

// Importación de imágenes desde assets
import e1 from '../../assets/e1.jpg';
import e2 from '../../assets/e2.jpg';
import e3 from '../../assets/e3.jpg';
import e4 from '../../assets/e4.jpg';
import e5 from '../../assets/e5.jpg';

import v1 from '../../assets/v1.jpg';
import v2 from '../../assets/v2.jpg';
import v3 from '../../assets/v3.jpg';
import v4 from '../../assets/v4.jpg';
import v5 from '../../assets/v5.jpg';

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas-protegidas' },
  { icon: '🔍', label: 'Reconocimiento de especies', href: '/reconocimiento' },
];

export default function QueEsPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      
      {/* Barra superior de navegación corporativa estándar */}
      <Navbar brand="Herbario" brandIcon="🌿" items={NAV_ITEMS} />

      <div className={styles.contentWrapper}>
        
        {/* Botón de volver */}
        <div className={styles.topBarSection}>
          <button onClick={() => navigate(-1)} className={styles.backBtn}>
            ← Volver
          </button>
        </div>

        {/* Encabezado */}
        <header className={styles.headerSection}>
          <h1 className={styles.mainTitle}>¿Qué es el Distrito de Conservación de Suelos Umpalá - Cañon río Chicamocha?</h1>
          <p className={styles.subTitle}>Declarado mediante el Acuerdo CDMB 1431 del 28 de julio de 2022 – Santander, Colombia.</p>
          <p className={styles.declarationText}></p>
        </header>

        {/* Sección Superior: Identificación y Qué busca conservar */}
        <div className={styles.topGrid}>
          
          {/* Identificación y Ubicación con el mapa */}
          <section className={styles.cardBlock}>
            <h2 className={styles.cardHeaderGreen}>
              <span>📍</span> Identificación y Ubicación
            </h2>
            <ul className={styles.infoList}>
              <li><strong>Departamento:</strong> Santander</li>
              <li><strong>Municipio de jurisdicción:</strong> Piedecuesta</li>
              <li><strong>Corregimientos:</strong> Umpalá y Pescadero</li>
              <li><strong>Extensión total:</strong> 3.927,97 hectáreas</li>
              <li><strong>Altitud aproximada:</strong> 600 a 2.400 m s.n.m.</li>
            </ul>
            
            <div className={styles.runapVisorContainer}>
              <div className={styles.runapTopBar}>
                <span className={styles.runapLogoDot}>🟢</span>
                <span className={styles.runapTitleText}>RUNAP - Visor Geográfico Oficial</span>
                <span className={styles.runapBadge}>DCS Umpalá</span>
              </div>
              <div className={styles.runapMapCanvas}>
                <img 
                  src={mapaImg} 
                  alt="Mapa RUNAP Distrito de Conservación de Suelos Umpalá" 
                  className={styles.runapMapImg} 
                />
              </div>
              <div className={styles.runapFooterBar}>
                <span>Sistema de Parques Nacionales / CDMB</span>
                <span className={styles.runapLink}>Área Demarcada ↗</span>
              </div>
            </div>
          </section>

          {/* Qué busca conservar */}
          <section className={styles.cardBlock}>
            <h2 className={styles.cardHeaderGreen}>
              <span>🌿</span> ¿Qué busca conservar?
            </h2>
            <p className={styles.sectionDesc}>
              El Distrito protege ecosistemas y coberturas naturales representativas del Cañón del Chicamocha:
            </p>
            
            <div className={styles.ecosystemsGrid}>
              <div className={styles.ecoCard}>
                <img src={e1} alt="Bosque seco tropical" className={styles.ecoImgLarge} />
                <span>Bosque seco tropical</span>
              </div>
              <div className={styles.ecoCard}>
                <img src={e2} alt="Matorral subxerofítico" className={styles.ecoImgLarge} />
                <span>Matorral subxerofítico</span>
              </div>
              <div className={styles.ecoCard}>
                <img src={e3} alt="Bosque subandino" className={styles.ecoImgLarge} />
                <span>Bosque subandino</span>
              </div>
              <div className={styles.ecoCard}>
                <img src={e4} alt="Bosque andino" className={styles.ecoImgLarge} />
                <span>Bosque andino</span>
              </div>
              <div className={styles.ecoCard}>
                <img src={e5} alt="Vegetación riparia" className={styles.ecoImgLarge} />
                <span>Vegetación riparia</span>
              </div>
            </div>

            <h3 className={styles.subSubHeader}>Sus principales valores de conservación incluyen:</h3>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <img src={v1} alt="Biodiversidad" className={styles.valImgLarge} />
                <span>Biodiversidad y flora nativa</span>
              </div>
              <div className={styles.valueCard}>
                <img src={v2} alt="Suelos" className={styles.valImgLarge} />
                <span>Suelos y cobertura </span>
              </div>
              <div className={styles.valueCard}>
                <img src={v3} alt="Recurso hídrico" className={styles.valImgLarge} />
                <span>Recurso hídrico</span>
              </div>
              <div className={styles.valueCard}>
                <img src={v4} alt="Paisaje natural" className={styles.valImgLarge} />
                <span>Paisaje natural</span>
              </div>
              <div className={styles.valueCard}>
                <img src={v5} alt="Conectividad" className={styles.valImgLarge} />
                <span>Conectividad ecológica</span>
              </div>
            </div>
          </section>
        </div>

        {/* Propósito Principal */}
        <section className={styles.purposeBanner}>
          <div className={styles.purposeContentRow}>
            <div className={styles.purposeIconSide}>🎯</div>
            <div className={styles.purposeTextContainer}>
              <h2>Propósito Principal</h2>
              <p>
                Conservar la biodiversidad y los ecosistemas naturales, mantener sus funciones ecológicas y proteger los bienes y servicios ambientales del territorio.
              </p>
            </div>
          </div>
        </section>

        {/* Sección Media: Objetivos y Zonificación */}
        <div className={styles.middleGrid}>
          
          {/* Objetivos de Conservación */}
          <section className={styles.cardBlock}>
            <h2 className={styles.cardHeaderGreen}>
              <span>📋</span> Objetivos de Conservación
            </h2>
            <div className={styles.objectiveList}>
              <div className={styles.objItem}>
                <span className={styles.objSymbol}>🌵</span>
                <div><strong>Preservar:</strong> Muestras representativas de los ecosistemas naturales secos.</div>
              </div>
              <div className={styles.objItem}>
                <span className={styles.objSymbol}>🌿</span>
                <div><strong>Mantener:</strong> Las coberturas naturales y sus servicios ecosistémicos.</div>
              </div>
              <div className={styles.objItem}>
                <span className={styles.objSymbol}>🐾</span>
                <div><strong>Proteger:</strong> Especies silvestres de especial interés y distribución restringida.</div>
              </div>
              <div className={styles.objItem}>
                <span className={styles.objSymbol}>⛰️</span>
                <div><strong>Conservar:</strong> El paisaje y sus condiciones geológicas.</div>
              </div>
              <div className={styles.objItem}>
                <span className={styles.objSymbol}>💧</span>
                <div><strong>Favorecer:</strong> La conectividad ecológica de los corredores de los ríos Manco, Umpalá y Chicamocha.</div>
              </div>
            </div>
          </section>

          {/* Zonificación de Manejo */}
          <section className={styles.cardBlock}>
            <h2 className={styles.cardHeaderGreen}>
              <span>🗺️</span> Zonificación de Manejo
            </h2>
            <div className={styles.zonificationSplitLayout}>
              <div className={styles.chartSide}>
                <div className={styles.pieChartVibrant}>
                  <div className={styles.pieCenterLabel}>77,90%</div>
                </div>
              </div>
              <div className={styles.legendSide}>
                <div className={styles.legendItem}>
                  <span className={`${styles.colorDot} ${styles.colPreservacion}`}></span>
                  <div><strong>Zona de preservación</strong><br/>3.059,77 ha (77,90%)</div>
                </div>
                <div className={styles.legendItem}>
                  <span className={`${styles.colorDot} ${styles.colRestauracion}`}></span>
                  <div><strong>Zona de restauración</strong><br/>584,13 ha (14,87%)</div>
                </div>
                <div className={styles.legendItem}>
                  <span className={`${styles.colorDot} ${styles.colSostenible}`}></span>
                  <div><strong>Uso sostenible</strong><br/>196,36 ha (5,00%)</div>
                </div>
                <div className={styles.legendItem}>
                  <span className={`${styles.colorDot} ${styles.colPublico}`}></span>
                  <div><strong>Uso público</strong><br/>87,70 ha (2,23%)</div>
                </div>
              </div>
            </div>
            <p className={styles.chartFootnote}>Distribución según la tabla de zonificación del Plan de Manejo de la CDMB.</p>
          </section>
        </div>

        {/* Régimen de Usos */}
        <section className={styles.cardBlock}>
          <h2 className={styles.cardHeaderGreen}>
            <span>⚖️</span> Régimen de Usos
          </h2>
          <div className={styles.usesTableGrid}>
            <div className={`${styles.useColumn} ${styles.usePrincipalIntense}`}>
              <h4>USO PRINCIPAL</h4>
              <p>Actividad que corresponde a la finalidad de conservación de la zona.</p>
              <div className={styles.useExamples}>
                <strong>Ejemplos:</strong> Restauración ecológica pasiva y activa, investigación científica no extractiva y protección de fuentes hídricas.
              </div>
            </div>
            <div className={`${styles.useColumn} ${styles.useCompatibleIntense}`}>
              <h4>USO COMPATIBLE</h4>
              <p>Actividad complementaria que no afecta los objetivos de conservación.</p>
              <div className={styles.useExamples}>
                <strong>Ejemplos:</strong> Agricultura sostenible tradicional de bajo impacto, ecoturismo guiado y educación ambiental.
              </div>
            </div>
            <div className={`${styles.useColumn} ${styles.useCondicionadoIntense}`}>
              <h4>USO CONDICIONADO</h4>
              <p>Actividad sujeta a requisitos y restricciones ambientales de la CDMB.</p>
              <div className={styles.useExamples}>
                <strong>Ejemplos:</strong> Infraestructura de servicios públicos básica, vías de comunicación existentes reguladas y aprovechamiento forestal doméstico controlado.
              </div>
            </div>
            <div className={`${styles.useColumn} ${styles.useProhibidoIntense}`}>
              <h4>USO PROHIBIDO</h4>
              <p>Actividad incompatible con los objetivos de conservación.</p>
              <div className={styles.useExamples}>
                <strong>Ejemplos:</strong> Ganadería extensiva de rumiantes (como cabras sin control que generan pisoteo), minería, quema de vegetación y urbanización ilegal.
              </div>
            </div>
          </div>
          <div className={styles.warningBox}>
            <span>⚠️</span>
            <p>Las actividades permitidas dependen estrictamente de la zonificación y de las condiciones establecidas en el Plan de Manejo. No todos los usos son admisibles en toda el área protegida.</p>
          </div>
        </section>

        {/* Footer institucional */}
        <div className={styles.footerBanner}>
          <p>Conservar Umpalá es proteger su flora, sus suelos, sus aguas y la vida que depende de ellos.</p>
        </div>

      </div>
    </div>
  );
}