import styles from '../styles/Home.module.css'
import Item from './Item'

function List({bookmarks}) {
    return <div className={styles.grid}>
        { bookmarks.map((bookmark) => (
            <Item bookmark={bookmark} key={bookmark.id} />
        ))}
    </div>
  }
export default List