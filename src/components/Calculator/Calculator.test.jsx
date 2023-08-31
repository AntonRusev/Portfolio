import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Calculator } from "./Calculator";

describe('Testing the Calculator component', () => {
    test('shows name of the project', () => {
        render(
            <BrowserRouter>
                <Calculator />
            </BrowserRouter>
        );

        const headingText = (screen.getByRole('heading', { level: 1 })).textContent;
        expect(headingText).toBe("Crazy Calculator");
    });

    test('shows the images', () => {
        render(
            <BrowserRouter>
                <Calculator />
            </BrowserRouter>
        );

        const [imgOne, imgTwo] = screen.getAllByRole('img');

        expect(imgOne).toHaveAttribute('src', 'https://i.ibb.co/Y7m35jz/calc-mobile.png');
        expect(imgTwo).toHaveAttribute('src', 'https://i.ibb.co/Vt3TmVF/calc-full.png');
    });

    test('links work', () => {
        render(
            <BrowserRouter>
                <Calculator />
            </BrowserRouter>
        );

        const [deployedLink, repoLink, backBtn] = screen.getAllByRole('link');

        expect(deployedLink).toHaveAttribute('href', 'https://crazy-calculating-challenge.web.app/');
        expect(repoLink).toHaveAttribute('href', 'https://github.com/AntonRusev/Crazy-Calculator');
        expect(backBtn).toHaveAttribute('href', '/#my-projects');
    });

    test('Back button works properly', () => {
        render(
            <BrowserRouter>
                <Calculator />
            </BrowserRouter>
        );

        const backBtn = screen.getByRole('link', { name: /back/i })
        fireEvent.click(backBtn);

        const currentUrlHash =  global.window.location.hash;
        expect(currentUrlHash).toContain(`#my-projects`);
    });
});