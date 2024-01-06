"use client";

import { useState } from 'react';
import styles from './VideoCard.module.css'
import Image from 'next/image';

export default function VideoCard({ src, thumbnail, text, domain }: { src: string, thumbnail: string, text: string | React.ReactNode, domain: string }) {

  const video = (
    <div className={styles.video}>
      <iframe width="100%" height="100%" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowFullScreen />
    </div>
  )

  const disclaimer = (
    <div className={styles.disclaimer}>
      <div className={styles.disclaimerBlur}>

        <div className={styles.disclaimerText} >
          Externer Inhalt von {domain}.
        </div>
        <div className={styles.disclaimerButton} onClick={() => setContent(video)} >
          Anzeigen
        </div>
      </div>
      <Image
        src={'/img/' + thumbnail}
        alt=''
        fill
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