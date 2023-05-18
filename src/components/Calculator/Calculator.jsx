import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import css from "./Calculator.module.css";

export const Calculator = () => {

    return (
        <section id="calculator" className={css.calculator}>
            <h1 className={css.title}>Crazy Calculator</h1>

            <div className={css['image-holder']}>
                <img className={css.imageOne} src="https://i.ibb.co/Y7m35jz/calc-mobile.png" />
                <img className={css.imageTwo} src="https://i.ibb.co/Vt3TmVF/calc-full.png" />
            </div>

            <div className={css.links}>
                <Link to='https://crazy-calculating-challenge.web.app/' target="_blank" className={css['link-btn']}><span>View site</span></Link>
                <Link to='https://github.com/AntonRusev/Crazy-Calculator' target="_blank" className={css['link-btn']}><span>Github Repo</span></Link>
            </div>

            <div className={css.content}>
                <div className={css.info}>
                    <h4 className={css.subtitle}>Purpose and Goal</h4>
                    <p>
                        Junior developer portfolio and Calculator project, name a more iconic duo. I'll wait. But this is no ordinary calculator- there is a twist! As you have probably guessed by the name(although, to be honest, more fitting name would have been Annoying Calculator...), this calculator tends to act... crazy. The buttons tend to shuffle whenever you press one of them, making it harder to complete the desired calculation.
                        "So why would anyone want to use it?", you might ask. Well, in order to not make this app feel like a complete waste of code, there is a game connected to the calculator, called "Crazy Calculating Challenge".

                    </p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>Under the Hood</h4>
                    <p>
                        Crazy Calculator is a Single Page Application. It consists of two interconnected functionalities- the calculator and the game.
                        The calculator is pretty straightforward(with the exception of the shuffling buttons), it can be used on its own, without starting the game.
                        The "Crazy Calculating Challenge" can be started by clicking a button, which will lead to a random three-digit number to be generated and a timer to start. The goal is as quickly as possible to get that number as result on the display of the calculator, while performing a minimum of three algorithmic operations(using one, or a mix of "+", "-", "/" or "x" operators). Needless to say, the game cannot be played without using the calculator.
                        There is also a High-score board, which lists the times of completing the challenge, from fastest to slowest, in a descending order.
                        The application has responsive design. By default it is build for desktop users, but can scale all the way down to 360px width for mobile devices.


                    </p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>Challenges and Lessions Learned</h4>
                    <p>
                        With this application I was trying to challenge myself and seek help from the internet only as a last resort. Because of this, I was more focused on making the calculator to function as intended, as opposite to structuring properly the logic in the code. As a result, at first there was one mega-function responsible for all possible operations, which eventually had to be refactored into a context.
                        The game part of the application was much more straightforward(and enjoyable to code), the only real setback I had was when it slipped my mind that setState() is asynchronous. I don't think I'll forget that ever again.

                    </p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>To Do</h4>
                    <p>
                        I'm playing with the idea of adding authentication, or simply adding a "Name" input upon completing the challenge, and making the High-scores persistent(stored on a server). This way players would be able to see their standings compared to other people.
                    </p>
                </div>

                <HashLink smooth to={`/#my-projects`} className={css['back-btn']}>Back</HashLink>
            </div>
        </section>
    );
};