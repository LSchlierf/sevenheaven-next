import TextLogo from './TextLogo'
import styles from './TitleBar.module.css'

export default function TitleBar() {
  return (
    <>
      <div className={styles.spacer} />
      <div className={styles.wrapper}>
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
            <details className={styles.menu}>
              <summary>
                Angebot
              </summary>
              <div className={styles.sub}>
                <a href='/angebot/event'>
                  Eventband
                </a>
                <a href='/angebot/hochzeit'>
                  Hochzeitsband
                </a>
                <a href='/angebot/party'>
                  Partyband
                </a>
              </div>
            </details>
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
              <img src='/phone.svg' alt='' />
            </a>
            <a href='mailto:kontakt@sevenheaven.band'>
              <img src='/mail.svg' alt='' />
            </a>
          </div>
        </header>
        <div className={styles.gradient}>
          <img src='/triarrow.svg' className={styles.arrow} alt='' />
        </div>
      </div>
    </>
  )
}