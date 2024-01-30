import Link from 'next/link'
import TextLogo from './TextLogo'
import styles from './TitleBar.module.css'

export default function TitleBar() {
  return (
    <>
      <div className={styles.spacer} />
      <div className={styles.wrapper}>
        <header className={styles.titleBar}>
          <div className={styles.home}>
            <Link href='/' >
              <img src='/home.svg' />
            </Link>
          </div>
          <div className={styles.desktopLinks}>
            <div className={styles.desktopLink}>
              <Link href='/aktuelles'>
                Aktuelles
              </Link>
            </div>
            <div className={styles.desktopLink}>
              <Link href='/wir'>
                Über Uns
              </Link>
            </div>
            <details className={styles.menu}>
              <summary>
                Angebot
              </summary>
              <div className={styles.sub}>
                <Link href='/angebot/event'>
                  Eventband
                </Link>
                <Link href='/angebot/hochzeit'>
                  Hochzeitsband
                </Link>
                <Link href='/angebot/party'>
                  Partyband
                </Link>
              </div>
            </details>
          </div>
          <TextLogo />
          <div className={styles.desktopLinks}>
            <div className={styles.desktopLink}>
              <Link href='/repertoire'>
                Repertoire
              </Link>
            </div>
            <div className={styles.desktopLink}>
              <Link href='/galerie'>
                Galerie
              </Link>
            </div>
            <div className={styles.desktopLink}>
              <Link href='/kontakt'>
                Kontakt
              </Link>
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