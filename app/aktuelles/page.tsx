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

export const metadata: Metadata = {
  title: 'Aktuelles - Seven Heaven'
}

export default function Aktuelles() {
  return (
    <SubPage banner={banner} offset='top'>
      <H1 text='Aktuelles' />
      <div className={styles.textBox}>
        Hier erfährst du alles über anstehende Konzerte und was uns sonst so herumtreibt.
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
        <div className={styles.blogItem}>
          <div className={styles.blogText}>
            Hallo. Schön dass du dich auf diese Website verirrt hast. Ich möchte mich kurz vorstellen: Ich bin die Band. Also keine spezifische Person aus der Band, sondern einfach die Band. Ich leite Dich ein wenig durch diese Seite und erzähle Dir ein bisschen was über uns. Zum Beispiel in Form dieses Blogs hier, wenn Du es so nennen willst. Klicke Dich gerne durch diese Seite und lerne uns besser kennen, vielleicht sind wir ja was für deine kommende Feier. Viel Spaß!
          </div>
          <div className={styles.blogSeparator} />
        </div>
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
      <Poster image={poster_2024_01_20} href='/galerie/2024-01-20' text={<>
        Das Jugendhaus Neuried gehört für uns inzwischen zu den sehr vertrauten Locations.
        <br />
        Das Konzert war wieder mal eine richtige Party, wie ihr in der Galerie sehen könnt. 👀
        <br />
        <br />
        Vielen Dank an alle, die da waren!
      </>} />
    </SubPage>
  )
}