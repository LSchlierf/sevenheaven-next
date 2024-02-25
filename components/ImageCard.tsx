import Image from 'next/image'
import styles from './ImageCard.module.css'

export default function ImageCard(props: any) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={props.image}
          className={styles.image}
          alt=''
          fill
        />
      </div>
      <div className={styles.children}>
        {props.children}
      </div>
    </div>
  )
}