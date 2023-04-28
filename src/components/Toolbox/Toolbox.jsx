import css from './Toolbox.module.css';

export const Toolbox = () => {
    return (
        <div id={css.toolbox}>
            <p className={css.pyramid}>
            <span className={css.tool}>HTML5</span>
            <span className={css.tool}>CSS3</span>
            </p>
            <p className={css.pyramid}>
            <span className={css.tool}>Node.js</span>
            <span className={css.tool}>JavaScript</span>
            <span className={css.tool}>React</span>
            </p>
            <p className={css.pyramid}>
            <span className={css.tool}>RESTful APIs</span>
            <span className={css.tool}>Git</span>
            <span className={css.tool}>Firebase</span>
            <span className={css.tool}>Github</span>
            </p>
            <p className={css.pyramid}>
            <span className={css.tool}>VS Code</span>
            <span className={css.tool}>MongoDB</span>
            <span className={css.tool}>Mongoose</span>
            <span className={css.tool}>Typescript</span>
            </p>
        </div>
    );
};