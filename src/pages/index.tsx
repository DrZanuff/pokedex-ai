import Head from 'next/head'
import { Pokedex } from '@/src/components/Pokedex'
import { Logo } from '@/src/components/Logo'
import { TradeMark } from '@/src/components/TradeMark'
import { Background } from '@/src/components/Background'
import { ReactPlayer } from '@/src/components/ReactPlayer'
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
        <div className={styles.container}>
          <Logo />
          <Pokedex />
        </div>
        <TradeMark />
        <ReactPlayer />
      </main>
    </>
  )
}
