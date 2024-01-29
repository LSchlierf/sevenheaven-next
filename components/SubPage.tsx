import Image from 'next/image'
import styles from './SubPage.module.css'
import background from '../public/img/bg_red.jpg'
import BackButton from './BackButton'

export default function SubPage(props: any) {
  return (
    <main>
      <div className={styles.bannerContainer}>
        <Image
          className={styles.banner}
          src={props.banner}
          alt='banner'
          fill
          sizes='100vw'
          quality={100}
          placeholder='blur'
          style={{
            zIndex: -2,
            objectFit: 'cover',
            objectPosition: 'center ' + (props.offset || '-6vw')
          }}
        />
      </div>
      <div className={styles.spacer} />
      <div style={{
        position: 'relative'
      }} >
        {props.children}
        <BackButton text='Zurück zur Startseite' to='/' />
        <div className={styles.gradient} />
        <div style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          top: 200,
          height: '100%',
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
    </main>
  )
}