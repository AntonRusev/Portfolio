import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Trivial } from "./Trivial";

describe('Testing the Trivial component', () => {
    test('shows name of the project', () => {
        render(
            <BrowserRouter>
                <Trivial />
            </BrowserRouter>
        );

        const headingText = (screen.getByRole('heading', { level: 1 })).textContent;
        expect(headingText).toBe("Trivia-l");
    });

    test('shows the images', () => {
        render(
            <BrowserRouter>
                <Trivial />
            </BrowserRouter>
        );

        const [imgOne, imgTwo] = screen.getAllByRole('img');

        expect(imgOne).toHaveAttribute('src', 'https://i.ibb.co/zfWPKRB/trivial-mobile.png');
        expect(imgTwo).toHaveAttribute('src', 'https://i.ibb.co/BnCjXhs/trivial.png');
    });

    test('has proper links', () => {
        render(
            <BrowserRouter>
                <Trivial />
            </BrowserRouter>
        );

        const [deployedLink, repoLink, backBtn] = screen.getAllByRole('link');

        expect(deployedLink).toHaveAttribute('href', 'https://trivia-l.web.app/');
        expect(repoLink).toHaveAttribute('href', 'https://github.com/AntonRusev/Trivial');
        expect(backBtn).toHaveAttribute('href', '/#my-projects');
    });

    test('Back button works properly', () => {
        render(
            <BrowserRouter>
                <Trivial />
            </BrowserRouter>
        );

        const backBtn = screen.getByRole('link', { name: /back/i })
        fireEvent.click(backBtn);

        const currentUrlHash =  global.window.location.hash;
        expect(currentUrlHash).toContain(`#my-projects`);
    });
});