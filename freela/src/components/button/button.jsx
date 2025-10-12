import styles from './button.module.css'
export default function button({url, dominion}){
    return(
      <div className={styles.button}>
        <a className={styles.link} href={url}>{dominion}</a>
      </div>
    )
}