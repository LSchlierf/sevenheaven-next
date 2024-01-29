import React from "react";
import type { Metadata, ResolvingMetadata } from 'next'
import concerts from '../Gallery.json'
import { notFound } from "next/navigation";
import styles from './page.module.css'
import bgBW from '../../../public/img/bg_bw.jpg'
import Image from 'next/image';
import BackButton from '@/components/BackButton';

type Props = {
  params: { concert: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!params.concert || !concerts[params.concert as keyof Object]) {
    return notFound()
  }

  let data: any = concerts[params.concert as keyof Object]

  return {
    title: data.preview + ' - Seven Heaven',
    openGraph: {
      images: ['/img/' + data.thumbnail],
      description: data.text
    }
  }
}

export default function galleryLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <main style={{ position: 'relative' }}>
      <div className={styles.bgImgContainer} >
        <div className={styles.bgImg}>
          <div style={{
            position: 'relative',
            top: '0',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}>
            <Image
              src={bgBW}
              priority
              alt=''
              fill
              sizes='100vw'
              style={{
                objectFit: 'cover',
                filter: 'blur(15px) brightness(50%)'
              }}
            />
          </div>
        </div>
      </div>
      {children}
      </main>
      <BackButton to='/galerie' text='Zurück zur Galerie' color='darkred' />
    </>
  )
}