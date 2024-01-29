import SubPage from "@/components/SubPage";
import banner from './opengraph-image.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Partyband - Seven Heaven'
}

export default function Party() {
  return (
    <SubPage banner={banner} offset='-7vw'>
      <H1 text='Partyband' />
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}