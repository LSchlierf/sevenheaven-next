import Link from 'next/link'
import styles from './LinkButton.module.css'

export default function LinkButton(props: { href : string, text : string, newPage? : boolean | undefined }) {
  return (
    <div className={styles.wrapper}>
      <Link 
      className={styles.link}
      href={props.href}
      target={props.newPage ? '_blank' : ''}
      rel={props.newPage ? 'noopen noreferrer' : ''}
      >
        {props.text}
      </Link>
    </div>
  )
}