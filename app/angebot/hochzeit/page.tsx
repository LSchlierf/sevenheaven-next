import SubPage from "@/components/SubPage";
import banner from './opengraph-image.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Hochzeitsband - Seven Heaven'
}

export default function Hochzeit() {
  return (
    <SubPage banner={banner} offset='-5vw'>
      <H1 text='Hochzeitsband' />
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}