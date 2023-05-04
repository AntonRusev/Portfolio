import { Link } from 'react-router-dom';
import css from './About.module.css';

export const About = () => {


    // TODO - MAKE THE PAGE RETURN TO #ABOUT WHEN CLOSING DETAILS
    return (
        <section id='about' className={css.about}>
            <div className={css.info}>
                <div className={css['info-short']}>
                    <p>
                        I enjoy the process of creating new things, brainstorming different ways to improve parts of already existing projects, and all the challenges that go hand in hand with all that. Making progress, after being stuck on a particular problem, is one of the most <span className={css.highlight}>satisfying</span> feelings to me.
                    </p>
                    <p>
                        <Link to="/info" className={css.link}>Learn More</Link> 
                    </p>
                </div>
            </div>

            <div className={css.pic}></div>

        </section>
    );
};