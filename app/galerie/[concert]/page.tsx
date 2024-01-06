"use client";

import { useState } from 'react'
import concerts from '../Gallery.json'
import { notFound } from 'next/navigation'
import styles from './page.module.css'
import { H1 } from '@/components/Header';
import bgBW from '../../../public/img/bg_bw.jpg'
import Image from 'next/image';
import BackButton from '@/components/BackButton';

export default function Page({ params }: { params: { concert: string } }) {
  let [largeImg, setLargeImg] = useState(<></>)
  
  if (!params.concert || !concerts[params.concert as keyof Object]) {
    return notFound()
  }

  const data = concerts[params.concert as keyof Object]

  document.onkeydown = (e) => {
    if (e.code === "Escape") {
      setLargeImg(<></>)
    }
  }

  function galleryCardMobile(img: string, index: number) {
    return (
      <div className={img.vert ? styles.imageWrapperMobileVert : styles.imageWrapperMobile} >
        <Image
          className={styles.image}
          src={'/img/' + img.src}
          alt=''
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
    )
  }

  function galleryCardDesktop(img: string, index: number) {
    return (
      <Image
        className={styles.image}
        src={'/img/' + img.src}
        width={400}
        height={img.vert ? 630 : 300}
        alt=''
        style={{
          objectFit: 'cover',
          cursor: 'pointer'
        }}
        onClick={() => setLargeImg(
          <div className={styles.largeImg} onClick={() => setLargeImg(<></>)}>
            <div className={styles.largeImgContainer}>
              <Image
                src={'/img/' + img.src}
                fill
                alt=''
                quality={100}
                style={{
                  objectFit: 'contain',
                  flexShrink: 0,
                  maxHeight: '100%',
                  maxWidth: '100%',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
        )}
      />
    )
  }

  return (
    <>
      {largeImg}
      <main style={{ position: 'relative' }}>
        <div className={styles.bgImgContainer} >
          <div className={styles.bgImg}>
            <Image
              src={bgBW}
              alt=''
              fill
              style={{
                objectFit: 'cover',
                filter: 'blur(15px'
              }}
            />
          </div>
        </div>
        <H1 text={data.title} />
        <div className={styles.galleryContentMobile} >
          {data.images.map(galleryCardMobile)}
        </div>
        <div className={styles.galleryContentDesktop} >
          {data.images.map(galleryCardDesktop)}
        </div>
      </main>
      <BackButton to='/galerie' text='Zurück zur Galerie' color='darkred'/>
    </>
  )
}