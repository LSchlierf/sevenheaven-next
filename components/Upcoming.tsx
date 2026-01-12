import { H2 } from "@/components/Header";
import Poster from "@/components/Poster";

import poster_2026_02_06 from "@/public/img/posters/2026-02-06.png";

export default function upcoming() {
  return (
    <>
      <H2 text="Kommende Gigs" />
      <Poster
        image={poster_2026_02_06}
        external
        href="https://www.pfarrverband-sendling.de/fileadmin/smb/Redaktion/Dateien/Veranstaltungen/2026__Plakat_Sendlinger_Fasching_.pdf"
        text={
          <>
            Helau!
            <br />
            Wir sind in Faschingslaune! Am 6. Februar bespielen wir deshalb
            wieder den Faschingsball der Pfarrgemeinde St. Margaret.
            <br />
            <br />
            Also kramt eure Kostüme vom Dachboden, packt eure Liebsten ein, und
            schwingt das Tanzbein, es wird ein fabelhafter Abend!
            <br />
            <br />
            Wir freuen uns auf Euch!
          </>
        }
      />
    </>
  );
}
