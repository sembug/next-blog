import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Item(props) {
    return  <Link href={'/' + props.bookmark.id}>
    <a className={styles.card}>
      <h3>{props.bookmark.name}  &rarr;</h3>
      <p>{props.bookmark.description}</p>
    </a>
    </Link>
}

export default Item;