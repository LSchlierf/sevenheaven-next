import { H2 } from "@/components/Header";
import Poster from "@/components/Poster";

import poster_2025_11_27 from '@/public/img/posters/2025-11-27.jpeg'

export default function upcoming() {
  return <>
    <H2 text='Kommende Gigs' />
    <Poster href='https://maerchenbazar.de/' external image={poster_2025_11_27} text={<>
      Es weihnachtet langsam!
      <br />
      Deswegen freut es uns umso mehr, den <a href="https://maerchenbazar.de/">Märchenbazar im Olympiapark Süd</a> eröffnen zu dürfen.
      <br />
      <br />
      Also kommt am 27. November zum Olympiapark und holt euch einen Glühwein (oder fünf), wir fangen um 19:30 an zu spielen.
      <br />
      <br />
      Wir freuen uns auf Euch!
    </>} />
  </>
}