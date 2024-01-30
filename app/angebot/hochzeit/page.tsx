import SubPage from "@/components/SubPage";
import banner from '../../../public/img/2024-01-20/7H@aluciaphotos-67.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Hochzeitsband - Seven Heaven'
}

export default function Hochzeit() {
  return (
    <SubPage banner={banner} offset='center'>
      <H1 text='Hochzeitsband' />
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}