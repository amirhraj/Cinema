import Image from 'next/image'
import styles from './page.module.css'
import image from './picture/image3.png'
import name from './picture/image 4.png'
import Link from 'next/link'
import BlueBag from './picture/BlueBug.png'
import homeGame from './picture/Card.png'
import FireWorks from './picture/Salut.png'
import find from './picture/Find.png'
import title from './picture/title.png'
import pity from './picture/Pity.png'
import red from './picture/red.png'
import witcher from './picture/witcher.png'
import Sidebar from './components/Sidebar'




export default function Home() {
  return (
    <main className={styles.main}>
          <div className={styles.content_header}>
                <Image   
                  width={1250}
                  height={800} 
                  src={image} 
                  className={styles.general_foto}
                  >
                </Image>
                <Image   
                  width={576}
                  height={228} 
                  src={name} 
                  className={styles.name_foto}
                  >
                    
                </Image>
                <p className={styles.text_description}>Неувядающий авантюрист и пытливый <br/>археолог-исследователь по‑прежнему в седле.</p>
                <button className={styles.see}>Смотреть</button>
                <button className={styles.about_film}>О фильме</button>
          </div>
            <Sidebar/>
          <div className={styles.news_film}>
             {/* Здесь должен приходить некий энпойнт с новыми фильмами
             и с помощью массива можно сделать добавление фильмов, так же можно сделать 
             одни элемент Card  и уже его импортировать так как нет энпойнтов делаю так  */}
             
                  <div className={styles.item_cards}>
                      <Link href="/card" >
                        <Image className={styles.item_cards} src={BlueBag}></Image>
                        <p>Синий жук</p>
                      </Link>
                    
                  </div>
                  <div className={styles.item_cards}>
                      <Link href="/card"><Image className={styles.item_cards} src={homeGame}></Image>
                      <p>Домашняя игра</p>
                      </Link>
                  
                  </div>
                  <div className={styles.item_cards}>
                      <Link href='/card'><Image className={styles.item_cards} src={FireWorks}></Image>
                      <p>Салют7</p>
                      </Link>
                  
                  </div>
                  <div className={styles.item_cards}>
                      <Link href='/'><Image className={styles.item_cards} src={find}></Image>
                      <p>Поймай меня</p>
                      </Link>
                    
                  </div>
          </div>
          {/* здесь такая же ситуация  */}
          <div className={styles.card_top_content}>
                    <Image className={styles.title} src={title}></Image>
                      <div className={styles.top_card}>
                          <Image className={styles.ite_top_card} src={pity}></Image>
                          <Image className={styles.ite_top_card} src={red}></Image>
                          <Image className={styles.ite_top_card} src={witcher}></Image>
                      </div>
          </div>
    </main>
  )
}
