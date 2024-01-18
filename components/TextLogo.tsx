import Link from 'next/link'
import styles from './TextLogo.module.css'

export default function TextLogo() {
  return (
    <Link href='/' className={styles.centerLogo}>
      <img src='/Logo.png' alt='' />
      <div className={styles.text}>
        SEVEN HEAVEN
      </div>
    </Link>
  )
}