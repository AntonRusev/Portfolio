import { Card } from '../Card/Card';
import { Toolbox } from '../Toolbox/Toolbox';

import { projectsList } from '../../assets/projectsList';

import css from './Projects.module.css';

export const Projects = () => {
    return (
        <section id='projects' className={css.projects}>
            <Toolbox />

            {projectsList.map(x => <Card key={x.link} props={x} />)}
        </section>
    );
};