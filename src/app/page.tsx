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
            Powered by{' '}
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={80}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        <button
          onClick={ () => { push("/github") } }
          className={styles.card}
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>Find my github account.</p>
        </button>

        <button
          onClick={ () => { push("/biography") } }
          className={styles.card}
        >
          <h2>
            Biography <span>-&gt;</span>
          </h2>
          <p>Read my biography. In it I described the main moments of my life, technologies I have studied, and achievements</p>
        </button>

        <button
          onClick={ () => { push("/jta") } }
          className={styles.card}
        >
          <h2>
            JTA <span>-&gt;</span>
          </h2>
          <p>Learn about my Telegram API wrapper with name JTA.</p>
        </button>
      </div>
    </main>
  )
}
