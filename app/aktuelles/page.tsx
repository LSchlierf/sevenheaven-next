import SubPage from "@/components/SubPage";
import banner from '@/public/img/2023-11-11/Flo2.jpg'
import { H1, H2 } from "@/components/Header";
import styles from './page.module.css'
import { Metadata } from "next";
// import juha from '@/public/img/posters/juha.jpg'
// import ImageCard from "@/components/ImageCard";
// import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: 'Aktuelles - Seven Heaven'
}

export default function Aktuelles() {
  return (
    <SubPage banner={banner} offset='top'>
      <H1 text='Aktuelles' />
      <div className={styles.textBox}>
        Hier erfährst du alles über anstehende Konzerte und was uns sonst so herumtreibt.
      </div>
      <H2 text='Kommende Gigs' />
      <div className={styles.spacer} />
      {/* <H2 text='Vergangene Gigs' />
      <ImageCard image={juha} narrow>
        Unser letztes Konzert war ein voller Erfolg
        <br />
        <br />
        Schau doch gerne in der Galerie vorbei:
        <div className={styles.center}>
          <LinkButton href='/galerie/2024-01-20' text='Galerie' />
        </div>
      </ImageCard> */}
      <H2 text='Unser Fotoshooting im März' />
      <div className={styles.spacer} />
    </SubPage>
  )
}