import css from './Background.module.css';

export const Background = () => {
    return (
        <div id={css.background}>
            <div className={css.stars}></div>
            <div className={css.twinkling}></div>
        </div>
    );
};