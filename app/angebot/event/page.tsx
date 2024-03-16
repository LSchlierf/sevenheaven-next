import SubPage from "@/components/SubPage";
import banner from '@/public/img/2023-05-25/itsMyLife.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import ImageCard from "@/components/ImageCard";
import image from '@/public/img/cards/event.jpg';
import styles from '../angebot.module.css'
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: 'Eventband - Seven Heaven',
  description: 'Seven Heaven - Du suchst noch eine Band für Dein nächstes Event? Dann bist Du hier richtig!'
}

export default function Event() {
  return (
    <SubPage banner={banner} offset='center'>
      <H1 text='Eventband' />
      <ImageCard image={image}>
        Servus, willkommen auf dieser Seite. Wenn Du hier gelandet bist, scheinst Du auf
        der Suche nach einer Eventband zu sein, richtig? Was darf es denn sein?
        Brauchst Du gute Unterhaltung für ein <b>Weinfest</b>? Möchtest du auf
        Deinem <b>Dorffest</b> so richtig einheizen? Oder vielleicht doch etwas Tanzmusik für
        Deine <b>Tanzveranstaltung</b>? Sag uns einfach was Du brauchst, wir kümmern uns darum.
        <br />
        <br />
        Durch unser breites und immer breiter werdendes Repertoire sind wir
        perfekt auf jede Art von Event vorbereitet. Und auch auf jede Länge der
        Veranstaltung. (Vorsicht hierbei: Ab 8 Stunden machen unsere Stimmen irgendwann
        nicht mehr mit.)
        <br />
        <br />
        Was uns besonders macht: Mit dem Mix aus den besten Songs aus fünf Jahrzehnten
        ist keine Generation vor guter Laune geschützt.
        <br />
        <br />
        Willst Du Dich von unserem Sound überzeugen?
        Schau doch in unserer Galerie vorbei.
        <div className={styles.center}>
          <LinkButton href='/galerie#videos' text='Zur Galerie' />
        </div>
        Kontaktiere uns doch einfach unverbindlich. Zusammen stellen wir mit Dir das
        perfekte Event für Dich und Deine Gäste zusammen.
        <div className={styles.center}>
          <LinkButton href='/kontakt' text='Anfragen' />
        </div>
      </ImageCard >
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}