import styles from './Header.module.css'

function H1({ text }: { text: String }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.gradientLeft} />
      <h1 style={{
        fontFamily: 'nexa-rust-sans-black-2, sans-serif',
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
        fontFamily: 'nexa-rust-sans-black-2, sans-serif',
        padding: '0 20px',
        fontWeight: 400
      }}>
        {text}
      </h2>
    </div>
  )
}

function H3({ text }: { text: String }) {
  return (
    <div className={styles.headerContainer}>
      <h3 style={{
        fontFamily: 'nexa-rust-sans-black-2, sans-serif',
        padding: '0 20px',
        fontWeight: 400
      }}>
        {text}
      </h3>
    </div>
  )
}

export { H1, H2, H3 }