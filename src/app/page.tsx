'use client'

import Image from 'next/image'
import styles from '../styles/page.module.css'
import { useRouter } from "next/navigation";

export default function Home() {
    const { push } = useRouter()

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started welcome with&nbsp;
                <code className={styles.code}>ME</code>
                </p>
            <div>
            <a href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               target="_blank" rel="noopener noreferrer"
            >
                Powered by{' '} <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={80} height={24} priority/>
                    </a>
                </div>
            </div>

        <div className={styles.grid}>
            <a
                onClick={() => {
                    push("/github")
                }}
                className={styles.card}
            >
                <h2>
                    Github <span>-&gt;</span>
                </h2>
                <p>Мой аккаунт на Github, содержащий мои опенсорс проекты</p>
            </a>

            <a
                onClick={() => {
                    push("/about")
                }}
                className={styles.card}
            >
                <h2>
                    About me <span>-&gt;</span>
                </h2>
                <p>Моя биография, содержащая историю становления в интернете и основную информацию обо мне</p>
            </a>

            <a
                onClick={() => {
                    push("/wrappers")
                }}
                className={styles.card}
            >
                <h2>
                    JTA & JVA <span>-&gt;</span>
                </h2>
                <p>Информация о двух моих врапперах для Telegram с именем JTA (Java Telegram API) и Вконтакте с именем JVA(Java VK API)</p>
            </a>
        </div>
      </main>
  )
}
