import styles from './FAQ.module.css'
import { H3 } from './Header'

export default function FAQ() {
  return (
    <div className={styles.container} >
      <H3 text='"Muss ich Equipment zur Verfügung stellen?"' />
      Keine Sorge, um das Tonequipment, die sog. PA können wir uns selbst kümmern. Das einzige was wir zwingend von Dir brauchen ist
      Zugang zu Strom, am besten in Form von Steckdosen. (Dabei reichen handelsübliche Haushalts-Steckdosen.)
      Wenn Du dann noch in etwa 6 mal 4 Meter Platz für uns hast (am besten in Form
      einer Bühne), steht Deinem Event nichts mehr im Weg.
      <H3 text='"Was braucht ihr für die Anreise?"' />
      Wir transportieren das Equipment selbst zu Deinem Standort. Im Idealfall hast Du dann 2-3 Parkplätze für uns,
      auf die wir unsere Autos stellen können.
      <H3 text='"Wie lang könnt ihr spielen?"' />
      Grundsätzlich spricht nichts gegen einen langen musikalischen Abend/Tag. Allerdings gehen auch unsere körperlichen
      Ressourcen irgendwann zur Neige. Aus diesem Grund nehmen wir uns bei einer Spielzeit von mehr
      als 2 Stunden pro Stunde 15-20 Minuten Zeit um uns ein wenig zu regenerieren.
      Erfahrungsgemäß tut das dem Publikum auch ganz gut um durchzuschnaufen.
      <H3 text='"Spielt ihr auch Hintergrundmusik?"' />
      Wenn Du Dir das wünscht, treten wir auch gerne als Hintergrundmusik auf. Das ist aber etwas mit Vorsicht zu genießen,
      da unser Repertoire auf Party-/Gute Laune Songs spezialisiert ist und sich dementsprechend im Normalfall
      nicht für den Hintergrund von beispielsweise Empfängen eignet.
      Kontaktiere uns gerne diesbezüglich und wir helfen Dir da gerne beratend weiter.
      <H3 text='"Gibt es euch auch in kleinerer Besetzung?' />
      Seven Heaven besteht aus sieben Leuten, keinem weniger. Unser Klang ist von einer vollen Besetzung abhängig,
      da jeder einzelne auf der Bühne eine wichtige Rolle spielt. Eine Komprimierung würde dem Sound schaden.
      Das können wir weder vor Euch als Zuschauer noch vor uns rechtfertigen.
      <H3 text='"Wie gross muss die Veranstaltung sein?"' />
      Die Anzahl der Zuschauer hat weder Einfluss darauf, ob wir spielen, noch darauf, wie wir auftreten.
      Du bekommst von uns bei einer Veranstaltung mit 10 Leuten die gleiche Energie, wie wenn wir vor 500 Menschen spielen würden.
    </div>
  )
}