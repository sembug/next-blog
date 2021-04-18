import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const response = await fetch(`https://pacific-garden-31351.herokuapp.com/bookmarks/${id}`)
  const bookmark = await response.json()

  return {
      props: {
        bookmark,
      }
  }
}

export default function Post(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{props.bookmark.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {props.bookmark.name}
        </h1>
        <p className={styles.description}>
          {props.bookmark.description}
        </p>
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


