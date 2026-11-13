import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../shared/components'
import type { NavItem } from '../../shared/components'
import styles from './CatalogPage.module.css'

import planta1 from '../../assets/especies/planta1.jpg'
import planta2 from '../../assets/especies/planta2.jpg'
import planta3 from '../../assets/especies/planta3.jpg'
import planta4 from '../../assets/especies/planta4.jpg'
import planta5 from '../../assets/especies/planta5.jpg'
import planta6 from '../../assets/especies/planta6.jpg'
import planta7 from '../../assets/especies/planta7.jpg'
import planta8 from '../../assets/especies/planta8.jpg'
import planta9 from '../../assets/especies/planta9.jpg'
import planta10 from '../../assets/especies/planta10.jpg'
import planta11 from '../../assets/especies/planta11.jpg'
import planta12 from '../../assets/especies/planta12.jpg'

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas' },
  { icon: '🌱', label: 'Reconocimiento de especies', href: '/reconocimiento' },
]

const speciesData = [
  { id: 1, name: 'Ceiba / Ceiba bonga', scientific: 'Ceiba pentandra', family: 'Malvaceae', image: planta1 },
  { id: 2, name: 'Ceiba barrigona / Barrigón', scientific: 'Cavanillesia chicamochae', family: 'Malvaceae', image: planta2 },
  { id: 3, name: 'Guamo / Guamo churimo', scientific: 'Inga vera', family: 'Fabaceae', image: planta3 },
  { id: 4, name: 'Melón de monte de Guane', scientific: 'Melocactus guanensis', family: 'Cactaceae', image: planta4 },
  { id: 5, name: 'Cacao Indio / Zamia de las rocas', scientific: 'Zamia encephalartoides', family: 'Zamiaceae', image: planta5 },
  { id: 6, name: 'Caracolí', scientific: 'Anacardium excelsum', family: 'Anacardiaceae', image: planta6 },
  { id: 7, name: 'Gallinero / Chiminango', scientific: 'Pithecellobium dulce', family: 'Fabaceae', image: planta7 },
  { id: 8, name: 'Gorro de obispo del Chicamocha', scientific: 'Melocactus schatzlii subsp.chicamochae', family: 'Cactaceae', image: planta8 },
  { id: 9, name: 'Cedro / Cedro rosado', scientific: 'Cedrela odorata', family: 'Meliaceae', image: planta9 },
  { id: 10, name: 'Cabalonga / Cabolongo', scientific: 'Cascabela thevetia', family: 'Apocynaceae', image: planta10 },
  { id: 11, name: 'Velero de Suratá', scientific: 'Salvia aratocensis subsp. suratensis', family: 'Lamiaceae', image: planta11 },
  { id: 12, name: 'Cabecinegro de Pescadero', scientific: 'Melocactus pescaderensis', family: 'Cactaceae', image: planta12 },
]

// Mapeo de rutas para cada id de especie
const SPECIES_ROUTES: Record<number, string> = {
  1: '/especie-uno',
  2: '/especie-dos',
  3: '/especie-tres',
  4: '/especie-cuatro',
  5: '/especie-cinco',
  6: '/especie-seis',
  7: '/especie-siete',
  8: '/especie-ocho',
  9: '/especie-nueve',
  10: '/especie-diez',
  11: '/especie-once',
  12: '/especie-doce',
}

export function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFamily, setSelectedFamily] = useState('Todas')
  const navigate = useNavigate()

  // Extrae las familias únicas y las ordena alfabéticamente manteniendo 'Todas' al inicio
  const uniqueFamilies = Array.from(new Set(speciesData.map(s => s.family))).sort((a, b) => a.localeCompare(b))
  const families = ['Todas', ...uniqueFamilies]

  const filteredSpecies = speciesData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.scientific.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFamily = selectedFamily === 'Todas' || item.family === selectedFamily
    return matchesSearch && matchesFamily
  })

  return (
    <div className={styles.page}>
      <Navbar brand="Herbario" brandIcon="🌿" items={NAV_ITEMS} />

      <div className={styles.contentWrapper}>
        
        {/* Botón Volver atrás alineado a la izquierda */}
        <div className={styles.topBarSection}>
          <button className={styles.backBtn} onClick={() => window.history.back()}>
            ← Volver atrás
          </button>
        </div>

        {/* Cabecera con título principal, cápsulas y contador automático centrados */}
        <header className={styles.headerSection} style={{ textAlign: 'center' }}>
          <h1 className={styles.mainTitle}>
            Descubre las especies vegetales que habitan en el Distrito de Conservación de Suelos Umpalá, Cañón Río Chicamocha
          </h1>
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', marginTop: '15px', flexWrap: 'wrap' }}>
            <div className={styles.subHeaderCapsule}>
              <span>🍃</span>
              <span>Catálogo de flora</span>
            </div>

            {/* Contador automático de especies */}
            <div className={styles.subHeaderCapsule} style={{ background: '#e6f4ea', color: '#137333' }}>
              <span>📊</span>
              <span>Total de especies registradas: <strong>{speciesData.length}</strong></span>
            </div>
          </div>
        </header>

        {/* Buscador y Filtro */}
        <div className={styles.filterBar}>
          <div className={styles.searchCard}>
            <input
              type="text"
              placeholder="Buscar por nombre común o científico..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className={styles.filterCard}>
            <div className={styles.selectWrapper}>
              <span className={styles.selectLabel}>Familia:</span>
              <div className={styles.selectPillWide}>
                <select 
                  value={selectedFamily} 
                  onChange={(e) => setSelectedFamily(e.target.value)}
                >
                  {families.map((fam, idx) => (
                    <option key={idx} value={fam}>{fam}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Cuadrícula de Especies */}
        <div className={styles.grid}>
          {filteredSpecies.length > 0 ? (
            filteredSpecies.map((item) => (
              <article key={item.id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.name} className={styles.speciesImg} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{item.name}</h3>
                  <p className={styles.scientific}><em>{item.scientific}</em></p>
                  <p className={styles.family}>Familia: <strong>{item.family}</strong></p>
                  
                  {/* Conexión dinámica a la ruta de cada especie */}
                  <button 
                    className={styles.speciesBtn}
                    onClick={() => {
                      const targetRoute = SPECIES_ROUTES[item.id]
                      if (targetRoute) {
                        navigate(targetRoute)
                      }
                    }}
                  >
                    Ver más →
                  </button>

                </div>
              </article>
            ))
          ) : (
            <p className={styles.noResults}>No se encontraron especies con los criterios seleccionados.</p>
          )}
        </div>

        {/* Footer */}
        <footer className={styles.footerCard}>
          <p className={styles.footerText}>
            🍃 Este catálogo de flora se encuentra en constante investigación y actualización para seguir ampliando el registro de la biodiversidad 
          </p>
        </footer>

      </div>
    </div>
  )
}