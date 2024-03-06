import Image from 'next/image'
import styles from './Poster.module.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export default function Poster(props: {image : StaticImport, text: string | React.ReactNode, href? : string | undefined, external? : boolean | undefined}) {
  return (
    <a className={styles.wrapper} href={props.href} target={!!props.external ? '_blank' : ''} rel={!!props.external ? 'noopen noreferer' : ''}>
      <div className={styles.image}>
        <Image
          src={props.image}
          alt=''
          sizes='(max-width: 767px) 80vw 25vw'
          style={{
            objectFit: 'cover',
            flexShrink: 0,
            height: 'auto',
            width: '100%'
          }}
        />
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </a>
  )
}