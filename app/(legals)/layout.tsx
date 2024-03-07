import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import bg from '@/public/img/bg_red.jpg'
import BackButton from '@/components/BackButton';

export default function LegalLayout(props: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        {props.children}
      </div>
      <BackButton to='/' text='Zurück zur Startseite' />
      <div className={styles.gradient} />
      <div className={styles.background}>
        <Image
          src={bg}
          alt=''
          fill
          placeholder='blur'
          quality={10}
          style={{
            objectFit: 'cover',
            flexShrink: 0,
            filter: 'blur(15px)'
          }}
        />
      </div>
    </main>
  )
}