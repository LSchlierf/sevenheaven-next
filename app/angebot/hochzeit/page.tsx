import SubPage from "@/components/SubPage";
import banner from '../../../public/img/juha/L1000620_mirror.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";

export default function Hochzeit() {
  return (
    <SubPage banner={banner} offset='-5vw'>
      <H1 text='Hochzeitsband' />
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}