import Link from 'next/link'
import styles from './Footer.module.css'
import TextLogo from './TextLogo'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.gradient} />
        <TextLogo />
        <br />
        Ansprechpartner: Jakob Friederich / Julian Höflmaier
        <br />
        <br />
        <a className={styles.mail} href='mailto:kontakt@sevenheaven.band'>
          kontakt@sevenheaven.band
        </a>
        <br />
        <br />
        <a className={styles.phoneMobile} href='tel:+498971034962' >
          089 / 71034962
        </a>
        <div className={styles.phoneDesktop}>
          089 / 71034962
        </div>
        <div className={styles.gradient} />
        <div className={styles.legalLinks}>
          <Link className={styles.legalLink} href='/impressum'>
            Impressum
          </Link>
          <Link className={styles.legalLink} href='/datenschutz'>
            Datenschutz
          </Link>
        </div>
      </footer>
    </>
  )
}