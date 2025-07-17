import SubPage from "@/components/SubPage";
import banner from '@/public/img/2025-02-21/20250221_235017.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import image from '@/public/img/2025-06-09/nelehollandmoritz-20250609-sevenheaven-243.jpg'
import ImageCard from "@/components/ImageCard";
import styles from '../angebot.module.css'
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: 'Hochzeitsband - Seven Heaven | Der perfekte Sound für Deine Hochzeit',
  description: 'Seven Heaven - Du suchst noch eine Band für Deine Hochzeit? Dann bist Du hier richtig!'
}

export default function Hochzeit() {
  return (
    <SubPage banner={banner} offset='center'>
      <H1 text='Hochzeitsband' />
      <ImageCard image={image} >
        Bevor wir anfangen über uns zu sprechen: Herzlichen Glückwunsch Euch zur Verlobung!
        Wir wünschen Euch von Herzen alles Gute für die Zukunft. Oder bist Du nur
        hier zum stöbern? Streich in dem Fall den Teil mit der Verlobung.
        <br />
        <br />
        Was gibt es zu einer Hochzeitsband großartig zu sagen? &quot;Wir
        spielen <b>hochwertige Tanzmusik</b>.&quot; Gut, das sagt eigentlich jeder. &quot;Wir
        bringen <b>beste Laune</b> zu deiner Hochzeit.&quot; Auch irgendwie nichts außergewöhnliches.
        &quot;Wir machen euren Abend <b>unvergesslich</b>.&quot; Schon tausend Mal gehört. Versuchen wir es doch mal anders:
        <br />
        <br />
        Stell Dir vor Deine Hochzeitsgäste wollen spürbar schon in Partystimmung wechseln,
        die Band spielt aber immer noch einen Walzer nach dem anderen. Nicht mit uns!
        Wir bereiten unser Repertoire so vor, dass wir schnell auf die Wünsche Deiner
        Gäste <b>reagieren</b> können.
        Noch dazu hast Du die Möglichkeit Dir Dein Wunsch-Repertoire
        zusammenzustellen. (Musst Du aber natürlich nicht) Es sind Songs, die Du
        hören willst nicht dabei? Gib uns Bescheid, wir nehmen sie mit in unsere
        Songliste auf.
        <div className={styles.center}>
          <LinkButton href='/galerie#videos' text='Zur Galerie' />
        </div>
        Bei spezifischeren Wünschen kontaktiere und gerne unverbindlich.
        Wir freuen uns auf Deine Nachricht!
        <div className={styles.center}>
          <LinkButton href='/kontakt' text='Anfragen' />
        </div>
      </ImageCard>
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}