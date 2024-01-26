"use client";

import { useState } from 'react'
import styles from './BurgerMenu.module.css'
import Link from 'next/link';

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', updateScrolled)
  window.addEventListener('resize', updateScrolled)
}

function updateScrolled() {
  if (typeof document !== 'undefined') {
    const htmlElement = document.documentElement
    const screenScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    htmlElement.style.setProperty("--scrolled", String(Math.min(screenScrolled, 0.5) * 2))
  }
}

updateScrolled()

export default function BurgerMenu() {
  let [shown, setShown] = useState(false)

  function toggleBurger() {
    setShown(!shown)
    const list = Array.from(document.getElementsByClassName(styles.burgerLine))

    for (let item of list) {
      item.classList.toggle(styles.down)
      item.classList.add(styles.animating)
    }

    setTimeout(() => {
      for (let item of list) {
        item.classList.remove(styles.animating)
      }
    }, 400)
  }

  function closeBurger() {
    if (shown) {
      toggleBurger()
    }
  }

  return (
    <>
      <div className={styles.burger} onClick={toggleBurger}>
        <div className={styles.burgerLine} id='burger0' />
        <div className={styles.burgerLine} id='burger1' />
        <div className={styles.burgerLine} id='burger2' />
      </div>
      {
        shown ?
          <div className={styles.menu}>
            <div className={styles.menuImgContainer} onClick={closeBurger}>
              <Link href='/'>
                <img src='/logo192.png' alt='Bandlogo' />
              </Link>
            </div>
            <div className={styles.menuItem} onClick={closeBurger}>
              <Link href='/aktuelles'>
                Aktuelles
              </Link>
            </div>
            <div className={styles.menuItem} onClick={closeBurger}>
              <Link href='/wir'>
                Über uns
              </Link>
            </div>
            <details className={styles.menuItem}>
              <summary>
                Angebot
              </summary>
              <div className={styles.sub} onClick={closeBurger}>
                <Link href='/angebot/event'>
                  Eventband
                </Link>
                <Link href='/angebot/hochzeit'>
                  Hochzeitsband
                </Link>
                <Link href='/angebot/party'>
                  Partyband
                </Link>
              </div>
            </details>
            <div className={styles.menuItem} onClick={closeBurger}>
              <Link href='/repertoire'>
                Repertoire
              </Link>
            </div>
            <div className={styles.menuItem} onClick={closeBurger}>
              <Link href='/galerie'>
                Galerie
              </Link>
            </div>
            <div className={styles.menuItem} onClick={closeBurger}>
              <Link href='/kontakt'>
                Kontakt
              </Link>
            </div>
          </div>
          : <></>
      }

    </>
  )
}