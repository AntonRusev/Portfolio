import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { About } from "./About";

describe('Testing About component', () => {
    test('show heading', () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );

        expect(screen.getByText(/about/i)).toBeInTheDocument();
    });

    test('image has proper src and is visible', () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );

        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/102323013?v=4');
        expect(img).toBeVisible();
    });

    test('Learn More button leads to /info', async () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );
        const learnMoreBtn = await screen.findByText(/learn more/i);
        fireEvent.click(learnMoreBtn);

        const currentUrlPath = global.window.location.pathname;
        expect(currentUrlPath).toContain(`/info`);
    });
});