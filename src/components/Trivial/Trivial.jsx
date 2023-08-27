import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import css from "./Trivial.module.css";

export const Trivial = () => {

    return (
        <section id="trivial" className={css.trivial}>
            <h1 className={css.title}>Trivia-l</h1>

            <div className={css['image-holder']}>
                <img className={css.imageOne} src="https://i.ibb.co/zfWPKRB/trivial-mobile.png" />
                <img className={css.imageTwo} src="https://i.ibb.co/BnCjXhs/trivial.png" />
            </div>

            <div className={css.links}>
                <Link to='https://trivia-l.web.app/' target="_blank" className={css['link-btn']}><span>View site</span></Link>
                <Link to='https://github.com/AntonRusev/Trivial' target="_blank" className={css['link-btn']}><span>Github Repo</span></Link>
            </div>

            <div className={css.content}>
                <div className={css.info}>
                    <h4 className={css.subtitle}>Purpose and Goal</h4>

                    <p>
                        Trivia-l is a quiz game, in which you can test your general knowledge in various categories.
                    </p>

                    <p>
                        The quiz consists of 30 questions, separated into 3 difficulty categories. For each correct answer given, points are awarded(depending on the stage of the quiz and the streak bonus). There is a time limit for each question, if no answer is given within it, no points are given for the question and the streak is reset.
                    </p>

                    <p>Giving consecutive correct answers, awards a streak bonus which multiplies the points earned. Each correct answers increments the streak multiplier by 1. Giving incorrect answer resets the streak to 1.</p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>Under the Hood</h4>

                    <p>
                        Trivia-l is a SPA(single page application), developed with the help of tools and technologies, such as ReactJS, Redux Toolkit, Typescript and Tailwind CSS, among others.
                    </p>
                    <p>
                        The questions data for the quiz is fetched from Trivia REST API, which can be found at https://the-trivia-api.com/
                        The app has responsive design, with starting point from 360px(mobile screen).
                    </p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>Challenges and Lessions Learned</h4>

                    <p>
                        As with every new project that I start, I try to learn and use tools and technologies that I'm unfamiliar with. This time around I finally had a chance to use Redux Toolkit to manage the state and "gather it" in a single place.
                        Another challenge for me was to work for the first time with Tailwind CSS. The process of styling is quite different than the other methods that I've used in the past, but after a while I started to enjoy doing it that way.
                    </p>
                </div>

                <HashLink smooth to={`/#my-projects`} className={css['back-btn']}>Back</HashLink>
            </div>
        </section>
    );
};