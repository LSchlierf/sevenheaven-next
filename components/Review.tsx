import React from 'react'
import styles from './Review.module.css'

export default function Review(
  props: {
    name: string | React.ReactNode,
    rating: number,
    review: string | React.ReactNode,
    link?: string | undefined
  }
) {

  const numFullStars = (rating: number) => Math.floor(Math.round((Math.max(0, Math.min(5, rating)) * 2)) / 2)
  const numHalfStars = (rating: number) => Math.floor(Math.round((Math.max(0, Math.min(5, rating)) * 2)) % 2)
  const numEmptyStars = (rating: number) => Math.floor(Math.round((Math.max(0, Math.min(5, 5 - rating)) * 2)) / 2)

  return (
    <a className={styles.wrapper} href={props.link} target='_blank' rel='noopener noreferer' >
      <div className={styles.head} >
        {props.name}
      </div>
      <div className={styles.body} >
        <div className={styles.rating} >
          <div className={styles.stars} >
            {Array.from({ length: numFullStars(props.rating) }, (_, i) => <img src='/full-star.svg' alt='' key={i} height={20} />)}
            {Array.from({ length: numHalfStars(props.rating) }, (_, i) => <img src='/half-star.svg' alt='' key={i} height={20} />)}
            {Array.from({ length: numEmptyStars(props.rating) }, (_, i) => <img src='/empty-star.svg' alt='' key={i} height={20} />)}
          </div>
          {props.rating}/5 Sterne
        </div>
        <div className={styles.text} >
          {props.review}
        </div>
      </div>
    </a>
  )
}