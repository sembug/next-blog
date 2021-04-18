import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export async function getStaticPaths() {
  // paths.parms: Backend buscar todas as paginas que sarão geradas no build
  return {
    paths: [{
        params: {
          id: '1'
        }
      },
      {
        params: {
          id: '2'
        }
      }
    ],
    fallback: false,
  }
  // fallback 3 valores: 
  // 1) false --> 404
  // 2) true --> gerar dinamica
  // 3) blocking --> espera gerar
  // depois de true e blocking isso vai para o cache
  // em desenvolvimento ignora o cache
}

export async function getStaticProps(context) {
  const id = context.params.id;
  return {
    props: {
      id
    }
  }
}

// export async function getServerSideProps(context) {
//   const id = context.query.id;

//   return {
//     props: {
//       id
//     }
//   }
// }


export default function Produtos(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Produto {props.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Produto {props.id}
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


