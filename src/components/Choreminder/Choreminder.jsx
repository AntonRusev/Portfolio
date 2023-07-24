import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import css from "./Choreminder.module.css";

export const Choreminder = () => {

    return (
        <section id="choreminder" className={css.choreminder}>
            <h1 className={css.title}>CHOREMINDER</h1>

            <div className={css['image-holder']}>
                <img className={css.imageOne} src="https://i.ibb.co/0Zp8Cpd/chore-mobile.png" />
                <img className={css.imageTwo} src="https://i.ibb.co/Kmdz679/choreminder.png" />
            </div>

            <div className={css.links}>
                <Link to='https://chore-minder.web.app/' target="_blank" className={css['link-btn']}><span>View site</span></Link>
                <Link to='https://github.com/AntonRusev/Choreminder' target="_blank" className={css['link-btn']}><span>Github Repo</span></Link>
            </div>

            <div className={css.content}>
                <div className={css.info}>
                    <h4 className={css.subtitle}>Purpose and Goal</h4>

                    <p>
                        Any resemblance to fictional creatures, their names, or colors, is purely coincidental.
                    </p>

                    <p>
                        CHOREMINDER is a basic ToDo application that gives the user an option to set up a timer for chores that have to be done repetitively, every few to several days.
                        Every user has to create his own profile for his personal chores, which allows different users to share CHOREMINDER on a single device, or a single user to access his chores from multiple devices by simply logging in with his email.
                    </p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>Under the Hood</h4>

                    <p>
                        CHOREMINDER is a single page application(SPA), it supports authentication and authorization, meaning that every single user can see only his own chores.
                        The user(s) and chore(s) data is accessed remotely by communicating with REST API.
                    </p>
                    <p>
                        It is being developed with React, using technologies such as Typescript and SASS, among others.
                        The users have all CRUD options available to operate on their chores.
                        The application has input validation and error handling implemented. It also has responsive design.
                        By default it is designed for mobile devices(360px+), but it has more breakpoints using media queries(min-width).

                    </p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>Challenges and Lessions Learned</h4>

                    <p>
                        This is the first time, that I've started my own project from scratch using Typescript and SASS. While the way that I've handled them is far from perfect, I managed to get more comfortable using them over the period, in which I developed the application.
                        The other "new" thing to me, was working with dates. Manipulating data from and into various date formats might seem trivial, but it takes some time(see what I did there?) to get used to.
                    </p>
                </div>

                <HashLink smooth to={`/#my-projects`} className={css['back-btn']}>Back</HashLink>
            </div>
        </section>
    );
};