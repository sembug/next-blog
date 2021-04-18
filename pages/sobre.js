import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sobre
        </h1>
      </main>
      
      <footer className={styles.footer}>
        <Link href="/">
          <a
            rel="noopener noreferrer"
          >
            Home
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </Link>
      </footer>
    </div>
  )
}
