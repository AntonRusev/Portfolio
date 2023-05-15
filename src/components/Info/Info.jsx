import { HashLink } from "react-router-hash-link";

import css from "./Info.module.css";

export const Info = () => {

    return (
        <section id={css.info}>
            <div className={css['info-long']}>
                <h3 className={css.sub}>As a developer</h3>
                <p>
                    I enjoy the process of creating new things, brainstorming different ways to improve parts of already existing projects, and all the challenges that go hand in hand with all that. Making progress, after being stuck on a particular problem, is one of the most <span className={css.highlight}>satisfying</span> feelings to me.
                </p>
                <p>
                    I'm focusing on keeping <span className={css.highlight}>balance</span> between the technical aspect and the visual design of my projects.  Providing a pleasant user experience, easy on the eye interface and writing clean, understandable code, are among my top priorities. My goal is not only to make people feel comfortable looking at the design of the app, but also while taking a look under the hood.
                </p>

                <h3 className={css.sub}>As a member of the team</h3>
                <p>
                    I enjoy working with other people. While being in a team I find myself striving to be more productive, and take more pleasure in sharing the feeling of success when we reach our goal(s). It's no coincidence that my favorite sports and games are the ones where team play is involved. Being a contributing member of the team makes me feel... <span className={css.highlight}>useful</span>.
                </p>

                <h3 className={css.sub}>As a person</h3>
                <p>
                    In my own humble opinion, one of my better qualities is that I'm a very <span className={css.highlight}>curious</span> person. It's important to me, to stay up-to-date with that is going on and how the world is changing around us. Whenever something catches my interest, I tend to start looking for more information about it around the web(and sometimes fall down the rabbit hole...). This has also helped me a lot while learning how to code and develop apps.
                </p>
                <p>
                    I have a thing for good storytelling, no matter the medium- books, movies or even games, the feeling of immersing into the <span className={css.highlight}>journey</span> is one of the most enjoyable for me. A good chunk of my free time is wasted that way...
                </p>

                {/* <button className={css['back-btn']} onClick={() => navigate('/')}>Back</button> */}
                <HashLink smooth to={`/#about`} className={css['back-btn']}>Back</HashLink>
            </div>
        </section>
    );
};