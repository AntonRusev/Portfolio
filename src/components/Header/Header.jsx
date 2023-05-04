import { HashLink } from "react-router-hash-link";

import css from './Header.module.css'

export const Header = () => {
    return (
        <header id={css.header}>
            <nav>
                <ul className={css.list}>
                    <li><HashLink smooth to='/#about'>About</HashLink></li>
                    <li><HashLink smooth to='/#projects'>Projects</HashLink></li>
                    <li><HashLink smooth to='/#contact'>Contact</HashLink></li>
                </ul>
            </nav>
        </header>
    );
};