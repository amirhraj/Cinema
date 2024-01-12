import Image from 'next/image'
import Link from 'next/link'
import styl from '../styles/page.module.css'
import wensday from '../picture/Wensday.png'
import name from '../picture/NameFoto.png'
import Sidebar from '../components/Sidebar'
import bookmarkd from '../picture/icon/Bookmarks.svg'
import like from '../picture/icon/Like.svg'
import img1 from '../picture/img_season/IMG1.png'
import img2 from '../picture/img_season/IMG2.png'
import img3 from '../picture/img_season/IMG3.png'
import warning from '../picture/icon/warning.svg'
import card0 from '../picture/IMG2.png'
import card1 from '../picture/Card1.png'
import card2 from '../picture/Card2.png'
import card3 from '../picture/Card33.png'
import card4 from '../picture/Card4.png'
import card5 from '../picture/Card5.png'
import card6 from '../picture/Card6.png'


export default function Card() {

    return(
        <div className={styl.main_card_content}>
                <div className={styl.general_foto}>
                    <Link href='/'>Back</Link>
                    <Image 
                      width={1400}
                      height={780} 
                    src={wensday}></Image>
                    <Image 
                        className={styl.name}
                      width={357}
                      height={132} 
                    src={name}></Image>
                </div>
                <Sidebar/>
                <div className={styl.under_znak}>
                    <p className={styl.item_znak}>10</p>
                    <p>2022-...</p>
                    <p>1 сезон</p>
                    <p>США</p>
                    <p>Ужасы</p>
                    <p>0+</p>
                </div>
                <p className={styl.under_text}>
                Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.
                </p>
                <div className={styl.button_conteiner}>
                    <button className={styl.see}>Смотреть</button>
                    <button className={styl.trailer}>Трейлер</button>
                    <button className={styl.symbol}>
                            <Image  src={bookmarkd}></Image>
                    </button>
                    <button className={styl.symbol}>
                            <Image src={like}></Image>
                    </button>
                </div>
                {/* Здесь можно привязать реакт в будущем*/}
                <div className={styl.main_content}>
                    <div className={styl.main_season}>
                        <p className={styl.main_title}>Сезоны</p>
                        <div className={styl.main_season_item}><p>1</p></div>
                        <div className={styl.main_season_item}><p>2</p></div>
                        <div className={styl.main_season_item}><p>3</p></div>
                    </div>
                </div>
                {/* тут по идеи должна быть карусель  */}
                <div className={styl.menu_season}>
                        <div>
                            < Image                       
                                 width={544}
                                 height={306}  src={img1}></Image>
                            <p className={styl.series}>1 серия</p>
                            <p className={styl.minut}>41 минут</p>
                        </div> 
                        <div>
                            <Image                                                   
                                 width={544}
                                 height={306}  
                                 src={img2}></Image>
                             <p className={styl.series}>2 серия</p>
                             <p className={styl.minut}>41 минут</p>
                        </div> 
                        <div>
                            <Image                                  
                                  width={544}
                                  height={306}
                                  src={img3}></Image>
                            <p className={styl.series}>3 серия</p>
                            <p className={styl.minut}>41 минут</p>
                        </div> 
                     </div>
                     <div className={styl.description}>
                        <h3 className={styl.description_title}>Описание</h3>
                        <p className={styl.paragraf}>Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии</p>
                        <Image  
                        width={48}
                        height={48}  
                        className={styl.warning_img}
                        src={warning}></Image>
                        <p className={styl.warning}>Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.</p>

                     </div>
                     <h3 className={styl.similar_content_title}>Похожее </h3>
                     <div className={styl.similar_content}> 
                    
                          <div className={ styl.item_sililar} >   <Image width={255} height={382} src={card0}></Image></div>
                          <div className={ styl.item_sililar} >   <Image width={255} height={382} src={card1}></Image></div>
                          <div className={ styl.item_sililar} >   <Image width={255} height={382} src={card2}></Image></div>
                          <div className={ styl.item_sililar} >   <Image width={255} height={382} src={card3}></Image></div>
                          <div className={ styl.item_sililar} >   <Image width={255} height={382} src={card4}></Image></div>
                          <div className={ styl.item_sililar} >   <Image width={255} height={382} src={card5}></Image></div>
                          <div className={ styl.item_sililar} >   <Image width={25} height={382} src={card6}></Image></div>
                      </div>
                      <p className={styl.similar_footer_title} >Информация</p>
                      <footer className={styl.footer}>
                           
                            <div className={styl.container1}>
                                <p>Премьера в мире</p>
                                <p>31 октября 2022</p>
                                <p>Оригинальное название</p>
                                <p>Wednesday</p>
                            </div>
                            <div className={styl.container1}>
                                <p>Страна</p>
                                <p>США</p>
                                <p>Жанры</p>
                                <p>Фентези Комедия Криминал Детектив</p>
                            </div>
                            <div className={styl.container1}>
                                 <p>Язык аудиодорожки</p>
                                <p>Rus, Eng</p>
                                <p>Качество</p>
                                <p>Full HD</p>
                            </div>
                      </footer>

        </div>
    )
}