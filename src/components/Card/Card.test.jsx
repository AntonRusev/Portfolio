import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Card } from "./Card";

describe('Testing the Card Component', () => {
    test('recieves props', () => {
        const props = {
            title: 'Project Title',
            pictureOne: 'picture1',
            pictureTwo: 'picture2',
            description: 'Project Description',
            link: 'link',
        };

        render(
            <BrowserRouter>
                <Card props={props} />
            </BrowserRouter>
        );

        const [imgOne, imgTwo] = screen.getAllByRole('img');
        const link = screen.getByRole('link');

        expect(screen.getByText(/project title/i)).toBeInTheDocument();
        expect(screen.getByText(/project description/i)).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/link/#link');
        expect(imgOne).toHaveAttribute('src', 'picture1');
        expect(imgTwo).toHaveAttribute('src', 'picture2');
    });

    test('Learn More button leads to project\'s page', async () => {
        const props = {
            style: 'even',
            link: 'link',
        };

        render(
            <BrowserRouter>
                <Card props={props} />
            </BrowserRouter>
        );

        const contactBtn = await screen.findByText(/learn/i);
        fireEvent.click(contactBtn);

        expect(global.window.location.pathname).toContain(`/link`);
        expect(global.window.location.hash).toContain(`#link`);
    });
});