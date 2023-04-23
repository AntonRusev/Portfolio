import css from './Header.module.css'

export const Header = () => {
    return (
        <header id={css.header}>
            <nav>
                <ul className={css.list}>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};