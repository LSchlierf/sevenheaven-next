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
  let [curIndex, setCurIndex] = useState(NaN)

  if (!params.concert || !concerts[params.concert as keyof Object]) {
    return notFound()
  }

  let data: any = concerts[params.concert as keyof Object]

  if (typeof document !== 'undefined') {
    document.onkeydown = (e) => {
      if (e.code === "Escape") {
        setLargeImg(<></>)
        setCurIndex(NaN)
      }
      else if(e.code === "ArrowRight" && !Number.isNaN(curIndex)) {
        turnRight(curIndex)
      } else if(e.code === "ArrowLeft" && !Number.isNaN(curIndex)) {
        turnLeft(curIndex)
      }
    }
  }

  function galleryCardMobile(img: any, index: number) {
    return (
      <div className={img.vert ? styles.imageWrapperMobileVert : styles.imageWrapperMobile} key={index}>
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

  function makeLargeImg({ src }: { src: string }, index: number) {
    setCurIndex(index)
    setLargeImg(
      <div className={styles.largeImg} onClick={() => {setLargeImg(<></>); setCurIndex(NaN)}}>
        <div className={styles.right} onClick={(e) => {turnRight(index); e.stopPropagation()}} >
          <img src='/triarrow.svg' alt='' height={50}/>
        </div>
        <div className={styles.left} onClick={(e) => {turnLeft(index); e.stopPropagation()}} >
          <img src='/triarrow.svg' alt='' height={50}/>
        </div>
        <div className={styles.largeImgContainer}>
          <Image
            src={'/img/' + src}
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
        <div className={styles.progress} >
          {index + 1} / {data.images.length}
        </div>
      </div>
    )
  }

  function turnRight(index : number) {
    let newIndex = (index + 1) % data.images.length
    setCurIndex(newIndex)
    makeLargeImg(data.images[newIndex], newIndex)
  }
  
  function turnLeft(index : number) {
    let newIndex = (index - 1 + data.images.length) % data.images.length
    setCurIndex(newIndex)
    makeLargeImg(data.images[newIndex], newIndex)
  }

  function galleryCardDesktop(img: any, index: number) {
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
        key={index}
        onClick={() => makeLargeImg(img, index)}
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
                filter: 'blur(15px) brightness(50%)'
              }}
            />
          </div>
        </div>
        <H1 text={data.title} />
        <div className={styles.text}>
          {data.text}
        </div>
        <div className={styles.galleryContentMobile} >
          {data.images.map(galleryCardMobile)}
        </div>
        <div className={styles.galleryContentDesktop} >
          {data.images.map(galleryCardDesktop)}
        </div>
      </main>
      <BackButton to='/galerie' text='Zurück zur Galerie' color='darkred' />
    </>
  )
}