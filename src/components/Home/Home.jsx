import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Projects } from '../Projects/Projects';

import css from './Home.module.css'

export const Home = () => {
    return (
        <main id={css.home}>
            <About />
            <Projects />
            <Contact />
        </main>
    );
};