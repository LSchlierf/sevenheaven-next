import Image from 'next/image'
import styles from './SubPage.module.css'
import background from '../public/img/bg_red.jpg'

export default function SubPage(props: any) {
  return (
    <main>
      <Image
        className={styles.banner}
        src={props.banner}
        alt='banner'
        fill
        quality={100}
        placeholder='blur'
        style={{
          zIndex: -2,
          objectFit: 'cover'
        }}
      />
      <div style={{
        height: '50vh'
      }} />
      <div style={{
        position: 'relative'
      }} >
        {props.children}
        <div className={styles.gradient} />
        <div style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          top: 0,
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
            <Image
              className={styles.bgImg}
              src={background}
              alt='background'
              fill
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
    </main>
  )
}