import css from './Home.module.css'

export const Home = () => {
    return (
        <main id={css.home}>
            <section id={css.about}>
                <div className={css.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil ea aliquid esse eveniet ratione maiores recusandae sunt, quasi, labore quidem animi blanditiis accusamus placeat deserunt consequuntur corporis ullam porro.</div>
                <div className={css.pic}></div>
            </section>

            <section id={css.projects}>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dicta nobis earum harum, quaerat beatae ipsam velit, omnis sequi nemo aspernatur voluptas distinctio? Necessitatibus hic placeat maxime incidunt culpa minima assumenda! Est nisi sit iusto nemo impedit molestiae iure tempora! Vero quis praesentium non aperiam quibusdam suscipit ipsa quaerat culpa.</div>
            </section>

            <section id={css.contact}>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sunt laborum aliquam illum vero possimus?</div>
            </section>
        </main>
    );
};