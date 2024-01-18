import SubPage from "@/components/SubPage";
import banner from '../../../public/img/weinfest/itsMyLife.jpg'
import { H1, H2 } from "@/components/Header";
import FAQ from "@/components/FAQ";

export default function Event() {
  return (
    <SubPage banner={banner} offset='center'>
      <H1 text='Eventband' />
      <H2 text='Häufig gestellte Fragen' />
      <FAQ />
    </SubPage>
  )
}