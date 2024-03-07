"use client";

import { useState } from 'react';
import styles from './VideoCard.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function VideoCard({ src, thumbnail, text, domain }: { src: string, thumbnail: string, text: string | React.ReactNode, domain: string }) {

  const video = (
    <div className={styles.video}>
      <iframe width="100%" height="100%" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowFullScreen />
    </div>
  )

  const disclaimer = (
    <div className={styles.disclaimer}>
      <div className={styles.disclaimerBlur} id={src}
        onMouseEnter={() => {
          if (typeof document !== 'undefined') {
            setTimeout(() => document.getElementById(src)?.classList.add(styles.active), 10)
          }
        }}
        onMouseLeave={() => {
          if (typeof document !== 'undefined') {
            document.getElementById(src)?.classList.remove(styles.active)
          }
        }}
      >
        <div className={styles.disclaimerText} >
          Externer Inhalt von {domain}.
          <br />
          Indem Sie den Inhalt laden, bestätigen Sie, dass Ihre Daten an {domain} übermittelt werden dürfen, und
          dass Sie die <Link href='/datenschutz' className={styles.disclaimerButton}>Datenschutzerklärung</Link> gelesen haben.
        </div>
        <div className={styles.disclaimerButton} onClick={() => setContent(video)} >
          Anzeigen
        </div>
      </div>
      <img src='/play.svg' alt='' className={styles.play} />
      <Image
        src={'/img/' + thumbnail}
        alt=''
        fill
        sizes='(ma-width: 767px) 80vw 29vw'
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  )

  const [content, setContent] = useState(disclaimer)
  return (
    <div className={styles.videoCard} >
      <div className={styles.contentWrapper}>
        {content}
      </div>
      <div className={styles.caption}>
        {text}
      </div>
    </div>
  )
}