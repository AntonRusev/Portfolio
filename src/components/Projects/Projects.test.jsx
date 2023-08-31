import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Projects } from "./Projects";

describe('Testing the Projects Component', () => {
    test('shows component\'s heading', () => {
        render(
            <BrowserRouter>
                <Projects />
            </BrowserRouter>
        );

        const headingText = (screen.getByRole('heading', { level: 2 })).textContent
        expect(headingText).toBe("PROJECTS");
    });

    test('shows all projects', () => {
        render(
            <BrowserRouter>
                <Projects />
            </BrowserRouter>
        );

        const projectTitles =  screen.getAllByRole('heading', { level: 4 });

        expect((projectTitles[0]).textContent).toBe('Trivia-l');
        expect((projectTitles[1]).textContent).toBe('NFTs Gallery');
        expect((projectTitles[2]).textContent).toBe('Crazy Calculator');
        expect((projectTitles[3]).textContent).toBe('CHOREMINDER');
    });
});