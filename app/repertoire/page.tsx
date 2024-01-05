import SubPage from '@/components/SubPage'
import stlyes from './page.module.css'
import banner from '../../public/img/juha/L1000673.jpg'
import headliners from './RepertoireHeadliners.json'
import repertoire from './Repertoire.json'
import { H1, H2 } from '@/components/Header'
import BackButton from '@/components/BackButton'

export default function Repertoire() {
  function headlinerItem(item, index: number) {
    return (
      <div className={stlyes.headliner} key={index}>
        <div className={stlyes.headlinerTitle}>
          {item.title}
        </div>
        <div className={stlyes.headlinerSongs}>
          {item.songs.map((song) => <>{song}<br /></>)}
        </div>
      </div>
    )
  }

  function repertoireItem(item, index: number) {
    if (item.songs.length === 0) {
      return null
    }
    return (
      <div className={stlyes.repertoire} key={index}>
        <div className={stlyes.repertoireTitle}>
          {item.letter}
        </div>
        <div className={stlyes.repertoireSongs}>
          {item.songs.map((song) => <>{song.title} - {song.artist}<br /></>)}
        </div>
      </div>
    )
  }

  return (
    <SubPage banner={banner}>
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