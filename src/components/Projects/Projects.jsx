import { Card } from '../Card/Card';
import { CardTwo } from '../CardTwo/CardTwo';
import { Toolbox } from '../Toolbox/Toolbox';

import { projectsList } from '../../assets/projectsList';

import css from './Projects.module.css';

export const Projects = () => {
    return (
        <section id={css.projects}>
            <Toolbox />

            {projectsList.map(x => <Card key={x.link} props={x} />)}
            {/* <Card />
            <CardTwo /> */}
        </section>
    );
};