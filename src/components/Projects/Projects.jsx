import { Card } from '../Card/Card';
import { Toolbox } from '../Toolbox/Toolbox';

import { projectsList } from '../../assets/projectsList';

import css from './Projects.module.css';

export const Projects = () => {
    return (
        <section id='projects' className={css.projects}>

            <h2 id="my-projects" className={css.title}>Projects</h2>

            <p className={css.subtitle}>Some of the tools and technologies that I've used in my projects:</p>

            <div className={css.content}>
                <Toolbox />

                {projectsList.map(x => <Card key={x.link} props={x} />)}
            </div>
        </section>
    );
};