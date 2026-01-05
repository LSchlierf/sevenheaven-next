import concerts from "../Gallery.json";
import { notFound } from "next/navigation";
import ConcertGallery, { galleryProps } from "./concert";

export default async function Page({
  params,
}: {
  params: Promise<{ concert: string }>;
}) {
  if (
    !(await params).concert ||
    !concerts[(await params).concert as keyof Object]
  ) {
    return notFound();
  }

  let data = concerts[
    (await params).concert as keyof Object
  ] as unknown as galleryProps;

  return <ConcertGallery data={data} />;
}
