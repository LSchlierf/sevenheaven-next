import Link from 'next/link'
import styles from './page.module.css'
import Slider from '@/components/Slider'
import { H2, H3 } from '@/components/Header'
import Image from 'next/image'
import background from '@/public/img/bg_red.jpg'
import ImageCard from '@/components/ImageCard'
import image from '@/public/img/cards/main.jpg'
import LinkButton from '@/components/LinkButton'
import VideoCard from '@/components/VideoCard'

export default function Home() {
  return (
    <main>
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }} >
        <Slider>
          <div className={styles.landingContent}>
            <div className={styles.titleWrapper} >
              <div className={styles.gradientLeft} />
              <div className={styles.titleText}>
                <h1 >
                  Deine Coverband
                </h1>
                <h2>
                  Für die beste Unterhaltung
                </h2>
              </div>
              <div className={styles.gradientRight} />
            </div>
            <Link href='/kontakt' className={styles.contact} >
              Anfragen
            </Link>
          </div>
        </Slider>
        <H2 text='Frischer Wind für München und Umgebung' />
        <ImageCard image={image} narrow>
          Servus zusammen, wir sind Seven Heaven! Eine
          Party-Coverband aus München.
          <br />
          <br />
          Noch eine von denen? Gibt es davon nicht schon unzählige?
          Die machen doch alle das Gleiche!
          <br />
          <br />
          Keine Sorge, nicht mit uns! Mit der Perspektive einer
          komplett neuen Generation bringen wir mithilfe
          vierstimmiger Gesangssätze, neuen Interpretationen und
          natürlich auch alten Klassikern ein einzigartiges
          Partyerlebnis auf die Bühne, beziehungsweise zu Deiner
          Feier/Deinem Event.
          <br />
          <br />
          Unsere Markenzeichen: Qualitativ hochwertige Musik,
          komplexe Arrangements und - am wichtigsten - eine
          ganze Menge Spaß am gemeinsamen Musizieren.
          <br />
          <br />
          Haben wir dein Interesse geweckt?
          Melde dich gerne bei uns!
          {/* <div className={styles.center}>
            <LinkButton href='/kontakt' text='Anfragen' />
          </div> */}
        </ImageCard>
        <H2 text='Mal reinhören?' />
        <div className={styles.videos} >
          <VideoCard src='https://www.youtube.com/embed/urSar1gnXOQ?si=DQh8lAVymiEx-CFJ' text={<>Konzert Jugendhaus Neuried 2023<br />(Highlights)</>} thumbnail='thumbnails/juha.jpg' domain='YouTube' />
          <VideoCard src='https://www.youtube.com/embed/j6pDTYMMN7o?si=mEWEJK5ZGlRIHqyF' text={<>40-jähriges Westpark Jubiläum 2023<br />(Highlights)</>} thumbnail='thumbnails/westpark.jpg' domain='YouTube' />
        </div>

        {/* <div className={styles.spacer} /> */}
        <div className={styles.gradient} />
        <div style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          top: '80vh',
          height: 'calc(100% - 80vh)',
          width: '100vw',
          zIndex: -1
        }}>
          <div style={{
            position: 'sticky',
            top: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}>
            <div style={{
              position: 'relative',
              top: '0',
              width: '100vw',
              height: '100vh',
              objectFit: 'cover'
            }}>
              <Image
                className={styles.bgImg}
                src={background}
                priority
                alt='background'
                fill
                sizes='100vw'
                quality={100}
                placeholder='blur'
                style={{
                  zIndex: -1,
                  objectFit: 'cover',
                  filter: 'blur(15px)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
