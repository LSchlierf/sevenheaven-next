import styles from './TextLogo.module.css'

export default function TextLogo() {
  return (
    <a href='/' className={styles.centerLogo}>
      <img src='/Logo.png'/>
      <div className={styles.text}>
        SEVEN HEAVEN
      </div>
    </a>
  )
}