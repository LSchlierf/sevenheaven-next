import Image from 'next/image'
import styles from './PortraitCard.module.css'

export default function PortraitCard({ img, name, role, text }: { img: string, name: String, role: string, text: string | React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={'/img/band/' + img}
        alt=''
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'top'
        }}
      />
      <details className={styles.banner}>
        <summary>
          <div className={styles.fields}>
            <div className={styles.name}>
              {name}
            </div>
            <div className={styles.role}>
              {role}
            </div>
          </div>
          <img src='/triarrow.svg' className={styles.icon} alt='' />
        </summary>
        <div className={styles.text}>
          {text}
        </div>
      </details>
    </div>
  )
}