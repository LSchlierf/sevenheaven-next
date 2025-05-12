import { H2 } from "@/components/Header";
import Poster from "@/components/Poster";

import poster_2025_06_09 from '@/public/img/posters/2025-06-09.png'

export default function upcoming() {
  return <>
    <H2 text='Kommende Gigs' />
    <Poster href='https://musikalisches-weinfest.de/' external image={poster_2025_06_09} text={<>
      Auch dieses Jahr sind wir wieder beim Musikalischen Weinfest im Westpark vertreten.
      <br />
      <br />
      Letztes und vorletztes Jahr hatten wir super viel Spaß, dieses Jahr freuen wir uns darauf, der letzte Act sein zu dürfen und damit das Weinfest abzurunden!
      <br />
      <br />
      Also kommt am <b>Pfingstmontag, den 9. Juni</b> zur Seebühne im Westpark und bringt Durst und eure Liebsten mit, für die Stimmung sorgen wir! 😉
    </>} />
  </>
}