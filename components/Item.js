import styles from '../styles/Home.module.css'

function Item(props) {
    return <a href={props.bookmark.url} className={styles.card}>
      <h3>{props.bookmark.name}  &rarr;</h3>
      <p>{props.bookmark.description}</p>
    </a>
}

export default Item;