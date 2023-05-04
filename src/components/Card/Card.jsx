import { Link } from 'react-router-dom';

import css from './Card.module.css';

export const Card = ({
    props
}) => {
    return (
        <article className={`${css.card} ${css[props.style]}`}>

            <div className={css['image-holder']}>
                <img className={css.imageOne} src={props.pictureOne} />
                <img className={css.imageTwo} src={props.pictureTwo} />
            </div>

            <div className={css.content}>
                <h4 className={css.title}>{props.title}</h4>
                <p className={css.description}>{props.description}</p>
                <Link to={`/${props.link}`} className={css.button}>Learn More</Link>
            </div>
        </article>
    );
};