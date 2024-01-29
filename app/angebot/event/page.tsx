import SubPage from "@/components/SubPage";
import banner from './opengraph-image.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Eventband - Seven Heaven'
}

export default function Event() {
  return (
    <SubPage banner={banner} offset='center'>
      <H1 text='Eventband' />
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}