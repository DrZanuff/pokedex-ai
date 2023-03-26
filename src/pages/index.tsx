import Head from "next/head"
import { Prompt } from "@/src/components/Prompt"
import styles from "@/src/styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeDex AI</title>
        <meta name="description" content="Pokedek powered by AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Prompt />
      </main>
    </>
  )
}
