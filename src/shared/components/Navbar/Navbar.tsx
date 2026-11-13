import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

export interface NavItem {
  icon: string
  label: string
  href: string
}

interface NavbarProps {
  brand: string
  brandIcon: string
  items: NavItem[]
}

export function Navbar({ brand, brandIcon, items }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className={`container ${styles.wrapper}`}>
      <nav className={styles.navbar}>
        {/* Marca/Logo con navegación SPA */}
        <button 
          className={styles.brand} 
          onClick={() => navigate('/')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <span className={styles.icon}>{brandIcon}</span>
          <span className={styles.brandText}>{brand}</span>
        </button>

        {/* Botón menú hamburguesa en móviles */}
        <button
          className={styles.toggle}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={styles.icon}>{open ? '✕' : '☰'}</span>
        </button>

        <div className={`${styles.links} ${open ? styles.open : ''}`}>
          {/* Enlaces del menú principal */}
          {items.map((item) => (
            <button
              key={item.label}
              className={styles.link}
              onClick={() => {
                setOpen(false)
                navigate(item.href)
              }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}

          {/* Icono de usuario conectado dinámicamente a /usuario */}
          <button 
            className={styles.user} 
            aria-label="Perfil de usuario"
            onClick={() => {
              setOpen(false)
              navigate('/usuario')
            }}
          >
            <span className={styles.icon}>👤</span>
          </button>
        </div>
      </nav>
    </header>
  )
}