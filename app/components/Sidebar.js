import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'
import search from '../picture/icon/Box Icons.svg' //'./picture/icon/Box Icons.svg'
import home from '../picture/icon/Buttons TV.svg'
import video from '../picture/icon/Buttons TV2.svg'
import tv from '../picture/icon/Monitor.svg'
import profile from '../picture/icon/profile.svg'
import logo from '../picture/icon/Logo.svg'
import like from '../picture/icon/Like.svg'
import arrow from '../picture/Uparrows.svg'

export default function Sidebar() {
  return (
    <header >
           <div className={styles.side_bar_nav}>
            <Image src={logo}></Image>
              <div className={styles.side_bar_column}>
               <Link href='/'>
               <Image src={search}></Image>
               </Link>   
               <Link href='/'>
               <Image src={home}></Image>
               </Link>  
               <Link href='/'>
               <Image src={video}></Image>
               </Link>   
               <Link href='/'>
               <Image src={tv}></Image>
               </Link>   
               <Link href='/'>
               <Image src={like}></Image>
               </Link>  
               <Link href='/'>
               <Image src={profile}></Image>
               </Link>   
              </div>
            <Image src={arrow}></Image>  
          </div>
    </header>
  )
}
