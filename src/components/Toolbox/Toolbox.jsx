import css from './Toolbox.module.css';

export const Toolbox = () => {
    return (
        <div id={css.toolbox}>
            <p className={css.pyramid}>
                <span className={css.tool}>HTML5</span>
                <span className={css.tool}>CSS3</span>
            </p>

            <p className={css.pyramid}>
                <span className={css.tool}>JavaScript</span>
                <span className={css.tool}>React</span>
                <span className={css.tool}>Git</span>
            </p>

            <p className={css.pyramid}>
                <span className={css.tool}>RESTful APIs</span>
                <span className={css.tool}>Typescript</span>
                <span className={css.tool}>Github</span>
                <span className={css.tool}>SASS</span>
            </p>
            
            <p className={css.pyramid}>
                <span className={css.tool}>Redux Toolkit</span>
                <span className={css.tool}>Responsive Design</span>
                <span className={css.tool}>Tailwind CSS</span>
                <span className={css.tool}>Firebase</span>
            </p>
        </div>
    );
};