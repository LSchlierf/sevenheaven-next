import SubPage from '@/components/SubPage'
import stlyes from './page.module.css'
import banner from '@/public/img/2024-07-21/IMG-9175.jpg'
// import banner from '@/public/img/2024-01-20/7H@aluciaphotos-92.jpg'
import headliners from './RepertoireHeadliners.json'
import repertoire from './Repertoire.json'
import { H1, H2 } from '@/components/Header'
import BackButton from '@/components/BackButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Repertoire - Seven Heaven | Hier siehst du eine Liste unserer Songs',
  description: 'Seven Heaven - Hier siehst Du unser aktuelles Repertoire. Vielleicht sind ja auch einige Deiner Lieblingssongs dabei.'
}

export default function Repertoire() {
  function headlinerItem(item : {songs : string[], title: string}, index: number) {
    return (
      <div className={stlyes.headliner} key={index}>
        <div className={stlyes.headlinerTitle}>
          {item.title}
        </div>
        <div className={stlyes.headlinerSongs}>
          {item.songs.map((song, index) => <div key={index}>{song}</div>)}
        </div>
      </div>
    )
  }

  function repertoireItem(item : {songs : {title: string, artist : string}[], letter : string}, index: number) {
    if (item.songs.length === 0) {
      return null
    }
    return (
      <div className={stlyes.repertoire} key={index}>
        <div className={stlyes.repertoireTitle}>
          {item.letter}
        </div>
        <div className={stlyes.repertoireSongs}>
          {item.songs.map((song, index) => <div key={index}>{song.title} - {song.artist}</div>)}
        </div>
      </div>
    )
  }

  return (
    <SubPage banner={banner} offset='bottom'>
      <H1 text='Repertoire' />
      <H2 text='Best-of Kategorien' />
      <div className={stlyes.headlinerContainer}>
        {headliners.map(headlinerItem)}
      </div>
      <BackButton to='/' text='Zurück zur Startseite' />
      <div style={{height: 40}} />
      <H2 text='Songliste' />
      <div className={stlyes.repertoireContainer}>
        {repertoire.map(repertoireItem)}
      </div>
    </SubPage>
  )
}