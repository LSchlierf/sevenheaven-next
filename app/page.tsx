import Link from 'next/link'
import styles from './page.module.css'
import Slider from '@/components/Slider'
import { H3 } from '@/components/Header'
import Image from 'next/image'
import background from '@/public/img/bg_red.jpg'

export default function Home() {
  return (
    <main>
      <div style={{
        position: 'relative'
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
        <H3 text='Frischer Wind für München und Umgebung' />
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
