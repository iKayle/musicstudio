import { Hero } from '../components/Hero'
import { Catalogo } from '../components/Catalogo'
import { Catalogo2 } from '../components/Catalogo2'
import { Catalogo3 } from '../components/Catalogo3'
import { Catalogo4 } from '../components/Catalogo4'
import Head from 'next/head'
import { format } from 'path'
import { Rodapé } from '../components/Rodapé'

export default function Index() {
  return (
    <>
      <Head>
        <title>Estúdio de música</title>
      </Head>
      <div>
        <div className="min-h-screen pb-32">
          <Hero />
          <Catalogo />
          <Catalogo2 />
          <Catalogo3 />
          <Catalogo4 />
          <Rodapé />
        </div>
      </div>
    </>
  )
}
