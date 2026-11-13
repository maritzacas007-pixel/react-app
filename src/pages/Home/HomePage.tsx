import { Navbar } from '../../shared/components'
import type { NavItem } from '../../shared/components'
import { Hero } from './components/Hero/Hero'
import { ProtectedAreaSection } from './components/ProtectedAreaSection/ProtectedAreaSection'
import { ExploreSection } from './components/ExploreSection/ExploreSection'
import styles from './HomePage.module.css'

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas' },
  { icon: '🌱', label: 'Reconocimiento de especies', href: '/reconocimiento' },
]

export function HomePage() {
  return (
    <div className={styles.page}>
      <Navbar brand="Herbario" brandIcon="🌿" items={NAV_ITEMS} />
      <main>
        <Hero />
        <ProtectedAreaSection />
        <ExploreSection />
      </main>
    </div>
  )
}