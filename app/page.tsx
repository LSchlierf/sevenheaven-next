import Link from 'next/link'
import styles from './page.module.css'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main>
      <Slider>
        <div className={styles.titleWrapper} >
          <div className={styles.gradientLeft} />
          <div className={styles.titleText}>
            <h1 >
              Deine Coverband
            </h1>
            <h2>
              Für die beste Unterhaltung
            </h2>
          </div>
          <div className={styles.gradientRight} />
        </div>
        <Link href='/kontakt' className={styles.contact} >
          Anfragen
        </Link>
      </Slider>
    </main>
  )
}
