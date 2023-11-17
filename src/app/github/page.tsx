import styles from "../../styles/page.module.css";
import githubStyles from "./github.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={githubStyles.grid}>
                <a
                    className={githubStyles.repository}
                    href={"https://github.com/kiNgchev/bio"}
                    target={"_blank"}
                >
                    <h2>
                        Bio <span>-&gt;</span>
                    </h2>
                    <p></p>
                </a>

                <a
                    className={githubStyles.repository}
                    href={"https://github.com/kiNgchev/kiNgchev/"}
                    target={"_blank"}
                >
                    <h2>
                        kiNgchev <span>-&gt;</span>
                    </h2>
                    <p></p>
                </a>
            </div>
            <div className={githubStyles.grid}>
                <img
                    className={"statistic"}
                    src={"https://github-readme-stats.vercel.app/api/top-langs/?username=kiNgchev&bg_color=30,7500ad,b467ff&title_color=fff&text_color=fff&show_icons=true&icon_color=7567ff"}
                    alt={"top-langs"}
                ></img>
                <img
                    className={"statistic"}
                    src={"https://github-readme-stats.vercel.app/api?username=kiNgchev&bg_color=30,7500ad,b467ff&title_color=fff&text_color=fff&show_icons=true&icon_color=7567ff"}
                    alt={"github-statistic"}
                >
                </img>
            </div>
        </main>
    )
}