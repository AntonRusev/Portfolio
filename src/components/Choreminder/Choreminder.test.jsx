import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Choreminder } from "./Choreminder";

describe('Testing the CHOREMINDER component', () => {
    test('shows name of the project', () => {
        render(
            <BrowserRouter>
                <Choreminder />
            </BrowserRouter>
        );

        const headingText = (screen.getByRole('heading', { level: 1 })).textContent;
        expect(headingText).toBe("CHOREMINDER");
    });

    test('shows the images', () => {
        render(
            <BrowserRouter>
                <Choreminder />
            </BrowserRouter>
        );

        const [imgOne, imgTwo] = screen.getAllByRole('img');

        expect(imgOne).toHaveAttribute('src', 'https://i.ibb.co/0Zp8Cpd/chore-mobile.png');
        expect(imgTwo).toHaveAttribute('src', 'https://i.ibb.co/Kmdz679/choreminder.png');
    });

    test('has proper links', () => {
        render(
            <BrowserRouter>
                <Choreminder />
            </BrowserRouter>
        );

        const [deployedLink, repoLink, backBtn] = screen.getAllByRole('link');

        expect(deployedLink).toHaveAttribute('href', 'https://chore-minder.web.app/');
        expect(repoLink).toHaveAttribute('href', 'https://github.com/AntonRusev/Choreminder');
        expect(backBtn).toHaveAttribute('href', '/#my-projects');
    });

    test('Back button works properly', () => {
        render(
            <BrowserRouter>
                <Choreminder />
            </BrowserRouter>
        );

        const backBtn = screen.getByRole('link', { name: /back/i })
        fireEvent.click(backBtn);

        const currentUrlHash =  global.window.location.hash;
        expect(currentUrlHash).toContain(`#my-projects`);
    });
});