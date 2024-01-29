import SubPage from "@/components/SubPage";
import banner from '../../public/img/2023-03-25/L1000537.jpg'
import { H1, H2, H3 } from "@/components/Header";
import Jakob from '../../public/img/kontakt/Jakob.png'
import Juli from '../../public/img/kontakt/Juli.png'
import styles from './page.module.css'
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt - Seven Heaven'
}

export default function Kontakt() {
  return (
    <SubPage banner={banner} offset='center'>
      <H1 text='Kontakt' />
      <H2 text='Deine Ansprechpartner' />
      <div className={styles.portraits} >
        <div className={styles.portraitMobile}>
          <Image
            className={styles.image}
            src={Jakob}
            width={150}
            height={150}
            alt='Foto von Jakob'
            style={{
              borderRadius: 1000,
              marginBottom: 20,
              border: '2px solid gray'
            }}
          />
          Jakob Friederich
        </div>
        <div className={styles.portraitDesktop}>
          <Image
            className={styles.image}
            src={Jakob}
            width={300}
            height={300}
            alt='Foto von Jakob'
            style={{
              borderRadius: 1000,
              marginBottom: 20,
              border: '2px solid gray'
            }}
          />
          Jakob Friederich
        </div>
        <div className={styles.portraitMobile}>
          <Image
            className={styles.image}
            src={Juli}
            width={150}
            height={150}
            alt='Foto von Julian'
            style={{
              borderRadius: 1000,
              marginBottom: 20,
              border: '2px solid gray'
            }}
          />
          Julian Höflmaier
        </div>
        <div className={styles.portraitDesktop}>
          <Image
            className={styles.image}
            src={Juli}
            width={300}
            height={300}
            alt='Foto von Julian'
            style={{
              borderRadius: 1000,
              marginBottom: 20,
              border: '2px solid gray'
            }}
          />
          Julian Höflmaier
        </div>
      </div>
      <H2 text='Deine Nachricht' />
      <div className={styles.textBox} >
        Kontaktiere uns gerne und lass uns wissen, wonach du suchst.
        <br />
        Wir freuen uns auf Deine Nachricht.
      </div>
      <div className={styles.contactWrapper} >
        <div className={styles.channels}>
          <H3 text='Kanäle' />
          <a className={styles.channel} href='mailto:kontakt@sevenheaven.band'>
            <img
              src='/mail.svg'
              height={40}
              alt=''
            />
            kontakt@sevenheaven.band
          </a>
          <a className={styles.channelPhoneMobile} href='tel:+498971034962'>
            <img
              src='/phone.svg'
              height={40}
              alt=''
            />
            089 / 71034962
          </a>
          <div className={styles.channelPhoneDesktop}>
            <img
              src='/phone.svg'
              height={40}
              alt=''
            />
            089 / 71034962
          </div>
          <a className={styles.channel} href='https://instagram.com/sevenheaven.band'>
            <img
              src='/insta.svg'
              height={40}
              alt=''
            />
            @sevenheaven.band
          </a>
        </div>
        <div className={styles.separator} />
        <div className={styles.contactForm} >
          <H3 text='Direktnachricht' />
          <ContactForm />
        </div>
      </div>
    </SubPage>
  )
}