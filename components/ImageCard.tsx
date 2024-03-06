import Image from 'next/image'
import styles from './ImageCard.module.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export default function ImageCard(props: { image: StaticImport | string, children: React.ReactNode, narrow?: boolean | undefined }) {
  return (
    <div
      className={props.narrow ? styles.wrapperNarrow : styles.wrapper}
    >
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