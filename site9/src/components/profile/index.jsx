import styles from './App.module.css';
import Button from '../button/button';
export default function Profile({name , bio, phone , email, avatar}){
    return(
        <div className={styles.content}>
            <img className={styles.img} src={avatar} alt="name" />
            <h2 className={styles.name}><strong>{name}</strong></h2> 
            <hr className={styles.hr} />
            <div className={styles.bio}>{bio}</div>
            <hr className={styles.hr} />
            <div className={styles.phone}>{phone}</div>
            <hr className={styles.hr} />
            <div className={styles.email}>{email}</div>
            <hr className={styles.hr} />
            <Button
                  url={"https://github.com/CarlosMateusDeveloper"} 
                  dominion ={"Twitter"}/>
            <Button
                   url={"https://github.com/CarlosMateusDeveloper"}
                   dominion ={"Github"} />
      
            <Button
                   url={"https://github.com/CarlosMateusDeveloper"} 
                   dominion ={"Linkedin"}/>
        </div>
    )
}