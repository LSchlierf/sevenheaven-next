import SubPage from "@/components/SubPage";
import banner from '@/public/img/2023-11-11/Flo2.jpg'
import { H1, H2 } from "@/components/Header";
import styles from './page.module.css'
import { Metadata } from "next";
import blog from './blog.json'
import LinkButton from "@/components/LinkButton";
import Poster from "@/components/Poster";
import poster_2025_03_21 from '@/public/img/posters/2025-03-21.png'
import poster_2025_02_21 from '@/public/img/posters/2025-02-21.png'
import poster_2024_07_21 from '@/public/img/posters/2024-07-21.png'
import poster_2024_04_13 from '@/public/img/posters/2024-04-13.png'
import poster_2024_01_20 from '@/public/img/posters/2024-01-20.jpg'
import poster_2023_03_25 from '@/public/img/posters/2023-03-25.jpg'
import poster_2022_06_10 from '@/public/img/posters/2022-06-10.png'
import NewsletterSignup from "@/components/NewsletterSignup";
import upcoming from "@/components/upcoming";

export const metadata: Metadata = {
  title: 'Aktuelles - Seven Heaven | Hier siehst du unsere kommenden Konzerte',
  description: 'Seven Heaven - Hier erfährst Du alles über anstehende Konzerte und was uns sonst so herumtreibt.'
}

export default function Aktuelles() {
  return (
    <SubPage banner={banner} offset='top'>
      <H1 text='Aktuelles' />
      <div className={styles.textBox}>
        Hier erfährst Du alles über anstehende Konzerte und was uns sonst so herumtreibt.
      </div>
      {upcoming()}
      <H2 text='Newsletter' />
      <div className={styles.textBox}>
        Melde dich zu unserem Newsletter an, um keine Neuigkeiten mehr zu verpassen.
      </div>
      {NewsletterSignup()}
      <H2 text='Historie' />
      <div className={styles.textBox}>
        Hier bleibst du up-to-date über die aktuellen Entwicklungen.
      </div>
      <div className={styles.history} >
        {Object.entries(blog).map(([title, content]) => <div className={styles.blogItem} key={title}>
          <div className={styles.blogContent} >
            <div className={styles.blogTitle} >
              {title}
            </div>
            <div className={styles.blogText} >
              {content.text}
              {'gallery' in content ? <LinkButton text='Zur Galerie' href={'/galerie/' + content.gallery} /> : <></>}
            </div>
          </div>
          <div className={styles.blogSeparator} />
        </div>)}
      </div>
      <H2 text='Presented by Seven Heaven' />
      <div className={styles.posters}>
        <Poster image={poster_2025_03_21} />
        <Poster image={poster_2025_02_21} />
        <Poster image={poster_2024_07_21} href='/galerie/2024-07-21' />
        <Poster image={poster_2024_04_13} href='/galerie/2024-04-13' />
        <Poster image={poster_2024_01_20} href='/galerie/2024-01-20' />
        <Poster image={poster_2023_03_25} href='/galerie/2023-03-25' />
        <Poster image={poster_2022_06_10} href='/galerie/2022-06-10' />
      </div>
    </SubPage>
  )
}