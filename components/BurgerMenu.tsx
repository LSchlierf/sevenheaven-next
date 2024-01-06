"use client";

import { useState } from 'react'
import styles from './BurgerMenu.module.css'

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
            <div className={styles.menuImgContainer}>
              <a href='/'>
                <img src='/logo192.png' alt='Bandlogo' />
              </a>
            </div>
            <div className={styles.menuItem}>
              <a href='/aktuelles'>
                Aktuelles
              </a>
            </div>
            <div className={styles.menuItem}>
              <a href='/wir'>
                Über uns
              </a>
            </div>
            <details className={styles.menuItem}>
              <summary>
                Angebot
              </summary>
              <div className={styles.sub}>
                <a href='/angebot/event'>
                  Eventband
                </a>
                <a href='/angebot/hochzeit'>
                  Hochzeitsband
                </a>
                <a href='/angebot/party'>
                  Partyband
                </a>
              </div>
            </details>
            <div className={styles.menuItem}>
              <a href='/repertoire'>
                Repertoire
              </a>
            </div>
            <div className={styles.menuItem}>
              <a href='/galerie'>
                Galerie
              </a>
            </div>
            <div className={styles.menuItem}>
              <a href='/kontakt'>
                Kontakt
              </a>
            </div>
          </div>
          : <></>
      }

    </>
  )
}