import SubPage from "@/components/SubPage";
import banner from '@/public/img/2023-11-11/Flo2.jpg'
import { H1, H2 } from "@/components/Header";
import styles from './page.module.css'
import { Metadata } from "next";
import Poster from "@/components/Poster";
import poster_2025_03_21 from '@/public/img/posters/2025-03-21.png'
import poster_2024_04_13 from '@/public/img/posters/2024-04-13.png'
import poster_2024_01_20 from '@/public/img/posters/2024-01-20.jpg'
import poster_2023_03_25 from '@/public/img/posters/2023-03-25.jpg'
import poster_2022_06_10 from '@/public/img/posters/2022-06-10.png'
import NewsletterSignup from "@/components/NewsletterSignup";
import upcoming from "@/components/Upcoming";

export const metadata: Metadata = {
  title: 'Aktuelles - Seven Heaven | Hier siehst du unsere kommenden Konzerte',
  description: 'Seven Heaven - Hier erfährst Du alles über anstehende Konzerte und was uns sonst so herumtreibt.'
}

export default function Aktuelles() {
  return (
    <SubPage banner={banner} offset='top'>
      <H1 text='Aktuelles' />
      <div className={styles.textBox}>
        Hier erfährst Du alles über anstehende Konzerte und was uns sonst so herumtreibt.
      </div>
      {upcoming()}
      <H2 text='Newsletter' />
      <div className={styles.textBox}>
        Melde dich zu unserem Newsletter an, um keine Neuigkeiten mehr zu verpassen.
      </div>
      {NewsletterSignup()}
      <H2 text='Presented by Seven Heaven' />
      <div className={styles.posters}>
        <Poster image={poster_2025_03_21} />
        <Poster image={poster_2024_04_13} href='/galerie/2024-04-13' />
        <Poster image={poster_2024_01_20} href='/galerie/2024-01-20' />
        <Poster image={poster_2023_03_25} href='/galerie/2023-03-25' />
        <Poster image={poster_2022_06_10} href='/galerie/2022-06-10' />
      </div>
    </SubPage>
  )
}