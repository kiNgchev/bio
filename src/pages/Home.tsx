import React, {Component} from 'react';
import '../static/css/Home.css';

class Home extends Component {
    render() {
        return (
            <body className={"Home"}>
            <div className={"Bio"}>
                <h1>Hi!</h1>

                <p>My name is Igor</p>
                <p>I am from Russia</p>

                <h1>My goals</h1>
                <p>Improve themselves</p>

                <h1>My progress</h1>
                <p>I was able to live until I was sixteen, studied programming languages such as java, kotlin, C#</p>
                {/*
                <img
                    src={
                        "https://github-readme-stats.vercel.app/api/top-langs/?username=kiNgchev&layout=donut&bg_color=30,7500ad,b467ff&title_color=fff&text_color=fff&show_icons=true&icon_color=7567ff)](https://github.com/anuraghazra/github-readme-stats"
                    }
                    alt={"Статистика по языкам на гитхабе"}
                    className={"images"}
                />
                <img
                    src={
                        "https://github-readme-stats.vercel.app/api?username=kiNgchev&bg_color=30,7500ad,b467ff&title_color=fff&text_color=fff&show_icons=true&icon_color=7567ff"
                    }
                    alt={"Статистика работы с гитхабом"}
                    className={"images"}
                />
                */}

                <h1>My qualities</h1>
                <p>I am very persistent</p>
                <p></p>
                <h1>Where can I be found?</h1>
                <p>Discord: <a target="_blank" href={"https://discord.com/users/743878110747033691"}>ketonedev</a></p>
                <p>Twitch: <a target="_blank" href={"https://www.twitch.tv/k1ngchev"}>kiNgchev</a></p>
                <p>Github: <a target="_blank" href={"https://github.com/kiNgchev"}>kiNgchev</a></p>

            </div>
            </body>
        );
    }
}

export default Home;