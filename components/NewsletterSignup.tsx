import Link from 'next/link'
import styles from './NewsletterSignup.module.css'

export default function NewsletterSignup() {
  return (
    <div className={styles.container}>
      <script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>
      <iframe frameBorder="0" id="iframewin" width="100%" height="300px" src="https://zcsub-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc6c0c27&zx=1316962e2&tD=1103f8808e99bf3c1&sD=1103f8808e99f33c1"></iframe>
      Mit der Anmeldung zum Newsletter bestätigst Du, dass Du unsere <Link href='/datenschutz'>Datenschutzerklärung</Link> gelesen und akzeptiert hast.
    </div>
  )
}