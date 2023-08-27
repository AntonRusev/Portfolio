import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Info } from "./Info";
import { Header } from "../Header/Header";

describe('Testing Info Component', () => {
    test('Header and Info to be visible at the same time', () => {
        render(
            <BrowserRouter>
                <Header />
                <Info />
            </BrowserRouter>
        );

        expect(screen.getByText(/Hello, I'm Anton!/i)).toBeInTheDocument();
        expect(screen.getByText(/As a member of the team/i)).toBeInTheDocument();
    });

    test('clicking Back leads to proper url', async () => {
        render(
            <BrowserRouter>
                <Info />
            </BrowserRouter>
        );

        const backBtn = await screen.findByText(/back/i);
        fireEvent.click(backBtn);

        const currentUrlHash = global.window.location.hash;
        await expect(currentUrlHash).toContain(`#about`);
    });
});