import TextLogo from './TextLogo'
import styles from './TitleBar.module.css'

export default function TitleBar() {
  return (
    <>
      <header className={styles.titleBar}>
        <div className={styles.desktopLinks}>
          <div className={styles.desktopLink}>
            <a href='/aktuelles'>
              Aktuelles
            </a>
          </div>
          <div className={styles.desktopLink}>
            <a href='/wir'>
              Über Uns
            </a>
          </div>
          <div className={styles.desktopLink}>
            <a href='/angebot'>
              Angebot
            </a>
          </div>
        </div>
        <TextLogo />
        <div className={styles.desktopLinks}>
          <div className={styles.desktopLink}>
            <a href='/repertoire'>
              Repertoire
            </a>
          </div>
          <div className={styles.desktopLink}>
            <a href='/galerie'>
              Galerie
            </a>
          </div>
          <div className={styles.desktopLink}>
            <a href='/kontakt'>
              Kontakt
            </a>
          </div>
        </div>
        <div className={styles.mobileIcons}>
          <a href='tel:+498971034962'>
            <img src='/phone.svg' />
          </a>
          <a href='mailto:kontakt@sevenheaven.band'>
            <img src='/mail.svg' />
          </a>
        </div>
      </header>
      <div className={styles.gradient} />
    </>
  )
}