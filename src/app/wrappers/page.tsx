import wrappersStyle from "./wrappers.module.css"
import styles from "@/styles/page.module.css";

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
            <div><a>In the process of development</a></div>
        </main>
    )
}