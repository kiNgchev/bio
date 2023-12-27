import githubStyles from "./github.module.css";
import styles from "../../styles/page.module.css";
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
            <div className={githubStyles.grid}>
                <a
                    className={githubStyles.repository}
                    href={"https://github.com/kiNgchev/bio"}
                    target={"_blank"}
                >
                    <img style={{alignItems: "center"}} alt={""} width={"100%"} height={"100%"}
                         src="https://github-readme-stats.vercel.app/api/pin/?username=kiNgchev&repo=bio&bg_color=30,26274b,393b8a&title_color=fff&text_color=fff&hide_border=true"/>
                </a>

                <a
                    className={githubStyles.repository}
                    href={"https://github.com/kiNgchev/kiNgchev"}
                    target={"_blank"}
                >
                    <img style={{alignItems: "center"}} alt={""} width={"100%"} height={"100%"}
                         src="https://github-readme-stats.vercel.app/api/pin/?username=kiNgchev&repo=kiNgchev&bg_color=30,26274b,393b8a&title_color=fff&text_color=fff&hide_border=true"/>
                </a>

                <a
                    className={githubStyles.repository}
                    href={"https://github.com/kiNgchev/Card-Bot"}
                    target={"_blank"}
                >
                    <img style={{alignItems: "center"}} alt={""} width={"100%"} height={"100%"}
                         src="https://github-readme-stats.vercel.app/api/pin/?username=kiNgchev&repo=Card-Bot&bg_color=30,26274b,393b8a&title_color=fff&text_color=fff&hide_border=true"/>
                </a>

                <a
                    className={githubStyles.repository}
                    href={"https://github.com/kiNgchev/random-facts"}
                    target={"_blank"}
                >
                    <img style={{alignItems: "center"}} alt={""} width={"100%"} height={"100%"}
                         src="https://github-readme-stats.vercel.app/api/pin/?username=kiNgchev&repo=random-facts&bg_color=30,26274b,393b8a&title_color=fff&text_color=fff&hide_border=true"/>
                </a>
            </div>
            <div><h2>Статистика моего аккаунта Github</h2></div>
            <div className={githubStyles.grid} style={{
                borderRadius: "var(--border-radius)",
                background: "rgba(var(--card-rgb), 0)",
                border: "2px solid rgba(var(--card-border-rgb), 0.15)"
            }}>
                <div style={{
                    alignSelf: "center",
                    margin: "20px"
                }}>
                    <img
                        style={{
                            alignSelf: "center", width: "100%"
                        }}
                        src="https://github-readme-stats.vercel.app/api?username=kiNgchev&bg_color=30,26274b,393b8a&title_color=fff&text_color=fff&hide_border=true"
                        alt={"github-stats"}
                    ></img>
                </div>
                <div style={{
                    alignSelf: "center",
                    margin: "20px"
                }}>
                    <img
                        style={{
                            alignSelf: "center", width: "100%"
                        }}
                        src="https://github-readme-stats.vercel.app/api/top-langs?username=kiNgchev&layout=compact&langs_count=8&card_width=320&bg_color=30,26274b,393b8a&title_color=fff&text_color=fff&hide_border=true"
                        alt={"top-langs"}
                    ></img>
                </div>
            </div>
        </main>
    )
}

let color = "#26274b"
let color1 = "#393b8a"