import { HashLink } from "react-router-hash-link";

import css from './Header.module.css'

export const Header = () => {
    return (
        <header id={css.header}>
            <nav>
                <ul className={css.list}>
                    <li><HashLink smooth to='/#about'>About</HashLink></li>
                    <li><HashLink smooth to='/#my-projects'>Projects</HashLink></li>
                    <li><HashLink smooth to='/#contact-me'>Contact</HashLink></li>
                </ul>
            </nav>
            <div className={css.intro}>
                <p className={css['intro-text']}>Hello, I'm Anton!</p>
                <p className={css['intro-text']}>An ever curious </p>
                <p className={css['intro-text']}>software engineering enthusiast</p>
                <p className={css['intro-text']}>aspiring to be a Front-End developer.</p>
            </div>
        </header>
    );
};