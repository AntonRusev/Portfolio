import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import css from "./Nfts.module.css";

export const Nfts = () => {

    return (
        <section id="nfts" className={css.nfts}>
            <h1 className={css.title}>NFTs Gallery</h1>

            <div className={css['image-holder']}>
                <img className={css.imageOne} src="https://i.ibb.co/k8HVYDr/nft-create-mobile.png" />
                <img className={css.imageTwo} src="https://i.ibb.co/xqb8y1f/nft-home-full.png" />
            </div>

            <div className={css.links}>
                <Link to='https://nfts-gallery.web.app/' target="_blank" className={css['link-btn']}><span>View site</span></Link>
                <Link to='https://github.com/AntonRusev/React-NFTs' target="_blank" className={css['link-btn']}><span>Github Repo</span></Link>
            </div>

            <div className={css.content}>
                <div className={css.info}>
                    <h4 className={css.subtitle}>Purpose and Goal</h4>

                    <p>
                        No, not that kind of NFTs(although they seem to be equally worthless nowadays)...
                    </p>

                    <p>
                        The application is meant to serve as a gallery for pictures of animals with cute and funny Noses, Feet and Tails.
                        It was done and served as my project for a React educational module. Basically, it was a test-field for everything that I've learned during the course.
                    </p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>Under the Hood</h4>

                    <p>
                        NFTs Gallery is designed as a Single Page Application. It supports all CRUD operations, creating records and sending requests to a remote service- REST API.
                        The application has client-side routing(via React Router Dom) and route-guards. It also has error-handling and data validation implemented.
                    </p>
                    <p>
                        The application has a Public(accessible without authentication) and Private(available for registered users only) parts.
                        The public part is visible for everyone, it includes the Home page, the Gallery of NFTs, the Details page of any single given NFTs, the Login and Register pages.
                        The private part is accessible only when the user is logged in. It includes creating their own NFTs records, editing or deleting them(based on authorization), writing comments for any single given NFTs(even if the user is not the owner) and accessing the the User Profile page.
                        The application has responsive design. By default it is designed for mobile devices(360px+), but it has four breakpoints using media queries(min-width) in the following order - 500, 800, 1200, 1600.

                    </p>
                </div>

                <div className={css.info}>
                    <h4 className={css.subtitle}>Challenges and Lessions Learned</h4>

                    <p>
                        As mentioned above, this was an ongoing project from my first introduction to React, to the final exam of the course. As can be expected, there was a lot of moving forward and backwards around the project as new approaches and methodology of working with React were introduced. From Prop-drilling to using Context. From holding everything in one mega-component, to using separate Services and even custom Hooks. A lot of refactoring of code happened during that time.
                        At first, I wasn't a fan of going back and changing the code and structure of something, that already works. It was messy, many things broke when changes were made, at times it was very annoying. However as time passed, I saw the benefits and grew used to the idea that the code I write is not set in stone and everything is subject to change at one point or another.
                        It also taught me to make effort and write a tidy code.
                    </p>
                </div>

                <HashLink smooth to={`/#my-projects`} className={css['back-btn']}>Back</HashLink>
            </div>
        </section>
    );
};