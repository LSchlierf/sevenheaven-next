import SubPage from "@/components/SubPage";
import banner from '@/public/img/2023-03-25/L1000678.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import image from '@/public/img/cards/party.jpg'
import ImageCard from "@/components/ImageCard";
import styles from '../angebot.module.css'
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: 'Partyband - Seven Heaven | Der perfekte Sound für Deine Party',
  description: 'Seven Heaven - Du suchst noch eine Band für Deine nächste Feier? Dann bist Du hier richtig!'
}

export default function Party() {
  return (
    <SubPage banner={banner} offset='-7vw'>
      <H1 text='Partyband' />
      <ImageCard image={image} >
        Servus! Du bist auf der Seite gelandet, bei der sich alles um Deine perfekte Party dreht.
        Du fragst Dich, was an Partymusik so schwer sein soll? Und warum gerade wir
        bestens für Deine Feier geeignet sind? Dazu gleich mehr.
        <br />
        <br />
        Lass uns doch zunächst klären wo Partybands benötigt werden: Du könntest
        zum Beispiel eine unvergessliche <b>Geburtstagsparty</b> feiern wollen. Oder Dein
        Unternehmen könnte mal wieder eine ausgelassene <b>Firmenfeier</b> vertragen.
        Deine <b>Uni-Party</b> soll zum absoluten Kracher werden? Kein Problem. Oder wie wäre
        es einfach mit einer <b>Party zum reinen Vergnügen</b>? Lade Deine Leute ein und lass
        mal wieder die Sau raus!
        <br />
        <br />
        Und warum mit uns? Für den Fall, dass Dein Publikum jung ist (oder sich jung fühlen
        möchte), wissen wir genau, was die heutige Generation hört, weil wir die
        heutige Generation sind. Die etwas Erfahreneren holen wir mit sorgfältig
        ausgewählten Klassikern ab, die sich noch nicht komplett ausgehört haben.
        Außerdem ist das bei uns keine One-Band-Show. Wir laden Euch als Zuschauer ein
        mit uns Musik zu machen, indem wir mit Euch interagieren oder sogar
        Background-Gesang übernehmen lassen.
        <br />
        <br />
        Schau Dir gerne unser Highlight-Video einer Party aus dem Frühjahr 2023 an,
        um Dich zu überzeugen.
        <div className={styles.center}>
          <LinkButton href='https://youtu.be/urSar1gnXOQ?si=AZqWX8_H355gS5TX' text="Hier geht's zum Video" newPage />
        </div>
        Keine Überzeugung nötig? Kontaktiere uns unverbindlich und erzähl uns,
        was Du Dir vorstellst. Wir freuen uns auf Dich!
        <div className={styles.center}>
          <LinkButton href='/kontakt' text='Anfragen' />
        </div>
      </ImageCard>
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}