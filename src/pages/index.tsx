import Head from 'next/head'
import { Pokedex } from '@/src/components/Pokedex'
import { Background } from '@/src/components/Background'
import styles from '@/src/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeDex AI</title>
        <meta name="description" content="Pokedek powered by AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <main className={styles.main}>
        <Pokedex />
      </main>
    </>
  )
}
