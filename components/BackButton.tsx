import Link from 'next/link'
import styles from './BackButton.module.css'

export default function BackButton({ to, text, color = 'rgba(0,0,0,0.5)' }: { to: string, text: string, color?: string }) {
  return (
    <Link
      style={{
        backgroundColor: color
      }}
      className={styles.wrapper}
      href={to}
    >
      <img src='/arrow.svg' height={30} alt='' />
      <div className={styles.text}>
        {text}
      </div>
      <div style={{ width: 30 }} />
    </Link>
  )
}