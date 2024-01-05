import styles from './Header.module.css'

function H1({ text }: { text: String }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.gradientLeft} />
      <h1 style={{
        fontFamily: 'Nexa Rust Sans',
        fontSize: 'xxx-large',
        fontWeight: 400
      }}>
        {text}
      </h1>
      <div className={styles.gradientRight} />
    </div>
  )
}

function H2({ text }: { text: String }) {
  return (
    <div className={styles.headerContainer}>
      <h2 style={{
        fontFamily: 'Nexa Rust Sans',
        fontSize: 'xx-large',
        fontWeight: 400
      }}>
        {text}
      </h2>
    </div>
  )
}

export { H1, H2 }