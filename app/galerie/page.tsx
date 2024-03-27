import SubPage from "@/components/SubPage";
import banner from '@/public/img/2023-11-11/Band.jpg'
import { H1, H2 } from "@/components/Header";
import styles from './page.module.css'
import concerts from './Gallery.json'
import Image from "next/image";
import VideoCard from "@/components/VideoCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Galerie - Seven Heaven | Die schönsten Aufnahmen unserer Auftritte',
  description: 'Seven Heaven - Hier kannst Du die Fotos unserer Konzerte sowie Videos von uns ansehen.'
}

function galleryPreview(concert: any, index: any) {
  return (
    <a href={'/galerie/' + concert[0]} key={index} className={styles.concertPreview}>
      <div className={styles.preview}>
        <Image
          src={'/img/' + concert[1].thumbnail}
          alt='Konzertvorschau'
          fill
          sizes='(ma-width: 767px) 80vw 29vw'
          style={{
            objectFit: 'cover'
          }}
        />
        <img src='/photo-gallery-icon.svg' className={styles.galleryIcon} alt='' />
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
      <div id='videos' />
      <H2 text='Videos' />
      <div className={styles.videos} >
        <VideoCard src='https://www.youtube-nocookie.com/embed/qWwdPrLqDso?autoplay=1' text={<>Inside Seven Heaven<br />(Part 1)</>} thumbnail='thumbnails/inside1.jpg' domain='YouTube' />
        <VideoCard src='https://www.youtube-nocookie.com/embed/fqxEIZ4eg38?autoplay=1' text={<>Inside Seven Heaven<br />(Part 2)</>} thumbnail='thumbnails/inside2.jpg' domain='YouTube' />
        <VideoCard src='https://www.youtube-nocookie.com/embed/9AU7nnl1-mk?autoplay=1' text={<>Inside Seven Heaven<br />(Part 3)</>} thumbnail='thumbnails/inside3.jpg' domain='YouTube' />
        <VideoCard src='https://www.youtube-nocookie.com/embed/j6pDTYMMN7o?autoplay=1' text={<>40-jähriges Westpark Jubiläum 2023<br />(Highlights)</>} thumbnail='thumbnails/westpark.jpg' domain='YouTube' />
        <VideoCard src='https://www.youtube-nocookie.com/embed/urSar1gnXOQ?autoplay=1' text={<>Konzert Jugendhaus Neuried 2023<br />(Highlights)</>} thumbnail='thumbnails/juha.jpg' domain='YouTube' />
      </div>
    </SubPage>
  )
}