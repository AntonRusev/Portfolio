import { Link } from 'react-router-dom';
import css from './About.module.css';

export const About = () => {
    return (
        <section id='about' className={css.about}>
            <h2 className={css.title}>ABOUT</h2>

            <div className={css.content}>
                <div className={css.info}>
                    <div className={css['info-short']}>
                        <p>
                            I enjoy the process of creating new things, brainstorming different ways to improve parts of already existing projects, and all the challenges that go hand in hand with all that. Making progress, after being stuck on a particular problem, is one of the most <span className={css.highlight}>satisfying</span> feelings to me.
                        </p>
                    </div>
                </div>

                <div className={css.pic}>
                    <img src="https://avatars.githubusercontent.com/u/102323013?v=4" alt="" />
                </div>
            </div>

            <p>
                <Link to="/info" className={css.button}>Learn More</Link>
            </p>
        </section>
    );
};