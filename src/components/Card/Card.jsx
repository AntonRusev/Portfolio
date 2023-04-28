import css from './Card.module.css';

export const Card = () => {
    return (
        <article className={css.card}>

            <div className={css['image-holder']}>
                <img className={css.imageOne} src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                <img className={css.imageTwo} src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>

            <div className={css.content}>
                <h4 className={css.title}>Title</h4>
                <p className={css.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae, recusandae facere repudiandae ullam molestiae totam incidunt soluta debitis amet?</p>
                <a href="#">Learn More</a>
            </div>
        </article>
    );
};