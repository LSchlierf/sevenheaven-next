import Link from 'next/link'
import styles from './page.module.css'
import Slider from '@/components/Slider'
import { H2, H3 } from '@/components/Header'
import Image from 'next/image'
import background from '@/public/img/bg_red.jpg'
import ImageCard from '@/components/ImageCard'
import image from '@/public/img/cards/main.jpg'
import VideoCard from '@/components/VideoCard'
import Review from '@/components/Review'

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
          vierstimmiger Gesangssätze, neuer Interpretationen und
          natürlich auch alter Klassiker ein einzigartiges
          Partyerlebnis auf die Bühne, beziehungsweise zu Deiner
          Feier / Deinem Event.
          <br />
          <br />
          Unsere Markenzeichen: Qualitativ hochwertige Musik,
          komplexe Arrangements und - am wichtigsten - eine
          ganze Menge Spaß am gemeinsamen Musizieren.
          <br />
          <br />
          Haben wir dein Interesse geweckt?
          Melde Dich gerne bei uns!
        </ImageCard>
        <H2 text='Mal reinhören?' />
        <div className={styles.text} >
          Sieh Dir gerne einen Zusammenschnitt zweier Konzerte an. <br /> So bekommst Du einen guten Eindruck von unserer Art, Musik zu machen.
        </div>
        <div className={styles.videos} >
          <VideoCard src='https://www.youtube-nocookie.com/embed/urSar1gnXOQ?autoplay=1' text={<>Konzert Jugendhaus Neuried 2023<br />(Highlights)</>} thumbnail='thumbnails/juha.jpg' domain='YouTube' />
          <VideoCard src='https://www.youtube-nocookie.com/embed/j6pDTYMMN7o?autoplay=1' text={<>40-jähriges Westpark Jubiläum 2023<br />(Highlights)</>} thumbnail='thumbnails/westpark.jpg' domain='YouTube' />
        </div>
        <H2 text='Das sagen unsere Gäste' />
        <div className={styles.reviews} >
          <Review name='Lena Johanna' rating={5} link='https://g.co/kgs/ZtetMxR' review={
            <>
              Auf allen Konzerten ist immer eine super Stimmung. Haben ein tolles Reportoire und schaffen es ihr Publikum zum Tanzen zu animieren. Man merkt die Freude die sie alle dabei haben und diesen Spaß übertragen sie auf alle anderen. Jedes Konzert ist ein denkwürdiger Abend und ein Riesenspaß.
              <br />
              Eine große Empfehlung!!
            </>
          } />
          <Review name='Queller man' rating={5} link='https://g.co/kgs/68bGvK1' review={
            <>
              SevenHeaven war der Hammer! Die Energie auf der Bühne hat mich und meine Freunde voll mitgerissen. Die Songauswahl war top, von alten Klassikern bis zu aktuellen Hits.
              <br />
              <br />
              Ich hatte mega Spaß und würde definitiv wieder hingehen! 🎉
            </>
          } />
          <Review name='Elias Wolf' rating={5} link='https://g.co/kgs/ZY9KNVs' review={
            <>
              Ich war schon auf mehreren Konzerten von Seven Heaven und es war jedes mal ein Highlight. Das Konzert beim Weinfest im Westpark hat mir richtig gut gefallen. Die Stimmung war super, sowohl bei Jugendlichen und Kindern als auch beim erwachsenen Publikum. Die Songs waren vielseitig und wurden auch sehr gut aufgeführt. Ich bemühe mich auf jedes öffentliche Konzert zu gehen und bis jetzt war es immer ein wundervoller Abend.
              <br />
              Alles in allem ist die Band auf jeden Fall zu empfehlen.
            </>
          } />
        </div>
        <div className={styles.text} >
          Du warst auch auf einem Konzert von uns? <a href='https://g.page/r/Cc-5aioIdsr_EB0/review' target='_blank' rel='noopen noreferer'>Hier</a> kannst du eine Bewertung hinterlassen. Vielen Dank!
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
                quality={10}
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
