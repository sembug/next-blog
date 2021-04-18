import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Tempo(props) {
  const dynamicDate = new Date()
  const dynamicDateString = dynamicDate.toUTCString();

  return (

    <div className={styles.container}>
      <Head>
        <title>Tempo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {dynamicDateString}
        </h1>
        <h2 className="blue">
           {props.staticDateString} 
        </h2>
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

// build-time
export function getStaticProps() {
    console.log('--> Passando pelo getStaticProps')
    const staticDate = new Date()
    const staticDateString = staticDate.toUTCString();

    return {
        props: {
            staticDateString
        }
    }
}


