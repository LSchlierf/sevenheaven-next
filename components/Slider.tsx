"use client";

import { useState } from "react";
import styles from "./Slider.module.css"
import images from './Slider.json'
import Image from "next/image";

function getImages(input: string[]) {
  return input.map((src, index) =>
    <div className={styles.imgWrapper}>
      <Image
        key={src}
        src={'/img/slider/' + src}
        alt=''
        fill
        sizes='100vw'
        quality={100}
        priority={index == Math.round(input.length / 2) - 1}
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

export default function Slider() {
  let [imgM, setImgM] = useState(getImages(images.mobile))
  let [imgD, setImgD] = useState(getImages(images.desktop))

  function slideLeft() {
    const list = Array.from(document.getElementsByClassName(styles.imgWrapper))
    for(let item of list) {
      item.classList.add(styles.animateToLeft)
    }
    const imagesMNew = [imgM[imgM.length - 1], ...imgM.slice(0, imgM.length - 1)]
    const imagesDNew = [imgD[imgD.length - 1], ...imgD.slice(0, imgD.length - 1)]
    setImgM(imagesMNew)
    setImgD(imagesDNew)

    setTimeout(() => {
      for (let item of list) {
        item.classList.remove(styles.animateToLeft)
      }
    }, 400)
  }

  function slideRight() {
    const list = Array.from(document.getElementsByClassName(styles.imgWrapper))
    for(let item of list) {
      item.classList.add(styles.animateToRight)
    }
    const imagesMNew = [...imgM.slice(1, imgM.length), imgM[0]]
    const imagesDNew = [...imgD.slice(1, imgD.length), imgD[0]]
    setImgM(imagesMNew)
    setImgD(imagesDNew)

    setTimeout(() => {
      for (let item of list) {
        item.classList.remove(styles.animateToRight)
      }
    }, 400)
  }

  document.onkeydown = (e) => {
    switch (e.code) {
      case 'ArrowLeft':
        slideLeft()
        break
      case 'ArrowRight':
        slideRight()
        break
      default:
        break
    }
  }

  return (
    <>
      <div className={styles.sliderMobile}>
        {imgM}
        <div className={styles.buttonRight} onClick={slideRight}>
          <img src='/triarrow.svg' 
            height={20}
          />
        </div>
        <div className={styles.buttonLeft} onClick={slideLeft}>
          <img src='/triarrow.svg' 
            height={20}
          />
        </div>
      </div>
      <div className={styles.sliderDesktop}>
        {imgD}
        <div className={styles.buttonRight} onClick={slideRight}>
          <img src='/triarrow.svg' 
            height={50}
          />
        </div>
        <div className={styles.buttonLeft} onClick={slideLeft}>
          <img src='/triarrow.svg' 
            height={50}
          />
        </div>
      </div>
    </>
  )
}