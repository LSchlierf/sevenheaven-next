import SubPage from "@/components/SubPage";
import banner from '@/public/img/2024-01-20/7H@aluciaphotos-67.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import image from '@/public/img/cards/hochzeit.jpg'
import ImageCard from "@/components/ImageCard";

export const metadata: Metadata = {
  title: 'Hochzeitsband - Seven Heaven'
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
        Was gibt es zu einer Hochzeitsband großartig zu sagen? "Wir
        spielen <b>hochwertige Tanzmusik</b>." Gut, das sagt eigentlich jeder. "Wir 
        bringen <b>beste Laune</b> zu deiner Hochzeit." Auch irgendwie nichts außergewöhnliches.
        "Wir machen euren Abend <b>unvergesslich</b>." Schon tausend Mal gehört. Versuchen wir es doch mal anders:
        <br />
        <br />
        Stell Dir vor deine Hochzeitsgäste wollen spürbar schon in Partystimmung wechseln,
        die Band spielt aber immer noch einen Walzer nach dem anderen. Nicht mit uns!
        Wir bereiten unser Repertoire so vor, dass wir schnell auf die Wünsche Deiner
        Gäste <b>reagieren</b> können.
        Noch dazu hast Du die Möglichkeit Dir Dein Wunsch-Repertoire
        zusammenzustellen. (Musst du aber natürlich nicht) Es sind Songs, die du
        hören willst nicht dabei? Gib uns Bescheid, wie nehmen sie mit in unsere
        Songliste auf.
      </ImageCard>
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}