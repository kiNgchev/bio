import aboutStyles from "./about.module.css"
import styles from "@/styles/page.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.backdiv}>
                <a className={styles.back} href={"/"} style={{
                    fontSize: "25px",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px"
                }}>
                    <p><span>&lt;-</span> back</p>
                </a>
            </div>
            <div className={aboutStyles.grid}>
                <div className={aboutStyles.aboutcard}>
                    <ul className={aboutStyles.aboutul}>
                        <ul style={{listStyleType: "none"}}>
                            <li><Image
                                className={aboutStyles.aboutcardimage}
                                src={"/avatar.jpg"}
                                alt={"Kingchev avatar"}
                                width={150} height={150}
                            ></Image></li>
                        </ul>
                        <ul style={{
                            fontSize: "20px",
                            marginLeft: "20px"
                        }}>
                            <h2>Ссылки:</h2>
                            <p style={{fontSize: "20px"}}>Github: &nbsp; <a target="_blank"
                                                                              href={"https://github.com/kiNgchev"}>kiNgchev</a>
                            </p>
                            <p style={{fontSize: "20px"}}>Discord: &nbsp;<a target="_blank"
                                                                              href={"https://discord.com/users/743878110747033691"}>_kingchev</a>
                            </p>
                            <p style={{fontSize: "20px"}}>Twitch: &nbsp; <a target="_blank"
                                                                              href={"https://www.twitch.tv/k1nghev"}>kiNgchev</a>
                            </p>
                            <p style={{fontSize: "20px"}}>Telegram:&nbsp;<a target="_blank"
                                                                              href={"https://t.me/k1ngchev"}>kiNgchev</a>
                            </p>
                        </ul>
                    </ul>
                    <ul style={{
                        fontSize: "20px",
                        marginLeft: "20px"
                    }}>
                        <h2>About me</h2>
                        <h4>Псевдоним:</h4>
                        <p style={{fontSize: "20px"}}>- kiNgchev</p>
                        <h4>Кратко обо мне: </h4>
                        <p style={{fontSize: "20px"}}>Я программист-самоучка. На данный момент изучаю высокоуровневые языки и сопутствующие технологии</p>
                        <h4>Возраст:</h4>
                        <p style={{fontSize: "20px"}}>- 16</p>
                        <h4>Сферы деятельности:</h4>
                        <p style={{fontSize: "20px"}}>- Бэкенд</p>
                        <p style={{fontSize: "20px"}}>- Создание ботов</p>
                    </ul>
                </div>
                <div className={aboutStyles.aboutcard}>
                    <ul style={{listStyleType: "none"}}>
                        <h2>Стэк технологий</h2>
                        <h3>Языки программирования: </h3>
                        <li style={{
                            margin: "10px",
                            display: "flex",
                            alignItems: "center"
                        }}><Image alt={"stackTechnology"} width={40} height={40} src={"/java.svg"}></Image>
                            <p style={{fontSize: "20px"}}>- Основной язык</p>
                        </li>
                        <li style={{
                            margin: "10px",
                            display: "flex",
                            alignItems: "center"
                        }}><Image alt={"stackTechnology"} width={40} height={40} src={"/c-sharp.svg"}></Image>
                            <p style={{fontSize: "20px"}}>- Изучаю вторично</p>
                        </li>
                        <li style={{
                            margin: "10px",
                            display: "flex",
                            alignItems: "center"
                        }}><Image alt={"stackTechnology"} width={40} height={40} src={"/kotlin.svg"}></Image>
                            <p style={{fontSize: "20px"}}>- Использую в связке с Java</p>
                        </li>
                        <li style={{
                            margin: "10px",
                            display: "flex",
                            alignItems: "center"
                        }}><Image alt={"stackTechnology"} width={40} height={40} src={"/js.svg"}></Image>
                            <p style={{fontSize: "20px"}}>- Использую ОЧЕНЬ редко</p>
                        </li>
                        <h3>Фреймворки: </h3>
                        <li style={{
                            margin: "10px",
                            display: "flex",
                            alignItems: "center"
                        }}><Image alt={"stackTechnology"} width={40} height={40} src={"/spring.svg"}></Image>
                            <p style={{fontSize: "20px"}}>- Для монолитных приложений на Java</p>
                        </li>
                        <li style={{
                            margin: "10px",
                            display: "flex",
                            alignItems: "center"
                        }}><Image alt={"stackTechnology"} width={40} height={40} src={"/micronaut.svg"}></Image>
                            <p style={{fontSize: "20px"}}>- Для микросервисных приложений на Java</p>
                        </li>
                        <h3>Технологи: </h3>
                        <li style={{
                            margin: "10px",
                            display: "flex",
                            alignItems: "center"
                        }}><Image alt={"stackTechnology"} width={40} height={40} src={"/git.svg"}></Image>
                            <p style={{fontSize: "20px"}}>- Для управления версиями</p>
                        </li>
                        <li style={{
                            margin: "10px",
                            display: "flex",
                            alignItems: "center"
                        }}><Image alt={"stackTechnology"} width={40} height={40} src={"/docker.svg"}></Image>
                            <p style={{fontSize: "20px"}}>- Для деплоя</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(1, minmax(25%, auto))",
                gap: "20px",
                maxWidth: "100%",
                width: "var(--max-width)",
                margin: "20px"
            }}>
                <div className={aboutStyles.aboutcardmain}>
                    <h1 style={{margin: "10px 10px 10px 10px"}}>Обо мне</h1>
                    <h2 style={{margin: "15px 10px 10px 10px"}}>Как появился мой псевдоним?</h2>
                    <p  style={{margin: "5px 10px 5px 10px", fontSize: "20px"}}>Я его спиздил, ещё вопросы по моему псевдониму?</p>
                    <h2 style={{margin: "15px 10px 10px 10px"}}>Начало моего пути в программировании</h2>
                    <p  style={{margin: "5px 10px 5px 10px", fontSize: "20px"}}>Однажды, в далеком далеком году мне очень захотелось создать своего discord бота. Написав самый простой код, я понял, что мне надо больше. Так я начал дальше изучать язык программирования Python и враппер для API дискорда с именем discord.py. После этого я начал развиваться не только в сфере создания ботов, но и в программировании в целом... Ну и хуйня история ¯\_(ツ)_/¯</p>
                    <h2 style={{margin: "15px 10px 10px 10px"}}>WHAT???? LOREM IPSUM?!</h2>
                    <p  style={{margin: "5px 10px 5px 10px", fontSize: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Hic illo nihil nobis perferendis porro, recusandae! Amet eos fuga id iste numquam officia, perferendis
                        quia voluptatum! Aliquid cupiditate neque reiciendis unde.</p>
                </div>
            </div>
        </main>
    )
}