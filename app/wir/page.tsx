import SubPage from '@/components/SubPage'
import styles from './page.module.css'
import banner from '@/public/img/2023-11-11/banner.jpg'
import { H1, H2 } from '@/components/Header'
import PortraitCard from '@/components/PortraitCard'
import { Metadata } from 'next'
import image from '@/public/img/cards/wir.jpg'
import ImageCard from '@/components/ImageCard'
import LinkButton from '@/components/LinkButton'

export const metadata: Metadata = {
  title: 'Über uns - Seven Heaven'
}

export default function Wir() {
  return (
    <SubPage banner={banner} offset='-12vw'>
      <H1 text='Über uns' />
      <H2 text='Die Band' />
      <ImageCard image={image}>
        Die Frage, die uns am häufigsten gestellt wird ist wohl: &quot;Welche Musik spielt ihr?&quot;
        Unsere Antwort: &quot;Welche Musik hörst du gerne?&quot;
        <br />
        <br />
        Servus, wir sind Seven Heaven, eine junge Partyband aus München.
        Lass uns uns Dir kurz vorstellen:
        <br />
        <br />
        Unsere offizielle Gründung geht auf den Juli des Jahres 2021 zurück.
        Die meisten von uns kennen sich schon aus der Schule und haben dort schon
        zusammen musiziert/komponiert. Aber lass Dich von der kurzen musikalischen
        Laufbahn nicht täuschen, Du hast sehr erfahrene Musiker vor dir.
        Von Auftritten auf großen Opernbühnen bis hin zur Komposition eines ganzen
        Musicals...Du hast es hier mit Profis zu tun. (Falls Dich die einzelnen Mitglieder
        interessieren, kannst Du <u>unten</u> genaueres über sie erfahren)
        <br />
        <br />
        Wir sind nicht nur eine Ansammlung von Musikern, sondern eine
        Freundesgruppe, die es liebt zusammen zu musizieren. Du fragst Dich vielleicht,
        warum ich das so betone? Weil diese Liebe zur und der Spaß an der Musik
        unsere Auftritte bestimmt. Vom ersten bis zum letzten Akkord strahlen
        wir eine Freude aus, die Euch - das Publikum - in den Bann zieht.
        Unabhängig vom Anlass und der Menge der Zuschauer.
        <br />
        <br />
        Wir unterhalten dabei mit einem breiten Repertoire von Disco über
        Rockklassiker bis hin zu modernen Partykrachern. Du stehst auf Abba und Queen?
        Oder darf es doch lieber Peter Fox und Adele sein? Wir haben alles dabei um
        ein buntes Publikum über mehrere Stunden zu unterhalten.
        <br />
        <br />
        Unsere Spezialität: Vierstimmige Gesangssätze. Wir bringen Deine
        Lieblingssongs mit vier ausgebildeten Sängern auf ein neues Level.
        <br />
        <br />
        Bist du überzeugt? Schreib uns doch unverbindlich eine Nachricht.
        <div className={styles.center}>
          <LinkButton href='/kontakt' text='Anfragen' />
        </div>
      </ImageCard>
      <H2 text='Die Mitglieder' />
      <div className={styles.portraits}>
        <PortraitCard img='Luisa.png' name='Luisa Loher' role='Leadgesang' text={<>Mit ihrer natürlichen und ansteckend gut gelaunten Art ist es ein Genuss Luisa beim Performen zuzusehen.<br /><br />Neben ihrer Gesangsausbildung hat sie sich das Klavierspielen selbst beigebracht.<br /><br />Auf der Bühne entfaltet sich ihre Stimme besonders bei anspruchsvollen Künstlerinnen, wie Adele oder Gloria Gaynor.</>} />
        <PortraitCard img='Lucas.png' name='Lucas Schlierf' role='Leadgesang' text={<>Mit seiner Gesangsausbildung beim Tölzer Knabenchor füllt Lucas mit seiner Stimmgewalt den ganzen Saal.<br /><br />Besonders bei Peter Schilling oder Green Day lässt der außerhalb der Bühne sonst ruhige Sänger die Sau raus.</>} />
        <PortraitCard img='Florian.png' name='Florian Döhr' role='Leadgitarre' text={<>Florian ist einer unserer Allrounder.<br /><br />Mit acht beginnt er Gitarre, mit 13 Jahren Schlagzeug und mit 20 Jahren Trompete zu spielen.<br /><br />Besonders zu spüren ist seine Erfahrung bei seinen virtuosen Soli, aber auch bei seiner Coolness auf der Bühne.</>} />
        <PortraitCard img='Leo.png' name='Leo Hellerer' role='Rhythmusgitarre + Bass' text={<>Leo könnte man als Ruhepol der Band bezeichnen.<br /><br />Als Rhythmusgitarrist ist er für den vollen Klang verantwortlich.<br /><br />Seit er acht Jahre alt ist spielt er Gitarre. Und wenn Julian sich gerade als Front-Sänger versucht, übernimmt er nahtlos die Rolle des Bassisten.</>} />
        <PortraitCard img='Julian.png' name='Julian Höflmaier' role='Bass + Gesang' text={<>Julian beginnt seine musikalische Laufbahn wie Lucas beim Tölzer Knabenchor. Neben Gesang lernt er außerdem Klavier.<br /><br />Da uns zu unserer Gründung noch ein Bassist fehlt, beschließt er kurzerhand, sich das Bassspielen selbst beizubringen.<br /><br />Gesanglich ist er für die Alpengegend und Backing-Vocals zuständig.</>} />
        <PortraitCard img='Jakob.png' name='Jakob Friederich' role='Piano + Gesang' text={<>Jakob ist unser Musikgenie.<br /><br />Neben seinem absoluten Gehör spielt er seit er sechs Jahre alt ist Klavier, beherrscht das Saxophon, die Klarinette und nimmt Gesangsunterricht.<br /><br />Er kümmert sich um die Arrangements der Stücke und hat auch sonst überall seine Finger im Spiel.</>} />
        <PortraitCard img='Daniel.png' name='Daniel Bopp' role='Schlagzeug + Gesang' text={<>Mit seinen vielen Jahren Schagzeug-Erfahrung bildet Daniel das rhythmische Fundament der Band.<br /><br />Neben seinen Beats unterstützt er die Frontsänger mit Backing-Vocals.</>} />
      </div>
      <H2 text='Die Crew' />
      <div className={styles.portraits}>
        <PortraitCard img='Patrick.png' name='Patrick Friemelt' role='Tontechnik' text={<>Patrick ist studierter Audio-Ingenieur.<br /><br />Er spielt selbst virtuos Gitarre und beschäftigt sich auch sonst viel mit Musik.<br /><br />Sein Know-How liefert uns den perfekten Sound für unsere Gigs.</>} />
        <PortraitCard img='Ylai.png' name='Ylai Elsler' role='Tontechnik' text={<>Der gelernte Audio-Ingenieur ist jetzt als erfolgreicher DJ, sowie Musikproduzent tätig.<br /><br />Auch auf wiederholte Rückfrage möchte er uns partout nicht verraten für wen er schon produziert hat.<br />&quot;Berufsgeheimnis&quot;, sagt er.</>} />
      </div>
    </SubPage>
  )
}
