import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Home } from "./Home";

describe('Testing the Home Component', () => {
    test('shows children', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const subComponents =  screen.getAllByRole('heading', { level: 2 });

        expect((subComponents[0]).textContent).toBe('ABOUT');
        expect((subComponents[1]).textContent).toBe('PROJECTS');
        expect((subComponents[2]).textContent).toBe('CONTACT');
    });
});