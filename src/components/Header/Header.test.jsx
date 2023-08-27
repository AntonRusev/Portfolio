import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./Header";

describe('Testing the Header Component', () => {
    test('show greeting from author', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByText(/Hello, I'm Anton!/i)).toBeInTheDocument();
    });

    test('clicking About leads to #about', async () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const aboutBtn = await screen.findByText(/about/i);
        fireEvent.click(aboutBtn);

        const currentUrlHash = global.window.location.hash;
        expect(currentUrlHash).toContain(`#about`);
    });

    test('clicking Projects leads to #my-projects', async () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const projectsBtn = await screen.findByText(/projects/i);
        fireEvent.click(projectsBtn);

        const currentUrlHash = global.window.location.hash;
        expect(currentUrlHash).toContain(`#my-projects`);
    });

    test('clicking Contact leads to #contact-me', async () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const contactBtn = await screen.findByText(/contact/i);
        fireEvent.click(contactBtn);

        const currentUrlHash = global.window.location.hash;
        expect(currentUrlHash).toContain(`#contact-me`);
    });
});