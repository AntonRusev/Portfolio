import { useState } from 'react';
import css from './About.module.css';

export const About = () => {
    const [details, setDetails] = useState(false);

    const showDetails = () => {
        setDetails(!details);
    }
    // TODO - MAKE THE PAGE RETURN TO #ABOUT WHEN CLOSING DETAILS
    return (
        <section id={css.about} onClick={() => showDetails()}>
            <div className={css.bio}>
                {!details &&
                    <div className={css['bio-short']}>
                        <p>
                            I enjoy the process of creating new things, brainstorming different ways to improve parts of already existing projects, and all the challenges that go hand in hand with all that. Making progress, after being stuck on a particular problem, is one of the most <span>satisfying</span> feelings to me.
                        </p>
                        <h3>
                           ...
                        </h3>
                    </div>
                }
                {details &&
                    <div className={css['bio-long']}>
                        <h3>As a developer</h3>
                        <p>
                            I enjoy the process of creating new things, brainstorming different ways to improve parts of already existing projects, and all the challenges that go hand in hand with all that. Making progress, after being stuck on a particular problem, is one of the most <span>satisfying</span> feelings to me.
                        </p>
                        <p>
                            I'm focusing on keeping <span>balance</span> between the technical aspect and the visual design of my projects.  Providing a pleasant user experience, easy on the eye interface and writing clean, understandable code, are among my top priorities. My goal is not only to make people feel comfortable looking at the design of the app, but also while taking a look under the hood.
                        </p>

                        <h3>As a person</h3>
                        <p>
                        In my own humble opinion, one of my better qualities is that I'm a very <span>curious</span> person. It's important to me, to stay up-to-date with that is going on and how the world is changing around us. Whenever something catches my interest, I tend to start looking for more information about it around the web(and sometimes fall down the rabbit hole...). This has also helped me a lot while learning how to code and develop apps.
                        </p>
                        <p>
                        I have a thing for good storytelling, no matter the medium- books, movies or even games, the feeling of immersing into the <span>journey</span> is one of the most enjoyable for me. A good chunk of my free time is wasted that way...
                        </p>

                        <h3>As a member of the team</h3>
                        <p>
                        I enjoy working with other people. While being in a team I find myself striving to be more productive, and take more pleasure in sharing the feeling of success when we reach our goal(s). It's no coincidence that my favorite sports and games are the ones where team play is involved. Being a contributing member of the team makes me feel... <span>useful</span>. 
                        </p>
                    </div>
                }
            </div>
            {!details &&
                <div className={css.pic}></div>
            }
        </section>
    );
};