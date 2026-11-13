import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.subtitle}>Herbario</p>
      <h1 className={styles.title}>Flora Santandereana</h1>
      <p className={styles.description}>
        Conocer, registrar y conservar nuestra diversidad vegetal.
      </p>
    </section>
  )
}
