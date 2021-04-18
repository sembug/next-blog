import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import List from '../components/List'

export default function Home({bookmarks = []}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Blog!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <List bookmarks={bookmarks} />
      </main>
      
      <footer className={styles.footer}>
        <Link href="/sobre">
          <a
            rel="noopener noreferrer"
          >
            Sobre
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </Link>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://pacific-garden-31351.herokuapp.com/bookmarks")
  const bookmarks = await response.json()
  return {
      props: {
        bookmarks,
      },
      revalidate: 10,
  }
} 
