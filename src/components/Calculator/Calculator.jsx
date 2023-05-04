import css from "./Calculator.module.css";

export const Calculator = () => {
    return (
        <section id={css.calculator}>
            <h1 className={css.title}>Crazy Calculator</h1>
            <div className={css['image-holder']}>
                <img className={css.imageOne} src='https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                <img className={css.imageTwo} src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
            </div>
            <div className={css.content}>
                <div className={css.info}>
                    <h4 className={css.subtitle}>Purpose and Goal</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla labore explicabo deleniti pariatur enim reprehenderit asperiores iste debitis suscipit saepe?</p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>Under the Hood</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, in perferendis qui dolorum officiis quo ex eligendi eius reiciendis laborum accusantium, vitae non cupiditate nihil corrupti temporibus, soluta ad consequuntur.</p>
                </div>
                
                <div className={css.info}>
                    <h4 className={css.subtitle}>Obstacles and Lessions Learned</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, in perferendis qui dolorum officiis quo ex eligendi eius reiciendis laborum accusantium, vitae non cupiditate nihil corrupti temporibus, soluta ad consequuntur.</p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>To Do</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, in perferendis qui dolorum officiis quo ex eligendi eius reiciendis laborum accusantium, vitae non cupiditate nihil corrupti temporibus, soluta ad consequuntur.</p>
                </div>
            </div>
        </section>
    );
};