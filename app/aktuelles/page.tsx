import SubPage from "@/components/SubPage";
import banner from '@/public/img/2023-11-11/Flo2.jpg'
import { H1, H2 } from "@/components/Header";
import styles from './page.module.css'
import { Metadata } from "next";
import blog from './blog.json'
import LinkButton from "@/components/LinkButton";
import Poster from "@/components/Poster";
import poster_2024_04_13 from '@/public/img/posters/2024-04-13.png'
import poster_2024_01_20 from '@/public/img/posters/2024-01-20.jpg'
import poster_2023_03_25 from '@/public/img/posters/2023-03-25.jpg'
import poster_2022_06_10 from '@/public/img/posters/2022-06-10.png'

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
      <H2 text='Kommende Gigs' />
      <Poster image={poster_2024_04_13} href='http://interim-kultur.de/Programm/?dfxid=491' external text={<>
        &quot;Endlich ist es wieder soweit&quot; passt diesmal gar nicht so gut, schließlich war das letzte Konzert erst Ende Januar, trotzdem können wir es kaum noch erwarten... 🎤🔜
        <br />
        <br />
        Nach nun fast 2 Jahren sind wir endlich wieder zurück im Interim!! Das heißt für euch: Schnappt euch Karten unter diesem Link, um uns wieder mit frischem Repertoire zu erleben!! 👀
      </>} />
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
      <H2 text='Vergangene Gigs' />
      <div className={styles.posters}>
        <Poster image={poster_2024_01_20} href='/galerie/2024-01-20' />
        <Poster image={poster_2023_03_25} href='/galerie/2023-03-25' />
        <Poster image={poster_2022_06_10} href='/galerie/2022-06-10' />
      </div>
    </SubPage>
  )
}