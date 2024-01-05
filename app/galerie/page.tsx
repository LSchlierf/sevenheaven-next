import SubPage from "@/components/SubPage";
import banner from '../../public/img/11-11-2023/Band.jpg'
import { H1, H2 } from "@/components/Header";
import styles from './page.module.css'
import concerts from './Gallery.json'
import Image from "next/image";

function galleryPreview(concert: any, index: any) {
  return (
    <a href={'/galerie/' + concert[0]} key={index} className={styles.concertPreview}>
      <div className={styles.preview}>
        <Image
          src={'/img/' + concert[1].thumbnail}
          alt='Konzertvorschau'
          fill
          style={{
            objectFit: 'cover'
          }}
        />
        <img src='/photo-gallery-icon.svg' className={styles.galleryIcon} />
      </div>
      <div className={styles.concertTitle} >
        {concert[1].preview}
      </div>
    </a>
  )
}

export default function Galerie() {
  return (
    <SubPage banner={banner}>
      <H1 text='Galerie' />
      <div className={styles.textBox} >
        Anmerkung: Aus rechtlichen Gründen ist es uns leider nicht gestattet hier Cover-Songs zu veröffentlichen.
        Auf Anfrage schicken wir Dir aber gerne einige unserer Performances zu.
      </div>
      <H2 text='Fotos' />
      <div className={styles.concertList}>
        {Object.entries(concerts).map(galleryPreview)}
      </div>
      <H2 text='Videos' />
    </SubPage>
  )
}