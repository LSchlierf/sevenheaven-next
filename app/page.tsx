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
import NewsletterSignup from '@/components/NewsletterSignup'
import upcoming from '@/components/Upcoming'

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
        {upcoming()}
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
        <Link href='/wir' className={styles.link}>
          Hier erfährst Du mehr über uns als Band.
        </Link>
        <H2 text='Mal reinhören?' />
        <div className={styles.text} >
          Sieh Dir gerne einen Zusammenschnitt unserer Konzerte an. <br /> So bekommst Du einen guten Eindruck von unserer Art, Musik zu machen.
        </div>
        <div className={styles.videos} >
          <VideoCard src='https://www.youtube-nocookie.com/embed/KYhSNidUJag?autoplay=1' text={<>Musikalisches Weinfest 2025<br />(Highlights)</>} thumbnail='thumbnails/weinfest.png' domain='YouTube' />
        </div>
        <Link href='/galerie' className={styles.link} >
          Hier siehst Du weitere Fotos und Aufnahmen.
        </Link>
        <H2 text='Das sagen unsere Gäste' />
        <div className={styles.reviews} >
          <Review name='Ralf Isermann' rating={5} link='https://maps.app.goo.gl/zBGMYh6uMcgTrDRA9' review={
            <>
              Eine herausragende Band! Seven Heaven haben auf unserer Silberhochzeit in München gespielt und hatten sehr großen Anteil daran, dass es ein rauschendes Fest wurde. Freunde und Familie, aus ganz Deutschland angereist, schwärmen auch Wochen später.
              <br />
              Nur ein Beispiel: Es ist ein klares Statement des Selbstbewusstseins einen Auftritt mit den Dire Straits zu eröffnen. Damit sagst du, du kannst sowohl instrumental als auch gesanglich richtig was - und bei Seven Heaven stimmen Instrumente und Gesang perfekt. Die Musiker unter unseren Gästen waren beeindruckt, alle Gäste haben sich praktisch durchgehend zum Tanzen animieren lassen. Wir haben selten erlebt, dass bei den letzten Liedern die Tanzfläche noch genauso voll ist wie zu Beginn. Hier war es so.
              <br />
              Auch organisatorisch lief alles einwandfrei. Die Band kümmert sich um alles, Absprachen waren reibungslos. Und auf der Party wurde immer flexibel und schnell auf Wünsche reagiert, zum Beispiel wenn Gäste kurz was aufführen wollten. Insgesamt wunderbar, wir sind ewig dankbar für den tollen Abend.
            </>
          } />
          <Review name='Annalen Löffler' rating={5} link='https://maps.app.goo.gl/jmSeHVTNNMReb3uY8' review={
            <>
              7heaven hat von Beginn an mit ihrer unglaublichen Stimmung gepunktet. Ich freue mich zudem jedes Mal über die Möglichkeit, neue Leute kennenzulernen und interessante Gespräche zu führen - natürlich in den Pausen, denn während der Auftritte wird ordentlich gesungen, getanzt und gelacht.
              <br />
              10/10 Punkte und eine große Empfehlung für jeden, der seinen Hinterhof mit einer großartigen Stimmung erfüllen möchte.
            </>
          } />
          <Review name='Lena Johanna' rating={5} link='https://g.co/kgs/ZtetMxR' review={
            <>
              Auf allen Konzerten ist immer eine super Stimmung. Haben ein tolles Reportoire und schaffen es ihr Publikum zum Tanzen zu animieren. Man merkt die Freude die sie alle dabei haben und diesen Spaß übertragen sie auf alle anderen. Jedes Konzert ist ein denkwürdiger Abend und ein Riesenspaß.
              <br />
              Eine große Empfehlung!!
            </>
          } />
        </div>
        <div className={styles.text} >
          Du warst auch auf einem Konzert von uns? <a href='https://g.page/r/Cc-5aioIdsr_EB0/review' target='_blank' rel='noopen noreferer'>Hier</a> kannst du eine Bewertung hinterlassen. Vielen Dank!
        </div>
        <H2 text='Newsletter' />
        <div className={styles.text}>
          Melde dich zu unserem Newsletter an, um keine Neuigkeiten mehr zu verpassen.
        </div>
        {NewsletterSignup()}
        <Link href='/aktuelles' className={styles.link}>
          Hier siehst Du alternativ unsere nächsten Konzerttermine.
        </Link>

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
