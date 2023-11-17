import styles from "@/styles/page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Hi!</h1>

            <p>My name is Igor</p>
            <p>I am from Russia</p>

            <h1>My goals</h1>
            <p>Improve themselves</p>

            <h1>My progress</h1>
            <p>I was able to live until I was sixteen, studied programming languages such as java, kotlin, C#</p>

            <h1>My qualities</h1>
            <p>I am very persistent</p>
            <p></p>
            <h1>Where can I be found?</h1>
            <p>Discord: <a target="_blank" href={"https://discord.com/users/743878110747033691"}>ketonedev</a></p>
            <p>Twitch: <a target="_blank" href={"https://www.twitch.tv/k1ngchev"}>kiNgchev</a></p>
            <p>Github: <a target="_blank" href={"https://github.com/kiNgchev"}>kiNgchev</a></p>
        </main>
    )
}