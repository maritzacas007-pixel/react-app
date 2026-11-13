import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../shared/components'
import type { NavItem } from '../../shared/components'
import styles from './AreasPage.module.css'

// Imágenes directamente en la carpeta assets
import fondoFinal from '../../assets/fondofinal.jpeg'
import botanicalBg from '../../assets/botanical-background.jpeg'
import chicamochaImg from '../../assets/chicamocha.jpeg'

import fondo1 from '../../assets/fondo1.jpeg'
import foto1 from '../../assets/foto1.jpg'

import fondo2 from '../../assets/fondo2.jpeg'
import foto2 from '../../assets/foto2.jpg'

import fondo3 from '../../assets/fondo3.jpeg'
import foto3 from '../../assets/foto4.jpg'

import fondo4 from '../../assets/fondo4.jpeg'
import foto4 from '../../assets/foto3.jpg'

// CORREGIDO: Apunta exactamente a '/areas-protegidas' tal como está en el App.tsx
const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas-protegidas' },
  { icon: '🌱', label: 'Reconocimiento de especies', href: '/reconocimiento' },
]

export function AreasPage() {
  const navigate = useNavigate()

  return (
    <div 
      className={styles.page} 
      style={{ backgroundImage: `url(${fondoFinal})` }}
    >
      <Navbar brand="Herbario" brandIcon="🌿" items={NAV_ITEMS} />

      <div className={styles.contentWrapper}>
        
        {/* Botón de retorno */}
        <div className={styles.backContainer}>
          <button className={styles.backBtn} onClick={() => window.history.back()}>
            ← Volver
          </button>
        </div>

        {/* TÍTULO PRINCIPAL */}
        <div className={styles.pageHeader}>
          <h1 className={styles.mainTitle}>Áreas protegidas de Santander</h1>
        </div>

        {/* ================= 1. DISTRITOS DE CONSERVACIÓN DE SUELOS ================= */}
        <div className={styles.sectionBanner}>
          <h2>Distrito de Conservación de Suelos</h2>
        </div>

        <div 
          className={styles.mainFeaturedCard} 
          style={{ backgroundImage: `url(${botanicalBg})` }}
        >
          <div className={styles.featuredBody}>
            
            <div className={styles.featuredImgContainer}>
              <img src={chicamochaImg} alt="Cañón del Río Chicamocha" />
            </div>
            
            {/* RECUADRO DE TEXTO CLICABLE HACIA LA PÁGINA DE INICIO */}
            <div 
              className={styles.clickableFeaturedTextContent}
              onClick={() => navigate('/')}
              title="Haz clic para ver más información en el inicio"
            >
              <h3 className={styles.umpalaMainTitle}>
                <strong>Distrito de Conservación de Suelos Umpalá, Cañón Río Chicamocha</strong>
              </h3>
              
              <p className={styles.featuredDescription}>
                Área protegida declarada por la CDMB mediante el Acuerdo No. 1431 del año 2022, en jurisdicción del municipio de Piedecuesta. El área comprende sectores de los corregimientos Umpalá y Pescadero, donde se encuentran ecosistemas de bosque seco y formaciones boscosas propias de la región.
              </p>
            </div>

          </div>
        </div>


        {/* ================= 2. PARQUE REGIONAL NATURAL ================= */}
        <div className={styles.sectionBanner}>
          <h2>Parque Natural Regional</h2>
        </div>

        <div 
          className={styles.mainFeaturedCard}
          style={{ backgroundImage: `url(${fondo1})` }}
        >
          <div className={styles.featuredBody}>
            <div className={styles.featuredImgContainer}>
              <img src={foto1} alt="Parque Regional Natural" />
            </div>
            
            <div className={styles.featuredTextContent}>
              <h3 className={styles.umpalaMainTitle}>
                <strong>Parque Natural Regional Cerro la Judía</strong>
              </h3>
              <p className={styles.featuredDescription}>
                Área protegida declarada por la CDMB mediante el Acuerdo No. 1167 del año 2009, en jurisdicción de los municipios Floridablanca, Piedecuesta y Tona. El área comprende sectores rurales de estos municipios, donde se encuentran ecosistemas de bosque andino y subandino.
              </p>
            </div>
          </div>
        </div>


        {/* ================= BANNER GENERAL: DISTRITOS DE MANEJO INTEGRADO ================= */}
        <div className={styles.sectionBanner}>
          <h2>Distritos Regionales de Manejo Integrado</h2>
        </div>


        {/* -------- 3. COMPLEJO CIÉNAGAS PAPAYAL -------- */}
        <div 
          className={styles.mainFeaturedCard}
          style={{ backgroundImage: `url(${fondo2})` }}
        >
          <div className={styles.featuredBody}>
            <div className={styles.featuredImgContainer}>
              <img src={foto2} alt="Cerro La Judía" />
            </div>
            
            <div className={styles.featuredTextContent}>
              <h3 className={styles.umpalaMainTitle}>
                <strong>Distrito regional de manejo integrado Complejo Ciénagas Papayal</strong>
              </h3>
              <p className={styles.featuredDescription}>
                Área protegida declarada por la CDMB mediante el Acuerdo No. 1193 del año 2010, en jurisdicción del municipio Rionegro. El área comprende sectores de las veredas Papayal, la Musanda, y Rosa Blanca, donde se encuentran ecosistemas de humedales asociados al complejo de ciénagas.
              </p>
            </div>
          </div>
        </div>


        {/* -------- 4. EL ABURRIDO -------- */}
        <div 
          className={styles.mainFeaturedCard}
          style={{ backgroundImage: `url(${fondo3})` }}
        >
          <div className={styles.featuredBody}>
            <div className={styles.featuredImgContainer}>
              <img src={foto3} alt="El Aburrido" />
            </div>
            
            <div className={styles.featuredTextContent}>
              <h3 className={styles.umpalaMainTitle}>
                <strong>Distrito regional de manejo integrado el Aburrido</strong>
              </h3>
              <p className={styles.featuredDescription}>
                Área protegida declarada por la CDMB mediante el Acuerdo No. 1421 del año 2021, en jurisdicción del municipio Bucaramanga, Rionegro y Matanza. El área comprende sectores de las veredas el Aburrido, San Pedro Alto y San Francisco, donde se encuentran ecosistemas de bosque Andino.
              </p>
            </div>
          </div>
        </div>


        {/* -------- 5. HONDURAS -------- */}
        <div 
          className={styles.mainFeaturedCard}
          style={{ backgroundImage: `url(${fondo4})` }}
        >
          <div className={styles.featuredBody}>
            <div className={styles.featuredImgContainer}>
              <img src={foto4} alt="Ciénaga El Papayal" />
            </div>
            
            <div className={styles.featuredTextContent}>
              <h3 className={styles.umpalaMainTitle}>
                <strong>Distrito regional de manejo integrado Honduras</strong>
              </h3>
              <p className={styles.featuredDescription}>
                Área protegida declarada por la CDMB mediante el Acuerdo No. 1420 del año 2021, en jurisdicción de los municipios Rionegro y Matanza. El área comprende sectores rurales de ambos municipios, donde se encuentran ecosistemas de bosque Andino y Subandino.
              </p>
            </div>
          </div>
        </div>


        {/* PIE DE PÁGINA INSPIRACIONAL */}
        <div className={styles.footerQuote}>
          <p>Espacios naturales que conservamos para el presente y el futuro de Santander</p>
        </div>

      </div>
    </div>
  )
}