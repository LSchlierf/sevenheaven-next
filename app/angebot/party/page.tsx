import SubPage from "@/components/SubPage";
import banner from '../../../public/img/2023-03-25/L1000678.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";

export default function Party() {
  return (
    <SubPage banner={banner} offset='-7vw'>
      <H1 text='Partyband' />
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}